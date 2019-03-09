<template>
  <div class="about-us">
    <div class="about-content">
      <h1>About US</h1>
    </div>
  </div>
</template>
<script>
export default {
  // head () {
  //   return {
  //     title: 'lalalalal'
  //   }
  // }
  head () {
    return {
      title: 'About',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style scoped>
  .about-us{
    width: 100%
  }
  .about-content{
    width: 1200px;
    margin: 0 auto;
  }
</style>

