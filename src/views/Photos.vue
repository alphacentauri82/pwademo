<template>
  <div class="photos">
    <h1>#{{ photos.length}} Photos</h1>
      <img v-for="p in photos" :key="p.id" :src="p.thumbnailUrl" alt="p">
  </div>
</template>


<script>
export default {
  data () {
    return {
      photos: []
    }
  },

  created () {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(photos => {
        this.photos = photos.slice(0, 20)
      })
  }
}
</script>

<style lang="css" scoped>
  .photos {
    padding-top: 10px;
  }

  h3 {
    text-transform: capitalize;
  }

  img {
    border: 1px solid #3d3d3d;
    max-width: 150px;
  }
</style>



