<template>
    <div>
        <h3>{{fname}} - {{lname}}</h3>

        <h3>count - {{count}}</h3>
        <button @click="incrementCount">incrementCount</button>


          <button @click="updateLocation">{{ location }}</button>

    </div>
</template>

<script>
import { inject, toRefs } from 'vue';
    export default {
        name: 'ChildA',
        setup() {
            const state = inject('state');
            const count = inject('count',0);
            const incrementCount = inject('incrementCount');
            const { location, updateLocation } = inject('location')
            return {
                ...toRefs(state),
                count,
                incrementCount,
                location,
                updateLocation
            }
        }
    }
</script>

<style scoped>

</style>