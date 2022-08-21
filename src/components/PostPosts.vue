<template>
    <div>
    <form @click.prevent="createPost">
        <div>
            <label>title</label>
            <input type="text" v-model="data.title" required>
        </div>
        <div>
            <label>Body</label>
            <input type="text" v-model="data.body" required>
        </div>
        <div>
            <label>UserId</label>
            <input type="text" v-model="data.user_id" required>
        </div>
        <button> Create Post</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'PostPosts',
        data() {
            return {
                data:{
                    title:'',
                    body:'',
                    user_id:''
                }
            }
        },
        methods: {
            createPost(){
                axios.post('https://jsonplaceholder.typicode.com/posts',this.data)
                .then((res) => console.log(res))
            }
        },
    }
</script>

<style scoped>

</style>