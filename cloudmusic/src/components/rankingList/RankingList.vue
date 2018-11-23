<template>
  <div>
    <div class="rankingList" ref="rankingList">
      <div v-if="isRankingListAjax">加载中......</div>
      <div v-else>
        <div class="artistList" @click="toRouteArtists">
          <div class="pic">
            <img :src="artistToplist.coverUrl"/>
          </div>
          <div class="desc">
            <div v-for="(artistItem,artistIndex) in artistToplist.artists" :key="artistIndex" class="songItem">
              <span>{{artistIndex+1}}.{{artistItem.first}}</span>
              &nbsp;&nbsp;&nbsp;
              <img src="../../assets/good.png" width="15px">
              <span>{{artistItem.third}}</span>
            </div>
          </div>
        </div>
        <div class="rewardList">
          <div class="pic">
            <img :src="rewardToplist.coverUrl"/>
          </div>
          <div class="desc">
            <div v-for="(rewardItem,rewardIndex) in rewardToplist.songs" :key="rewardIndex" class="songItem">
              <span>{{rewardIndex+1}}.{{rewardItem.name}}-{{rewardItem.artists[0].name}}</span>
            </div>
          </div>
        </div>
        <div v-for="(topListItem,topListIndex) in topListDetail" :key="topListIndex" class="rankingListItem">
          <div class="pic">
            <img :src="topListItem.coverImgUrl">
          </div>
          <div class="desc">
            <div v-for="(songItem,songIndex) in topListItem.tracks" :key="songIndex" class="songItem">
              <span>{{songIndex+1}}.{{songItem.first}}-{{songItem.second}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      computed: {
        ...mapState(['topListDetail', 'artistToplist', 'rewardToplist', 'isRankingListAjax'])
      },
      mounted() {
        this.$nextTick(() => {
          console.log('rankrank')
          if (!this.rankingListScroll) {
            setTimeout(() => {
              this.rankingListScroll = new BScroll(this.$refs.rankingList, {
                click: true
              })
            }, 100)
          } else {
            this.rankingListScroll.refresh()
          }
        })
      },
      methods: {
        toRouteArtists() {
          console.log('1111111111111111111111')
          this.$router.push('/rankingList/artists')
        }
      }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .rankingList
    position: fixed
    top: 120px
    bottom: 0px
    left: 0
    overflow: hidden
    width: 100%
    .rankingListItem, .artistList, .rewardList
      margin: 5px
      display: flex
      .pic
        flex: 0 0 150px
        width: 150px
        img
          border-radius: 5px
          width: 150px
      .desc
        flex: 1 1 auto
        padding: 20px 5px
        line-height: 35px
        width: 0
        .songItem
          width: 100%
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          font-size: 13px
          word-break: normal
          color: #333
</style>
