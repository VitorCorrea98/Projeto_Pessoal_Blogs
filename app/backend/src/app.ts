import express from 'express';
import userRouter from './Routes/User.Route';
import postRouter from './Routes/Post.Route';
import commentRouter from './Routes/Comment.Route';
import profileRouter from './Routes/Profile.Route';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes() {
    this.app.use('/users', userRouter);
    this.app.use('/posts', postRouter);
    this.app.use('/comments', commentRouter);
    this.app.use('/profiles', profileRouter);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;