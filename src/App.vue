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

  <h3>{{ name.split('').reverse().join('') }}</h3>
  <span v-for="n in 10" :key="n">{{ n }}</span>
  <br>
  <template v-for="todo in todos" :key="todo.name">
      <span v-show="!todo.isComplete">
          {{todo.name}}
      </span>
  </template>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todos:[
        {
          name: 'eating',
          isComplete: true
        },
        {
          name: 'sleeping',
          isComplete: false
        },
        {
          name: 'Study',
          isComplete: true
        }
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
