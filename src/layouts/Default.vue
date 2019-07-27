<template>
  <div class="pb-6">
    <header>
      <nav
        class="navbar fixed bottom-0 left-0 right-0 pl-5 pr-5 pt-5 h-16 flex justify-between bg-white shadow-navbar md:shadow-none md:relative"
      >
        <g-link
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="navItem.path"
          :class="{'hidden md:block' : navItem.overflow}"
        >
          <i :class="navItem.icon"></i>
          <span>{{navItem.text}}</span>
        </g-link>
        <g-link class="md:hidden">
          <MoreButton :items="overflowItems" />
        </g-link>
      </nav>
    </header>

    <main class="px-3">
      <slot />
    </main>

    <footer></footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import MoreButton from "~/components/MoreButton.vue";

export default {
  components: {
    MoreButton
  },
  data: () => ({
    drawer: null,
    color: "teal darken-2",
    navItems: [
      { text: "Home", path: "/", icon: "fa fa-home" },
      { text: "Blog", path: "/blog", icon: "fa fa-book" },
      {
        text: "Portfolio",
        path: "/#portfolio",
        icon: "fa fa-folder-open",
        overflow: true
      },
      { text: "Now", path: "/now", icon: "fa fa-clock" },
      {
        text: "Contact Me",
        path: "/#contact-me",
        icon: "fa fa-phone",
        overflow: true
      }
    ]
  }),
  computed: {
    overflowItems() {
      return this.navItems.filter(item => item.overflow);
    }
  },
  props: {
    source: String
  }
};
</script>

<style src="../main.css" />
