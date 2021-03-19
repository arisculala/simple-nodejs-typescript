# Simple Nodejs Typescript
This is a simple boiletplate for nodejs typescript
- Make sure you have installed nodejs in your machine (https://nodejs.org/en/download/package-manager/)

## Project Initialization
- Create project folder
  ```
  mkdir simple-nodejs-typescript
  ```
- Go inside `simple-nodejs-typescript` and create a `package.json` by opening your terminal
  ```
  npm init
  ```
- Answer the questions prompt by terminal and confirm creation of package.json
  Here is the package.json file created:
```
{
  "name": "simple-nodejs-typescript",
  "version": "0.0.1",
  "description": "A simple application using nodejs and typescript",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs;",
    "typescript"
  ],
  "author": "arisculala",
  "license": "ISC"
}
```

## Setup Typescript
- Install and configure typescript
```
npm i -D typescript ts-node
```
`typescript` will install Typescript package
`ts-node` will install Typescript node runner so we don't need to build the application everytime we do a change, we will use Nodemon
- Run below command to create `tsconfig.json` file with default options enabled and comments
```
npx typescript --init
```
Here is the tsconfig.json content:
`dist` - directory where we want to compile the source code to
`rootDir` - directory where the Typescript files are going to be located
```
{
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "sourceMap": true,
      "outDir": "./dist",
      "rootDir": "./src",
      /* Strict Type-Checking Options */
      "strict": true,
      "noImplicitAny": true,
      /* Module Resolution Options */
      "moduleResolution": "node",
      "baseUrl": "./src",
      "esModuleInterop": true,
      /* Advanced Options */
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true
    },
    "lib": ["es2015"],
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```
- Setup scripts inside `package.json`
```
{
    // ...
    "scripts": {
        "start": "nodemon",
        "build": "tsc",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    // ...
}
```

## Setup Express
- Setup express
```
npm i -S express
npm i -D @types/express
```
`first command` - install express package
`second command` - since express does not have build in Typescript definitions

- Create `src/index.ts` with below content:
```
import express, { Application, Request, Response, NextFunction } from 'express';

// Instance of express
const app: Application = express();
const port = 8010;

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction ) => {
    res.status(200).send({data: 'Simple Nodejs Typescript Application'});
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
```
- Compile/build the application
```
npm run build
```

## Setup Nodemon


