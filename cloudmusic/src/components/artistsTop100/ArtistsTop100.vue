<template>
    <div class="artist">
      <div class="header">
        <div class="icon" @click="close">
          <img class="img" src="../../assets/close.png">
        </div>
        <div class="text">歌手榜</div>
      </div>
      <div class="artistsWrapper" ref="artistsWrapper">
        <div>
          <div class="artistsItem" v-for="(artist,artistIndex) in artists" :key="artistIndex">
            <div class="ranking">{{artistIndex+1}}</div>
            <div class="detail">
              <img class="img" :src="artist.picUrl"/>
              <div class="desc">
                <div class="name">{{artist.name}}</div>
                <div class="score">
                  <img src="../../assets/good.png" width="15px">
                  <span>{{artist.score}}</span>
                </div>
                <div class="topicPerson">
                  <span>#{{artist.name}}#</span>
                  {{artist.topicPerson}}人正在讨论
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      created() {
        if (this.artists.length <= 0) {
          this.$store.dispatch('getTop100ArtistsData', this.axios)
        }
      },
      mounted() {
        this.$nextTick(() => {
          if (!this.artistsWrapperScroll) {
            this.artistsWrapperScroll = new BScroll(this.$refs.artistsWrapper, {
              click: true
            })
          } else {
            this.artistsWrapperScroll.refresh()
          }
        })
      },
      computed: {
        ...mapState(['artists'])
      },
      methods: {
        close() {
          this.$router.go(-1)
        }
      }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .artist
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 100
    overflow: auto
    text-align: center
    background: white
    .header
      width: 100%
      font-size: 0
      height: 50px
      line-height: 50px
      background: #e54847
      color: white
      text-align: center
      display: flex
      .icon
        width: 39px
        flex: 0 0 39px
        line-height: 50px
        position: relative
        .img
          width: 39px
          position: absolute
          top: 0
          left: 0
          bottom: 0
          right: 0
          margin: auto
      .text
        font-size: 20px
        flex: 1
    .artistsWrapper
      position: fixed
      width: 100%
      top: 50px
      bottom: 0
      left: 0
      overflow: hidden
      margin-top: 10px
      .artistsItem
        margin: 10px
        display: flex
        .ranking
          display: inline-block
          width: 50px
          flex: 0 0 50px
          height: 100px
          line-height: 100px
          text-align: center
          font-size: 18px
          float: left
          font-weight: 700
          color: #888
        &:nth-child(1), &:nth-child(2), &:nth-child(3)
          .ranking
            color: red
        .detail
          flex: 1
          display: flex
          .img
            width: 100px
            height: 100px
            flex: 0 0 100px
          .desc
            flex: 1
            margin-left: 10px
            padding-top: 10px
            text-align: left
            .name
              font-size: 18px
              color: #333
              margin-bottom: 5px
            .score
              font-size: 15px
              color: #666
              margin-bottom: 5px
            .topicPerson
              font-size: 13px
              color: #666
              background: #e5e5e5
              padding: 5px
              border-radius: 15px
              span
                color: blue
</style>
