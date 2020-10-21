import { App } from './app';
import { PlaylistController } from '../controllers/playlist.controller';
const app = new App(3000, [new PlaylistController()])