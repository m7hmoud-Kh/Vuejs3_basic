<template>
  <div>
    <!-- <div>{{ greet }} {{ name }}</div>
  <div v-html="showBold"></div>
  <div>
    <button v-bind:disabled="isDisable">Bind</button>

    <div
      v-bind:class="[
        isUnderline && 'underline',
        isPromoted && 'promoted',
        isSoldOut ? 'soldOut' : 'new',
      ]"
    >
      Status
    </div>
    <div v-bind:style="[baseObject, successObject]">Hello status</div>

    <div v-bind:style="[baseObject, dangerObject]">Hello danger status</div>
  </div>
  <div v-if="num == 0">Hello If Condition</div>
  <div v-else-if="num == 4">Hello Else-If Condition</div>
  <div v-else>Hello Else Condition</div>
  <div v-show="showDiv">Show Div</div>

  <ul v-for="movie in movies" :key="movie">
    <li>{{ movie }}</li>
  </ul>

  <template v-for="actor in actorsMovie" :key="actor.name">
    <h3>{{ actor.name }}</h3>
    <ul v-for="mv in actor.movie" :key="mv">
      <li>{{ mv }}</li>
    </ul>
  </template>

  <h3>{{ name.split("").reverse().join("") }}</h3>
  <span v-for="n in 10" :key="n">{{ n }}</span>
  <br />
  <template v-for="todo in todos" :key="todo.name">
    <span v-show="!todo.isComplete">
      {{ todo.name }}
    </span>
  </template>

  <h3>Used Methods: {{ add(num, 6) }}</h3>

  <h2>Counter- {{ num }}</h2>
  <button @click="increment()">Increment</button>
  <button @click="decrement()">Decrement</button>

  <h2>{{ name }}</h2>
  <button @click="changeName(), increment()">Change Name</button> -->

    <!-- using inline arrow function -->
    <!-- <button @click="($event) => warn('Form cannot be submitted yet.', $event)">
    Submit
  </button> -->

    <!-- <a @click.stop="doThis">Hello</a> -->
    <!--
  <div>{{ JSON.stringify(formValues) }}</div>

  <form @submit.prevent="formSubmit()">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.lazy.trim="formValues.name">
    </div>
    <div>
      <label for="desc" >Description</label>
      <textarea type="text" id="desc" v-model="formValues.desc">  </textarea>
    </div>
    <div>
        <label for="male">Male</label>
        <input type="radio" name="gender" id="male" value="male" v-model="formValues.gender">
          <label for="female">Female</label>
        <input type="radio" name="gender" id="female" value="female" v-model="formValues.gender">
    </div>

    <div>
      <label for="skills">Select Skills</label>
        <select  v-model="formValues.setSkills" multiple>
          <option v-for="mo in movies" :key="mo" :value="mo">
              {{mo}}
          </option>
        </select>
    </div>
    <div>
      <template v-for="mo in movies" :key="mo">
          <label for="">{{mo}}</label>
          <input type="checkbox"  id="" name="checkBox" :value="mo" v-model="formValues.checkBox">
      </template>
    </div>

    <div>
      <label for="age">age</label>
      <input type="number" id="age" v-model.lazy.number="formValues.age">
    </div>

    <div>
      <button>Sumbit</button>
    </div>


    <div v-pre>
      this is Pre {{Name}} Not Compile by Vue
    </div>



  </form> -->

    <!--
<h2>Data {{fullName.fname}} {{fullName.lname}}</h2>
<h2>Computed {{FullName}}</h2>


<input type="text" v-model="fullName.fname">
<input type="text" v-model="todos[0].name"> -->

    <!-- <h2>Total {{ totalCard }}</h2>

    <button @click="addItem()">Add New Item </button>
    <input type="text" v-model="fullName.fname">
    <h2>{{fullName.fname}}</h2>


    <h2 v-for="item in expensiveItem" :key="item.name">
    {{item.name}} - {{item.price}}
    </h2>


    <h2>{{fullNameComputed}}</h2>
    <button @click="ChangeFullName('Mahmoud','Ahmed')">Change Full Name</button>
    <h2>{{fullNameComputed}}</h2> -->

    <!-- <h2>Volume (0-20)</h2>
    <h1>Current Volume {{ volume }}</h1>
    <div>
      <button @click="increamentVolume()">Increase</button>
      <button @click="DecreamentVolume()">Decrease</button>
    </div>

    <Greet :fullName="fullName" />

    <template v-for="artical in Articals" :key="artical.id">
      <Artical  :artical="artical" :author="artical.author"/>
    </template>

    <ComponentA /> -->
    <!--
    <button @click="OpenPopUp()">Open PopUp</button>
    <PopUp v-show="showPopUp" @close="closePopUp" />
    -->

    <!-- <Input v-model="name" />

    <UserName v-model:fname="firstName"
              v-model:lname="lastName" />

    {{firstName }} - {{lastName}} -->

    <!-- Replace in Slot -->
    <!-- <Card>
      <template #header>
        <h2>Card Header</h2>
      </template>
      <template v-slot="slotProps">
            <h2>{{slotProps.text}} {{slotProps.count}}</h2>
      </template>
      <template #footer >
        <p>Card Footer</p>
      </template>
  </Card> -->

    <!-- <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </TransitionGroup>

    <button @click="items.push('item5')">Add Item </button>
    <button @click="items.pop()">Delete Item </button> -->

    <!-- <button @click="showTab = 'TabA'">TabA</button>
    <button @click="showTab = 'TabB'">TabB</button>
    <button @click="showTab = 'TabC'">TabC</button>

    <keep-alive>
        <component :is="showTab" />
    </keep-alive> -->
    <!--
      <h3>Vue Teleport Example</h3>
      <div>
          <Teleport to="#modal">
              <MyModal />
          </Teleport>
      </div> -->

    <!-- <PostPosts /> -->
    <!-- <GetPosts /> -->

    <HoverCounter />
    <ClickCounter />

    <!-- <input type='text' ref="input" > -->

    <!-- <h3>Name: {{firstName_ref}}</h3>
    <input type="text" v-model="firstName_ref">

    <h2>{{fname}} - {{lname}}</h2>
    <button @click='chnageName'>Change Name</button>


    <input type="text" v-model="fname">
    <input type="text" v-model="lname">

    <h2>{{reactiveFullName}}</h2>

      <input type="text" v-model="num1">
    <input type="text" v-model="num2">

    <h3>Sum is {{result}}</h3>

    <input type="number" v-model="count"> -->

    <!-- <h3>{{ fname }} - {{ lname }}</h3>

    <h3>count - {{ count }}</h3>
    <button @click="incrementCount">incrementCount</button>

    <ChildA /> -->


    <!-- <input  type="text" ref="refInput"/>

    <PropsComponent :fname='fname' :lname='lname' @changeState='changeState'/> -->
  </div>
