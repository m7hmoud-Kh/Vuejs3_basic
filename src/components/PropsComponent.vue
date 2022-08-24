<template>
    <div>
        <h3>{{FullName}}</h3>
        <button @click="changeNameEmit">Change Name</button>
    </div>
</template>

<script>
    import { computed } from 'vue';
    export default {
        name:'PropsComponent',
        props:['fname','lname'],
        emit:['changeState'],
        setup(props,context) {

            const FullName =  computed(()=>{
                return `${props.fname} ${props.lname}`
            });

            function changeNameEmit(){
                context.emit('changeState')
            }


            return {
                FullName,
                changeNameEmit
            }
        }
    }

</script>

<style scoped>

</style>