const { PrismaClient } = require ('./generated/prisma'); 
//const { PrismaClient } = require ('@prisma/client'); 
const { faker } = require ( '@faker-js/faker');
// import { faker }  from '@faker-js/faker';  //../generated/prisma" @prisma/client
// import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.profile.deleteMany();


// Create 5 users
  const users = [];
  for (let i = 0; i < 5; i++) {
  const user = await prisma.user.create({
      data: {
      userId: faker.string.uuid(),
      name: faker.person.fullName(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      role: i === 0 ? 'ADMIN' : i === 1 ? 'EDITOR' : 'USER',
      },
  });
    users.push(user);
    console.log(`User created: ${user.username}`);
  }


  // Each user creates 2-4 posts
  for (const user of users) {
  const postCount = faker.number.int({ min: 2, max: 4 });
  for (let i = 0; i < postCount; i++) {
      const post = await prisma.post.create({
      data: {
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(3),
          published: faker.datatype.boolean(),
          authorId: user.id,
      },
      });
      console.log(`Created post: ${post.title}`);
  }
  }

  for (const user of users){
      const profile = await prisma.profile.create({
      data: {
          bio: faker.person.bio(),
          avatar: faker.image.avatar(),
          //userId: user.id,
          userId: user.userId,
      },
  });
  console.log(`Profile created for user: ${user.username}, Bio: ${profile.bio}`);
  }

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });