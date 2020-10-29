<template>
  <div class="flex flex-col min-h-screen">
    <div class="pb-20 text-xl max-w-4xl m-auto flex-grow">

      <ContactMe v-if="showContactModal" @close="showContactModal = false"/>

      <header>
        <nav
          class="navbar fixed top-0 left-0 right-0 pl-5 pr-5 h-12 flex justify-between bg-white shadow-navbar md:shadow-none md:relative z-10"
        >
          <g-link
            v-for="navItem in navItems"
            :key="navItem.text"
            :to="navItem.path"
            :class="{ 'hidden md:block': navItem.overflow }"
            class="pt-2"
          >
            <i class="fa" :class="navItem.icon"></i>
            {{ navItem.text }}
          </g-link>
          <g-link class="pt-2 md:hidden">
            <MoreButton :items="overflowItems" />
          </g-link>
        </nav>
      </header>

      <main class="px-3 mt-16">
        <slot />
      </main>
    </div>

    <footer class="bg-gray-700 text-white flex justify-around p-4">
      <div class="flex flex-col">
        <div class="text-xl font-bold">Navigate</div>

        <g-link
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="navItem.path"
          class="pt-2"
        >
          {{ navItem.text }}
        </g-link>
      </div>

      <button class="text-xl font-bold" @click="showContactModal = true">
        Contact Max!
      </button>

      <div class="flex flex-col">
        <div class="text-xl font-bold">Links</div>
        <a href="https://linkedin.com/in/max-paulus-1b456aa8">
          <i class="text-xl fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/maxpaulus43">
          <i class="text-xl fab fa-github"></i>
        </a>
        <a href="mailto:maxpaulus43@gmail.com">
          <i class="text-xl fa fa-envelope"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MoreButton from "~/components/MoreButton.vue";
import ContactMe from "~/components/ContactMe.vue";

export default {
  components: {
    MoreButton,
    ContactMe
  },
  data: () => ({
    drawer: null,
    color: "teal darken-2",
    showContactModal: false,
    navItems: [
      { text: "Home", path: "/", icon: "fa-home" },
      {
        text: "Work",
        path: "/portfolio/",
        icon: "fa fa-folder-open",
      },
      { text: "Blog", path: "/blog/", icon: "fa-book" },
      {
        text: "Now",
        path: "/now/",
        icon: "fa-clock",
        overflow: true,
      },
    ],
  }),
  computed: {
    overflowItems() {
      return this.navItems.filter((item) => item.overflow);
    },
  },
  props: {
    source: String,
  }
};
</script>

<style src="../main.css" />
