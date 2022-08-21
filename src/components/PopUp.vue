<template>
  <div>
    <h2>This is PopUp</h2>
    <button @click="closePopUp()">Close PopUp</button>
    <input  v-model="name">
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    emits:{
        close: (name) => {
            return (!name) ? false : true;
        }
    },
    methods: {
        closePopUp() {
            this.$emit("close", this.name);
        },
    },
};
</script>

<style scoped></style>
