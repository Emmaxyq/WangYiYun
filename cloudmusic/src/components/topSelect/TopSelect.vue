<template>
    <div class="select">
      <div class="recommend" @click="toRoute('recommend')">
        <span :class="{active : isRecommend}">推荐</span>
      </div>
      <div class="rankingList" @click="toRoute('rankingList')">
        <span :class="{active : isRankingList}">排行榜</span>
      </div>
      <div class="search" @click="toRoute('search')">
        <span :class="{active : isSearch}">搜索</span>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      computed: {
        ...mapState(['isRecommend', 'isRankingList', 'isSearch'])
      },
      methods: {
        toRoute(val) {
          console.log(val)
          if (val === 'recommend') {
            this.$store.state.isRecommend = true
            this.$store.state.isRankingList = false
            this.$store.state.isSearch = false
          } else if (val === 'rankingList') {
            this.$store.state.isRecommend = false
            this.$store.state.isRankingList = true
            this.$store.state.isSearch = false
          } else {
            this.$store.state.isRecommend = false
            this.$store.state.isRankingList = false
            this.$store.state.isSearch = true
          }
          this.$router.push(val)
        }
      }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .select
    position: fixed
    width: 100%
    height: 40px
    line-height: 40px
    top: 64px
    left: 0
    background: white
    display: flex
    border: 1px solid #e5e5e5
    .recommend, .rankingList, .search
      flex: 1
      width: 33.3%
      height: 100%
      text-align: center
      font-size: 15px
      span
        padding: 0 10px 10px
        &.active
          color: #d33a31
          border-bottom: 2px solid #d33a31
</style>
