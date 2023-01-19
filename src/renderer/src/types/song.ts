export interface Song {
  id: number;
  name: string;
  al: Alumn;
  publishTime: number;
}

export interface Alumn {
  id: number;
  name: string;
  picUrl: string;
}

export type SongListItem = Song & {
  index: number;
}
