<template>
  <div class="relative">
    <div @click="toggleShowMenu">
      <i class="fa fa-ellipsis-v"></i>
      <span>{{text}}</span>
    </div>
    <div id="popup-menu" v-if="showMenu" class="shadow">
      <g-link v-for="item in items" :key="item.text" :to="item.path">
        <div class="p-3 hover:bg-gray-300" @click="toggleShowMenu"><i class="fa" :class="item.icon"></i> {{item.text}}</div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  },
  computed: {
    text() {
      return this.showMenu ? "Less" : "More";
    }
  }
};
</script>

<style scoped>
#popup-menu {
  @apply absolute bg-white z-10;
  min-width: 200px;
  bottom: 38px;
  right: -20px;
}
</style>
