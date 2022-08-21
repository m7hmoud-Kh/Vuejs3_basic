<template>
  <div>
    <button @click="loadPost">Load Posts</button>
    <div v-if="posts">
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GetPosts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    loadPost() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                this.posts = res.data;
                console.log(res);
            })
            .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped></style>
