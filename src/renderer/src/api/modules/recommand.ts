import { http } from '../base'
import { Banner, RecListItem, RecNewSong, RecNewMV } from '@renderer/types/home'

interface BannerResult {
  banners: Banner[]
}
interface RecListToday {
  hasTaste: boolean,
  category: number,
  result: RecListItem[]
}

interface NewSong {
  result: RecNewSong[];
  category: number;
}

interface NewMV {
  result: RecNewMV[];
  category: number;
}

const recommand = {
  getBanner() {
    return http.Post<BannerResult>('/banner')
  },
  getRecListToday() {
    return http.Get<RecListToday>('/personalized', {
      limit: 9
    })
  },
  getNewSong() {
    return http.Get<NewSong>('/personalized/newsong', {
      limit: 12
    })
  },
  getNewMV() {
    return http.Get<NewMV>('/personalized/mv', {
      limit: 4
    })
  }
}

export type RecommandApi = typeof recommand

export default recommand
