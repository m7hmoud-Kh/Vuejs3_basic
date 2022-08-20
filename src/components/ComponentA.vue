<template>
    <div>
        welcome Component A
        <ComponentB />
    </div>
</template>

<script>
import ComponentB from './ComponentB.vue';
export default {
    name: 'ComponentA',
    components:{
        ComponentB
    }
}
</script>

<style>

</style>