<template>
    <div class="recommend" ref="recommend">
      <div v-if="isAjax">加载中......</div>
      <div v-else>
        <div class="recommendSongSheet">
          <div class="title">推荐歌单</div>
          <div class="songSheetList">
            <ul class="songSheetItemUl">
              <li class="songSheetItemLi" v-for="(SongSheetitem,SongSheetindex) in personalizedSongSheet" :key="SongSheetindex" v-if="SongSheetindex <= 8">
                <img class="img" :src="SongSheetitem.picUrl">
                <div class="playCount">
                  <img src="../../assets/listen.png">
                  <span>{{SongSheetitem.playCount}}</span>
                </div>
                <div class="bgfillter"></div>
                <p class="desc">{{SongSheetitem.name}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="recommendNewSong">
          <div class="title">推荐新歌</div>
          <div class="newSongList">
            <div v-for="(NewsongItem, NewsongIndex) in personalizedNewsong" :key="NewsongIndex" class="newSongItem">
              <div class="ItemDesc">
                <div class="left">
                  <div class="itemtitle">
                    <span class="name">{{NewsongItem.name}}</span>
                    <span class="tvName" v-if="NewsongItem.song.alias.length > 0">({{NewsongItem.song.alias[0]}})</span>
                  </div>
                  <div class="artist">
                    <span>{{NewsongItem.song.artists[0].name}}-{{NewsongItem.name}}</span>
                  </div>
                </div>
                <div class="right">
                  <img src="../../assets/startListen.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recommendDjprogram">
          <div class="title">推荐电台</div>
          <div class="DjprogramList">
            <ul class="DjprogramItemUl">
              <li class="DjprogramItemLi" v-for="(Djprogramitem,Djprogramindex) in personalizedDjprogram" :key="Djprogramindex" v-if="Djprogramindex <= 5">
                <img class="img" :src="Djprogramitem.picUrl">
                <!--<div class="playCount">-->
                  <!--<img src="../../assets/listen.png">-->
                  <!--<span>{{Djprogramitem.playCount}}</span>-->
                <!--</div>-->
                <div class="bgfillter"></div>
                <p class="desc">{{Djprogramitem.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      computed: {
        ...mapState({
          personalizedSongSheet: 'personalizedSongSheet',
          personalizedNewsong: 'personalizedNewsong',
          personalizedDjprogram: 'personalizedDjprogram',
          isAjax: 'isRecommendAjax'
        })
      },
      mounted() {
        this.$nextTick(() => {
          if (!this.recommendScroll) {
            this.recommendScroll = new BScroll(this.$refs.recommend, {
              click: true
            })
          } else {
            this.recommendScroll.refresh()
          }
        })
      }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .recommend
    position: fixed
    top: 110px
    bottom: 0
    left: 0
    overflow: hidden
    width: 100%
    .recommendSongSheet, .recommendDjprogram
      margin-top: 20px
      .title
        margin-top: 10px
        padding-left: 9px
        margin-bottom: 14px
        font-size: 12px
        height: 20px
        line-height: 20px
        font-size: 17px
        color: rgb(51,51,51)
        border-left: 2px solid red
      .songSheetList, .DjprogramList
        padding-bottom: 24px
        .songSheetItemUl, .DjprogramItemUl
          width: 100%
          .songSheetItemLi, .DjprogramItemLi
            position: relative
            width: 33.1%
            display: inline-block
            height: 163px
            overflow: hidden
            margin-bottom: 10px
            &:nth-child(2), &:nth-child(5), &:nth-child(8)
              padding-left: 1px
              padding-right: 1px
            .img
              width: 100%
            .bgfillter
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 20px
              background: linear-gradient(180deg,rgba(0,0,0,.2),transparent)
              z-index: 2
            .playCount
              position: absolute
              right: 5px
              top: 2px
              z-index: 3
              font-size: 12px
              color: #fff
              img
                width: 15px
                display: inline-block
                margin-bottom: -2px
                margin-right: -5px
            .desc
              font-size: 13px
              line-height: 1.2
              padding: 6px 2px 0 6px
              color: #333
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 2
    .recommendNewSong
      .title
        margin-top: 10px
        padding-left: 9px
        margin-bottom: 14px
        font-size: 12px
        height: 20px
        line-height: 20px
        font-size: 17px
        color: rgb(51,51,51)
        border-left: 2px solid red
      .newSongList
        .newSongItem
          padding-left: 10px
        .ItemDesc
          border-bottom: 1px solid #e5e5e5
          display: flex
          .left
            flex: 1 1 auto
            padding: 6px 0
            width: 0
            .itemtitle
              font-size: 17px
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
              word-break: normal
              color: #333
              .tvName
                margin-left: 4px
                color: #888
            .artist
              font-size: 12px
              color: #888
          .right
            width: 42px
            flex: 0 0 42px
            text-align: center
            position: relative
            img
              width: 22px
              position: absolute
              top: 0
              left: 0
              bottom: 0
              right: 0
              margin: auto
</style>
