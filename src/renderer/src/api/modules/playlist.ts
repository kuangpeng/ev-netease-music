import { http } from '../base'
import type { CatList, HighQualityTag, PlayListItem } from '@renderer/types/playlist'

interface ParamPlaylist {
  cat: string;
  limit?: number;
  offset?: number;
}
interface ResultPlayList {
  total: number;
  more: boolean;
  playlists: PlayListItem[];
  cat: string;
}
interface ParamHighQuality {
  cat: string;
  limit?: number | 10;
  before?: number;
}
interface ResultHighQuality {
  more: true;
  lasttime: number;
  total: number;
  playlists: PlayListItem[]
}

const playlist = {
  getCatList() {
    return http.Get<CatList>('/playlist/catlist')
  },
  getHighqualityTags() {
    return http.Get<{
      tags: HighQualityTag[]
    }>('/playlist/highquality/tags')
  },
  getHighqualityList(params: ParamHighQuality) {
    return http.Get<ResultHighQuality>('/playlist/highquality', params)
  },
  getPlayList(params: ParamPlaylist) {
    return http.Get<ResultPlayList>('/top/playlist', params)
  }
}

export type PlaylistApi = typeof playlist

export default playlist
