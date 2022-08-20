<template>
<div>
        <h2>Id: {{ artical.id }}</h2>
        <h2>title: {{ artical.name }}</h2>
        <h2>Likes: {{ artical.likes }}</h2>
        <h2>isPublished: {{isPublishedArtical}}</h2>
        <h2>Author : {{author}}</h2>
</div>
</template>

<script>
export default {
    name: "Artical",
    data() {
        return {
        }
    },
    props:{
        artical:{
            type:Object
        },
        author:{
            type: String,
            required: true,
            default: 'Author Defalut'
        }
    },
    methods: {
    },
    computed:{
        isPublishedArtical(){
            return this.artical.isPublished ? 'Shown' : 'Hide';
        }
    }

};
</script>

<style scoped></style>
