<template>
  <div>
    <div>{{message}}</div>
    <div class="blue" v-for="n in oddNums" v-bind:key="n">{{n}}</div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      message: "This and this and this.",
      nums: [
        1,2,3,4,5,6,7,8
      ]
    };
  },
  computed: {
    oddNums: function() {
      return this.nums.filter((n) => n % 2 ==1);
    }
  }
};
</script>

<style scoped>
.blue {
  color: blue;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
