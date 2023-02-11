import { Http } from '../base'
import type { CatList, HighQualityTag, PlayListItem, Track } from '@renderer/types/playlist'

interface ParamPlaylist {
  cat: string;
  limit?: number;
  offset?: number;
}
interface ResultPlayList {
  total: number;
  more: boolean;
  playlist: PlayListItem[];
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
interface ResultPlayListDetail {
  // relatedVideos?: object;
  playlist: PlayListItem;
  urls?: string;
  // privileges:
}
interface ParamPlayListTrackAll {
  id: number;
  limit?: number;
  offset?: number;
}
interface ResultPlayListTrackAll {
  songs: Track[];
}

const http = Http()

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
    return http.Get<ResultHighQuality>('/top/playlist/highquality', params)
  },
  getPlayList(params: ParamPlaylist) {
    return http.Get<ResultPlayList>('/top/playlist', params)
  },
  getPlayListDetail(params: {id: number}) {
    return http.Get<ResultPlayListDetail>('/playlist/detail', params)
  },
  getPlayListTrackAll(params: ParamPlayListTrackAll) {
    return http.Get<ResultPlayListTrackAll>('/playlist/track/all', params)
  }
}

export type PlaylistApi = typeof playlist

export default playlist
