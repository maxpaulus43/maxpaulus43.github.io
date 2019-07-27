<template>
  <div class="relative">
    <div @click="toggleShowMenu">
      <i class="fa fa-ellipsis-v"></i>
      <span>{{text}}</span>
    </div>
    <div id="popup-menu" v-if="showMenu" class="shadow">
      <g-link v-for="item in items" :key="item.text" :to="item.path">
        <div class="p-3 hover:bg-gray-300" @click="toggleShowMenu"><i :class="item.icon"></i> {{item.text}}</div>
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
  position: absolute;
  min-width: 200px;
  background-color: white;
  bottom: 48px;
  right: -20px;
  z-index: 1;
}
</style>
