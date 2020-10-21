import { Controller } from './interfaces/controller.interface';
import { Request, Response, Router } from 'express';
export class PlaylistController implements Controller {
  public path = '/playlist';
  public router = Router();
  private service = new PlaylistService();
  constructor() {
    this.initRoutes();
  }
  private initRoutes(): void {
    this.router.get(`${this.path}/:playlistId`);
  }
  findAllTracksFromPlaylistAndCount(request: Request, response: Response) {
    const playlistId = parseInt(request.params.playlistId);
    const allTracksFromPlaylistCounted = await this.service.findAllTracksAndCount(playlistId);
    response.send({ totalCount: allTracksFromPlaylistCounted });
}
  }
}
