import express from 'express';
import { Application } from 'express';
import { Controller } from './controllers/interfaces/controller.interface';
export class App {
  public app: Application;
  public port: number;

  constructor(port: number, controllers: Controller[]) {
    this.port = port;
    this.app = express();

    this.initControllers(controllers);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`this app listen on the port ${this.port}`);
    });
  }

  private initControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.app.use('/', controller.router);
    });
  }
}
