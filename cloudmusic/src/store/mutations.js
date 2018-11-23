import * as types from './mutation-types'

export default {
  //  刷新isAjax的值
  [types.REFREASH_RECOMMENDAJAX](state, status) {
    state.isRecommendAjax = status
  },
  //  刷新isAjax的值
  [types.REFREASH_TOPLISTAJAX](state, status) {
    state.isRankingListAjax = status
  },
  //  刷新isAjax的值
  [types.REFREASH_SEARCHAJAX](state, status) {
    state.isSearchAjax = status
  },
  //  推荐歌单
  [types.REVEVIVE_PERSONALIZESONGSHEET](state, data) {
    state.personalizedSongSheet = data
    console.log(state.personalizedSongSheet)
  },
  //  推荐新歌
  [types.REVEVIVE_PERSONALIZENEWSONG](state, data) {
    state.personalizedNewsong = data
    console.log(state.personalizedNewsong)
  },
  //  推荐电台
  [types.REVEVIVE_PERSONALIZEDJPROGRAM](state, data) {
    state.personalizedDjprogram = data
    console.log(state.personalizedDjprogram)
  },
  //  排行榜榜单详情信息
  [types.REVEVIVE_TOPLISTDETAIL](state, data) {
    state.topListDetail = data
    console.log(state.topListDetail)
  },
  //  歌手榜
  [types.REVEVIVE_ARTISTTOPLIST](state, data) {
    state.artistToplist = data
    console.log(state.artistToplist)
  },
  //  赞赏榜
  [types.REVEVIVE_REWARDTOPLIST](state, data) {
    state.rewardToplist = data
    console.log(state.rewardToplist)
  },
  //  前100名歌手信息
  [types.RECIEVE_ARTISTS](state, data) {
    state.artists = data
    console.log(state.artists)
  },
  //  歌手详细信息
  [types.RECIEVE_ARTISTDETAIL](state, data) {
    state.artistDetail = data
    console.log(state.artistDetail)
  }
}
