<template>
  <div class="pb-20 text-xl max-w-4xl m-auto">
    <header>
      <nav
        class="navbar fixed bottom-0 left-0 right-0 pl-5 pr-5 h-16 flex justify-between bg-white shadow-navbar md:shadow-none md:relative"
      >
        <g-link
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="navItem.path"
          :class="{'hidden md:block' : navItem.overflow}"
          class="pt-5"
        >
          <i class="fa" :class="navItem.icon"></i> {{navItem.text}}
        </g-link>
        <g-link class="pt-5 md:hidden">
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
      { text: "Home", path: "/", icon: "fa-home" },
      { text: "Blog", path: "/blog", icon: "fa-book" },
      {
        text: "Portfolio",
        path: "/#portfolio",
        icon: "fa fa-folder-open",
        overflow: true
      },
      { text: "Now", path: "/now", icon: "fa-clock" },
      {
        text: "Contact Me",
        path: "/#contact-me",
        icon: "fa-phone",
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
