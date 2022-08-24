<template>
    <div>
        <button @click="increament">Click {{count}}</button>
    </div>
</template>

<script>
// import CounterMixins from '../mixins/counter';
import useCounter from '../compasable/useCounter'
    export default {
        name:'ClickCounter',
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