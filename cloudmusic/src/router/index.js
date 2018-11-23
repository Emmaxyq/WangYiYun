import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/Recommend'
import RankingList from '../components/rankingList/RankingList'
import Search from '../components/search/Search'
import ArtistsTop100 from '../components/artistsTop100/ArtistsTop100'
Vue.use(Router)

const router = new Router({
  routes: [
    //  推荐
    {path: '/recommend', name: 'recommend', component: Recommend},
    //  排行榜
    {
      path: '/rankingList',
      name: 'rankingList',
      component: RankingList,
      children: [
        {path: '/rankingList/artists', name: 'artists', component: ArtistsTop100}
      ]},
    //  搜索
    {path: '/search', name: 'search', component: Search}
  ]
})

export default router
