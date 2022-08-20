<template>
    <h2>
    Hello {{fullName.fname}} {{fullName.lname}} from First Component
    </h2>
</template>

<script>
    export default {
        data() {
            return {
                name:'Mahmoud'
            }
        },
        props:['fullName']
    }
</script>

<style scoped>

</style>