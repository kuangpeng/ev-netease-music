import { Artist } from './song'

export interface MV {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  duration: number
  playCount: number
  artists: Artist[]
  artistName: string
  artistId: number
  alg: string
}
