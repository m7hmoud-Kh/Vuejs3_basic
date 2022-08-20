<template>
    <div>
        Welcome to Component B
        <h2>{{username}}</h2>
    </div>
</template>

<script>

export default {
    name:'ComponentB',
    inject:['username']

}
</script>

<style>

</style>