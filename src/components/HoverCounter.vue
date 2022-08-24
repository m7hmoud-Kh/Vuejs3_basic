<template>
    <div>
        <h2 @mouseover="increament">Click {{count}}</h2>
    </div>
</template>

<script>
// import useCounter from '../compasable/useCounter'
import useCounter from '../compasable/useCounter'

    export default {
        name:'HoverCounter',
        setup() {
            const {count , increament} = useCounter();

            return {
                count,
                increament
            }
        }
    }
</script>

<style scoped>

</style>