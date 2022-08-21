<template>
    <div>
        <slot name="header"></slot>
        <slot :text="greetingMessage" :count="1"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name:'Card',
        data() {
            return {
                greetingMessage: 'Hello'
            }
        },
    }
</script>

<style scoped>

</style>