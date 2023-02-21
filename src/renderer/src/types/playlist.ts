// 歌单相关
import type { Album } from './song'
import type { Gender } from './basetype'

export interface Cat {
  name: string
  resourceCount: number
  imgId: number
  imgUrl?: string
  type: number
  category: number
  resourceType: number
  hot: boolean
  activity: boolean
}

export interface Category {
  [key: string]: string
}

export interface CatList {
  all: Cat
  sub: Cat[]
  categories: Category
}

export interface HighQualityTag {
  id: number
  name: string
  type: number
  category: number
  hot: boolean
}

export interface PlayListItem {
  id: number
  name: string
  description: string
  coverImgId?: number
  coverImgUrl: string
  coverImgId_str?: string
  userId?: number
  createTime: number
  updateTime?: number
  status?: number
  tags: string[]
  backgroundCoverUrl?: string
  titleImageUrl?: string
  englishTitle?: string
  playCount: number
  shareCount: number
  commentCount: number
  tracks?: Track[]
  subscribedCount: number
  trackCount?: number
  creator: Creator
}

export interface Creator {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: Gender
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: string[]
  experts?: null
  djStatus: number
  vipType: number
  remarkName?: null
  authenticationTypes?: number
  avatarDetail: {
    userType: number
    identityLevel: number
    identityIconUrl: string
  }
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

export interface Track {
  id: number
  al: Album
  ar: Array<{
    id: number
    name: string
    alias: string[]
    tns: string[]
  }>
  name: string
  publishTime: number
  dt: number
}
