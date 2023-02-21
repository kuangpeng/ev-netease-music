import type { Track } from '@renderer/types/playlist'
import { Http } from '../base'

const http = Http()

interface ResultSongDetail {
  songs: Track[]
}

const song = {
  getSongDetail(params: { ids: string }) {
    return http.Get<ResultSongDetail>('/song/detail', params)
  }
}

export type SongApi = typeof song

export default song
