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
ls - to list folders and files ***NB:*** `node_modules`
Run - 'node server.js' - springs up the backend server 
```
- Both frontend and backend server are running simultaneously
> - Frontend server is *making requests* to the backend 
> - Backend server is *responding* to request received from the client-side
> - Both *Pointing* at the same endpoint & *Using* same 
${port} to handle requests

- A clear, concise folder structure, including folders for backend and frontend including all  *server files*, *routes*   among others

### Connect to Database

Databse to create shchemaa

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
 *{To fill DB tables with artificial data}* 
 mkdir *prisma* 
 cd prisma 
 touch test.sqlite
 prisma init
 - Change credentials in *.env* 
 - In *schema.prisma* Create DB Models has needed.
```

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

