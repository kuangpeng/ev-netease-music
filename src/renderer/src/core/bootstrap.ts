/**
 * 初始化基础数据
 */
import usePlaylistStore from "../store/modules/playlist"

export default function Initializer () {
  console.log('booot')
  const playlistStore = usePlaylistStore()

  playlistStore.fetchCatList()
  playlistStore.fetchHighQualityTags()
}
