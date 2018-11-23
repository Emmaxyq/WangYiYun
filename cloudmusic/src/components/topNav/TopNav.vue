<template>
    <div class="header">
      <div class="mine">
        <img src="../../assets/mine.png"/>
      </div>
      <div class="title">
        <div>网易云音乐</div>
        <img src="../../assets/cloudmusiclogo.png"/>
      </div>
    </div>
</template>

<script>
    export default {}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .header
    width: 100%
    height: 64px
    padding: 0 10px
    display: flex
    background: #d43c33
    box-sizing: border-box
    .mine
      width: 64px
      height: 64px
      line-height: 90px
      flex: 0 0 64px
      text-align: center
      img
        width: 50%
    .title
      flex: 1
      display: flex
      line-height: 64px
      img
        display: inline-block
        width: 50px
        height: 50px
        flex: 0 0 50px
        transform: translateY(17%)
      div
        flex: 1
        display: inline-block
        height: 64px
        text-align: center
        color: white
        font-size: 24px
</style>
