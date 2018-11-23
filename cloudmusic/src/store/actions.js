import * as types from './mutation-types'

export default {
  async getRecommandViewData({commit}, axios) {
    commit(types.REFREASH_RECOMMENDAJAX, true) //  正在请求
    let personalizedSongSheet = await axios.get('/cloudmusicapi/personalized')
    let personalizedNewsong = await axios.get('/cloudmusicapi/personalized/newsong')
    let personalizedDjprogram = await axios.get('/cloudmusicapi/personalized/djprogram')
    console.log(personalizedSongSheet)
    console.log(personalizedNewsong)
    console.log(personalizedDjprogram)
    commit(types.REVEVIVE_PERSONALIZESONGSHEET, personalizedSongSheet.data.result)
    commit(types.REVEVIVE_PERSONALIZENEWSONG, personalizedNewsong.data.result)
    commit(types.REVEVIVE_PERSONALIZEDJPROGRAM, personalizedDjprogram.data.result)
    commit(types.REFREASH_RECOMMENDAJAX, false) // 请求完毕
  },
  async getRankingListData({commit}, axios) {
    commit(types.REFREASH_TOPLISTAJAX, true) //  正在请求
    let topListDeatil = await axios.get('/cloudmusicapi/toplist/detail')
    console.log(topListDeatil)
    commit(types.REVEVIVE_TOPLISTDETAIL, topListDeatil.data.list)
    commit(types.REVEVIVE_ARTISTTOPLIST, topListDeatil.data.artistToplist)
    commit(types.REVEVIVE_REWARDTOPLIST, topListDeatil.data.rewardToplist)
    commit(types.REFREASH_TOPLISTAJAX, false) // 请求完毕
  },
  async getTop100ArtistsData({commit}, axios) {
    let artists = await axios.get('/cloudmusicapi/toplist/artist')
    console.log(artists)
    commit(types.RECIEVE_ARTISTS, artists.data.list.artists)
  },
  async getArtitstDetailData({commit}, {axios, id}) {

  }
}
