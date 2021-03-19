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
