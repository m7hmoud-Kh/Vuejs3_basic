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

    
  </div>
</template>

<script>
// import Greet from "./components/Greet.vue";
// import Artical from "./components/Artical.vue";
// import ComponentA from './components/ComponentA.vue';
export default {
  name: "App",
  components: {
    // Greet,
    // Artical,
    // ComponentA
  },
  data() {
    return {
      Articals: [
        {
          id: 1,
          name: "artical 1",
          isPublished: true,
          likes: 35,
          author:'batman'
        },
        {
          id: 2,
          name: "artical 2",
          isPublished: true,
          likes: 60,
          author:'spiderMan'

        },
        {
          id: 3,
          name: "artical 3",
          isPublished: true,
          likes: 34,
        },
        {
          id: 4,
          name: "artical 4",
          isPublished: false,
          likes: 100,
          author:'World'
        },
        {
          id: 5,
          name: "artical 5",
          isPublished: true,
          likes: 80,
          author:'hello'
        },
      ],
      volume: 0,
      fullName: {
        fname: "Mahmoud",
        lname: "Khairy",
      },
      formValues: {
        name: "",
        desc: "",
        gender: "",
        setSkills: [],
        checkBox: [],
        age: "",
      },
      todos: [
        {
          name: "eating",
          isComplete: true,
        },
        {
          name: "sleeping",
          isComplete: false,
        },
        {
          name: "Study",
          isComplete: true,
        },
      ],
      actorsMovie: [
        {
          name: "Ahmed Eiz",
          movie: ["El mamr", "El Rahena", "Malakey Alex"],
        },
        {
          name: "karim",
          movie: ["Abo Ail", "xyz", "Hello"],
        },
      ],
      movies: ["Dark", "Vikigns", "See"],
      showDiv: false,
      num: 4,
      name: "Khairy",
      greet: "Hello",
      showBold: "<b>For Testing</b>",
      isDisable: false,
      isUnderline: true,
      isPromoted: true,
      isSoldOut: false,
      baseObject: {
        color: "white",
        "font-size": "30px",
        padding: "10px",
      },
      successObject: {
        "background-color": "green",
        border: "1px solid green",
      },
      dangerObject: {
        "background-color": "red",
        border: "1px solid green",
      },
      cards: [
        {
          name: "Iphone",
          price: 200,
        },
        {
          name: "Computer",
          price: 300,
        },
        {
          name: "laptop",
          price: 400,
        },
      ],
    };
  },
  methods: {
    formSubmit() {
      console.log(this.formValues);
    },
    increamentVolume() {
      if (this.volume < 20) {
        this.volume += 2;
      }
    },
    DecreamentVolume() {
      if (this.volume != 0) {
        this.volume -= 2;
      }
    },
    add(num1, num2) {
      return num1 + num2;
    },
    increment(num = 1) {
      this.num += num;
    },
    decrement(num = 1) {
      this.num -= num;
    },
    changeName() {
      this.name = "Mahmoud";
    },
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
    addItem() {
      console.log("Method AddItem");
      console.log(this.cards);
      const obj = { name: "TV", price: 150 };
      this.cards.push(obj);
    },
    ChangeFullName(fname, lname) {
      this.fullName.fname = fname;
      this.fullName.lname = lname;
    },
  },
  computed: {
    totalCard() {
      return this.cards.reduce((total, curr) => total + curr.price, 0);
    },
    expensiveItem() {
      return this.cards.filter((item) => item.price > 200);
    },
    fullNameComputed: {
      set(fname, lname) {
        this.fullName.fname = fname;
        this.fullName.lname = lname;
      },
      get() {
        return `${this.fullName.fname}  ${this.fullName.lname}`;
      },
    },
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue == 16) {
        console.log(
          "You Are in Danger Zone , You Are heart You Hearing " + newValue
        );
      }
      if (newValue == 20) {
        console.log("The maximum Value is 20");
      }
    },
  },
  provide(){
    return{
      username: `${this.fullName.fname}  ${this.fullName.lname}`
    }
  }
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
</style>
