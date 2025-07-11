# FullStack Project with PrismaDB

A FullStack web application that fetches data from a custom configured backend API and Prisma Database.It consumes data from database and backned API displays it in a user-friendly and visually appealing way using Javascript, HTML and CSS. The project is setup via using Vite, Prisma has Database and API calls  made using fetch with Async/Await.

## Getting Started

- Clone project into your specified directory on your local machine 
```
https://github.com/tokslaw7/Tokslaw_FullStack_with_prismaDB.git
```
 * Initiate the node packages using `npm Install` after project in cloned.

 * Change directory into frontend folder and run the following command to string up the frontend server.
```
cd frontend
npm install
npm run dev
```

 * To string up the Backend Server, enter the following command. "Change directory to backend folder"
``` 
cd backend
npm install
Create .env and have it point to your SQLite database
        * Use the DATABASE_URL key for Prisma
        * Migrate the database using npx prisma migrate dev
        * This will apply all the migrations we have created
        * This will also generate a new prisma client
node server.js
```
**ls  -> to list folders and files 'node_modules'**

**node server.js -> springs up the backend server**

- Both frontend and backend server are running simultaneously

> - Frontend server is *making requests* to the backend 
> - Backend server is *responding* to request received from the client-side
> - Both *Pointing* at the same endpoint & *Using* same 
${port} to handle requests

- A clear, concise folder structure, including folders for backend and frontend including all  *server files*, *routes*   among others

### Connect to Database

### Create schema
Three Models created:
- User Model
- Profile Model
- Post Model

### Relationship between Models created in this project.
- User Model 
>- It creates 5 Users
>- It is tied to both Post and Profile Model
- Profile Model is 1:1 relationship
 >- It creates one  profile per user
- Post Model
>- Generates 2-4 Posts per User

### Migrate DB**
- **npx prisma validate**
- **npx prisma migrate dev --name init**
- **npx prisma studio**


### How data is generated using JS 
- A `seed.js` file inside backend folder contains all the created Models logic for functionality - *It adds (models)data to DB*
- A `server.js` file contains all routes , the server will use to respond when a request is made and how the DB delivers data.

** The frontend send requests to the backend endpoint (http://localhost:${port}/api/data), connects to DB and retrieves data which displays on client-side.
>- Prisma method () handles GET requests about models 
>- Middleware handles HTTP methods
>- Response is returned in JSON format (Backend Repsonse to frontend requests)

- Attach JS-Generated HTML to HTML element in existence
- Fetch API data and Display data on client-side when the page loads.


### Prerequisites

The things you need before installing the software.

* An IDE
* Node install on machine
* Npm install on machine
* Set up SQLite Database Connection in your IDE

### Installation

A step by step guide that will tell you how to get the development environment up and running.

```
cd frontend
$ npm create vite@latest frontend -- --template vanilla
$ npm install
$ npm run dev
```

### Create a Schema Using Prisma
```
 mkdir backend
 cd backend
 npm install prisma@6.7.0
 npm i @faker-js/faker --save-dev 
 mkdir prisma
 cd prisma 
 touch test.sqlite
 prisma init
```
>- Change credentials in *.env* DATABASE_URL="file:test.sqlite"
>- In *schema.prisma* Create DB Models has needed.

Express server 
### Backend - What happens Inside 

- Express and Cors libraries were imported
- The Prisma Databse used created a Prisma client on the server-side to handle GET requests with our existing models, like User, Profile and Post
- A middleware was created to handle our credentials with our HTTP methods across origins and browsers using Cors
- A `apiroute` was made to the client-side to `/api/data`
-  This  `apiRoute` works Using `try/catch`, the server handles and deliver the data from the database
Finally,the server is launched , and it's  listening at port `5557` - You can specifiey tour own port

### Frontend - Data fetch from API and Data Displayed 
- Applied HTML to display data fetched from the backend.
- CSS styles to make the data visually appealing
- Seperate JS Modules to handle the data and rendering it on the webpage. 

### Functionality
- Implemented a user-friendly display of UserProfile Cards

![FINAL API ](https://github.com/tokslaw7/Tokslaw_FullStack_with_prismaDB/blob/main/snapshots/github%20sample.png?raw=true)


### Server
**Development:** 
- localhost:${port} 
- localhost:${port}/api/data
 
### Branches

* Main: (https://github.com/tokslaw7/Tokslaw_FullStack_with_prismaDB.git)


## Additional Documentation and Acknowledgments
* TKH - "The Knowledge House"

