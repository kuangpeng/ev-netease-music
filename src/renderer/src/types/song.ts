export interface Song {
  id: number
  name: string
  al?: Album
  album?: Album
  publishTime: number
  artists: Artist[]
  popularity: number
  score: number
  duration: number
}

export interface Album {
  id: number
  name: string
  picUrl: string
}

export enum TargetType {
  PLAY = 1,
  OPEN_URL = 3000,
  DETAIL = 10
}

export interface Artist {
  id: number
  name: string
  picUrl: string
  img1v1Url: string
  albumSize: number
}
