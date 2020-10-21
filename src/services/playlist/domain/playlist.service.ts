export class PlaylistService {
  private db = new 
  constructor() {}
  findAllTracksAndCount(playlistId: number) {
    this.db = db.run(
      `"SELECT SUM(Milliseconds) FROM (SELECT TrackId, PlaylistId FROM playlist_track WHERE PlaylistId=${playlistId}" RIGHT JOIN tracks ON playlist_track.TrackId=tracks.TrackId))`,
    );
  }
}
