import { ref } from "vue";


export default function useCounter (){

    const count = ref(0);

    function increament(){
        count.value += 1;
    }

    return{
        count,
        increament
    }

}