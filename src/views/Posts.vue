<template>
  <div class="posts">
    <h1>#{{ posts.length}} Posts</h1>
    <div class="post" v-for="p in posts" :key="p.id">
      <h3>{{ p.title }}</h3>
      <p>{{ p.body }}</p>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      posts: []
    }
  },

  created () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        this.posts = posts
      })
  }
}
</script>

<style lang="css" scoped>
  .posts {
    padding-top: 10px;
  }

  h3 {
    text-transform: capitalize;
  }

  .post {
    border: 1px solid #3d3d3d;
    width: 90%;
    padding: 5px;
    margin: auto;
    margin-bottom: 20px;
  }
</style>

