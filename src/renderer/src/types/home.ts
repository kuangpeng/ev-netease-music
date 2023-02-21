import type { Song, Artist } from './song'

export interface Banner {
  imageUrl: string
  targetId: number
  adid?: null
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  monitorImpress?: null
  monitorClick?: null
  monitorType?: null
  monitorImpressList?: null
  monitorClickList?: null
  monitorBlackList?: null
  extMonitor?: null
  extMonitorInfo?: null
  adSource?: null
  adLocation?: null
  adDispatchJson?: null
  encodeId: string
  program?: null
  event?: null
  video?: null
  song?: null
  scm?: null
  bannerBizType?: string
}

export interface RecListItem {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: bigint
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string // TODO: alg
}

export interface RecNewSong {
  id: number
  type: number
  name: string
  picUrl: string
  song: Song
}

export interface RecNewMV {
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
