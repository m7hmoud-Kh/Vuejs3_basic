<template>
    <div>
        <input type="text" :value="fname"
        @input="$emit('update:fname',$event.target.value)">
    </div>
    <div>
        <input type="text" :value="lname"
        @input="$emit('update:lname',$event.target.value)">
    </div>
</template>

<script>
    export default {
        props:['fname','lname'],
        emits:['update:fname','update:lname']
    }
</script>

Input
<style >

</style>