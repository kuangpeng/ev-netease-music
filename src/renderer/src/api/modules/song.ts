import { http } from '../base'
import { AxiosResponse } from 'axios'

const song = {
  getTestData<SongType> (params): Promise<AxiosResponse<SongType>> {
    return http.Get<SongType>('https://cnodejs.org/api/v1/topics', params)
  }
}

export default song