</template>

<script>
// import Input from './components/Input.vue';
// import Greet from "./components/Greet.vue";
// import Artical from "./components/Artical.vue";
// import ComponentA from './components/ComponentA.vue';
// import PopUp from "./components/PopUp.vue";
// import Input from "./components/Input.vue";
// import UserName from "./components/UserName.vue";
// import Card from './components/Card.vue';
// import TabA from "./components/TabA.vue";
// import TabB from "./components/TabB.vue";
// import TabC from "./components/TabC.vue";
// import MyModal from './components/MyModal.vue';
// import GetPosts from './components/GetPosts.vue';
// import PostPosts from './components/PostPosts.vue';
// import ChildA from "./components/ChildA.vue";
// import PropsComponent from './components/PropsComponent.vue'

import ClickCounter from './components/ClickCounter.vue';
import HoverCounter from './components/HoverCounter.vue';
export default {
  name: "App",
  components: {
    // Input
    // Greet,
    // Artical,
    // ComponentA,
    // PopUp,
    // Input,
    // UserName,
    // Card,
    // TabA,
    // TabB,
    // TabC,
    // MyModal,
    // GetPosts,
    // PostPosts,
    ClickCounter,
    HoverCounter,
    // ChildA,
    // PropsComponent
  },
  setup() {
    // const firstName = ref("");
    // firstName.value = "Mahmoud";

    // const state = reactive({
    //   fname: "Mahmoud",
    //   lname: "Khairy",
    // });

    // const num1 = ref(0);
    // const num2 = ref(0);
    // const result = ref();

    // watch(
    //   () => num1.value + num2.value,
    //   (sum) => {
    //     result.value = sum;
    //     console.log(sum);
    //   }
    // );

    // const reactiveFullName = computed(() => {
    //   return `${state.fname} ${state.lname}`;
    // });

    // watch(firstName, (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // });

    // const obj = reactive({ count: 0 })

    // watch(
    //   () => obj.count,
    //   (count) => {
    //     console.log(`count is: ${count}`)
    //   }
    // )

    // setTimeout(() => {
    //   firstName.value = "Khairy";
    //   state.fname = "mai";
    //   state.lname = "khairy";
    //   // console.log(state)
    // }, 2000);

    // function chnageName() {
    //   state.fname = "mahmoud";
    //   state.lname = "khairy";
    // }

    // provide("state", state);

    // const count = ref(0);

    // provide("count", count);

    // function incrementCount() {
    //   count.value += 1;
    // }
    // provide("incrementCount", incrementCount);

    // const location = ref("North Pole");

    // function updateLocation() {
    //   location.value = "South Pole";
    // }

    // provide("location", {
    //   location,
    //   updateLocation,
    // });

    // const refInput = ref('')

    // onMounted(() => {
    //   refInput.value.focus();
    // })

    // function changeState(){
    //   state.fname = 'End';
    //   state.lname = "Course Vue3";
    // }


    return {
      // firstName_ref: firstName,
      // chnageName,
      // ...toRefs(state),
      // reactiveFullName,
      // num1,
      // num2,
      // result,
      // count,
      // incrementCount,
      // refInput,
      // changeState
    };
  },
  data() {
    return {
      showPopUp: false,
      // count: 2,
      name: "",
      firstName: "mahmoud",
      lastName: "khairy",
      cardContet: "Card Content",
      items: ["item1", "item2", "item3"],
      showTab: "TabA",
    };
  },
  methods: {
    OpenPopUp() {
      this.showPopUp = true;
    },
    closePopUp(name) {
      this.showPopUp = false;
      console.log("Name", name);
    },
    increaseCount(n) {
      this.count += n;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.soldOut {
  color: red;
}

.new {
  color: olivedrab;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
