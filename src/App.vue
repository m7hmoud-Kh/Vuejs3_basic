<template>
  <div>{{ greet }} {{ name }}</div>
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
  <button @click="changeName(), increment()">Change Name</button>

  <!-- using inline arrow function -->
  <!-- <button @click="($event) => warn('Form cannot be submitted yet.', $event)">
    Submit
  </button> -->


  <!-- <a @click.stop="doThis">Hello</a> -->

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
  </form>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      formValues:{
        name:'',
        desc: '',
        gender:'',
        setSkills: [],
        checkBox: [],
        age: ''
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
    };
  },
  methods: {
    formSubmit(){
      console.log(this.formValues);
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
  },
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
