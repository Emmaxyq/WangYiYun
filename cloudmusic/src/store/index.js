import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  isRecommendAjax: false,
  isRankingListAjax: false,
  isSearchAjax: false,
  isRecommend: true,
  isRankingList: false,
  isSearch: false,
  personalizedSongSheet: [], // 推荐歌单信息
  personalizedNewsong: [], // 推荐新音乐信息
  personalizedDjprogram: [], // 推荐电台信息
  topListDetail: [], //  排行榜榜单详情信息
  artistToplist: [], //  歌手榜
  rewardToplist: [], //  赞赏榜
  artists: [], //  前100名歌手信息
  artistDetail: [] // 歌手详细信息
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
