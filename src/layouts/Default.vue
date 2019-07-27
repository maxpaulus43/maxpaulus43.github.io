<template>
  <div>
    <header>
        <nav class="fixed bottom-0 left-0 right-0 pl-5 pr-5 pt-5 h-16 flex justify-between bg-white shadow md:shadow-none md:relative">
          <g-link to="/">
            <i class="fa fa-home"></i>
            <span> Home</span>
          </g-link>
          <g-link to="/blog">
            <i class="fa fa-book"></i>
            <span> Blog</span>
          </g-link>
          <g-link to="/#portfolio" class="hidden md:block">
            <i class="fa fa-folder-open"></i>
            <span> Portfolio</span>
          </g-link>
          <g-link to="/#contact-me" class="hidden md:block">
            <i class="fa fa-phone"></i>
            <span> Contact</span>
          </g-link>
          <g-link to="/now">
            <i class="fa fa-clock"></i>
            <span> Now</span>
          </g-link>
          <g-link class="md:hidden">
            <MoreButton :items="overflowItems"/>
          </g-link>
        </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
    </footer>
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
import MoreButton from '~/components/MoreButton.vue'

export default {
  components: {
    MoreButton
  },
  data: () => ({
    drawer: null,
    color: "teal darken-2",
    items: [
      { text: "Blog", path: "/blog", icon: "import_contacts" },
      { text: "Portfolio", path: "/#portfolio", icon: "folder", overflow: true },
      { text: "Now", path: "/now", icon: "alarm" },
      { text: "Contact Me", path: "/#contact-me", icon: "phone", overflow: true }
    ]
  }),
  computed: {
    overflowItems() {
      return this.items.filter(item => item.overflow);
    }
  },
  props: {
    source: String
  }
};
</script>

<style >
#app {
  font-family: "Barlow";
  font-size: 1.2em;
  max-width: 768px;
  margin: auto;
}
</style>
