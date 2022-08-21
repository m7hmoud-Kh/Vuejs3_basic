<template>
    <div>
        TabA Content
        <h4>This is Count {{count}}</h4>
        <button @click="count += 1">Increase</button>
    </div>
</template>

<script>
    export default {
        name:'TabA',
        data() {
            return {
                count : 0
            }
        },
    }
</script>

<style scoped>

</style>