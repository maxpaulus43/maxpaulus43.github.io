<template>
  <div>
    <header>
      <div class="nav-container xs-bottom">
        <nav class="navbar flex">
          <g-link to="/">
            <i class="fa fa-home"></i>
            <span> Home</span>
          </g-link>
          <g-link to="/blog">
            <i class="fa fa-book"></i>
            <span> Blog</span>
          </g-link>
          <g-link to="/#portfolio" class="xs-hidden">
            <i class="fa fa-folder-open"></i>
            <span> Portfolio</span>
          </g-link>
          <g-link to="/#contact" class="xs-hidden">
            <i class="fa fa-phone"></i>
            <span> Contact</span>
          </g-link>
          <g-link to="/now">
            <i class="fa fa-clock"></i>
            <span> Now</span>
          </g-link>
          <g-link class="xs-show">
            <MoreButton/>
          </g-link>
        </nav>
      </div>
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
    menuItems: [
      { text: "Blog", path: "/blog", icon: "import_contacts" },
      { text: "Portfolio", path: "/#portfolio", icon: "folder" },
      { text: "Now", path: "/now", icon: "alarm" },
      { text: "Contact Me", path: "/#contact-me", icon: "phone" }
    ],
    bottomBarItems: [
      { text: "Home", path: "/", icon: "home" },
      { text: "Blog", path: "/blog", icon: "import_contacts" },
      { text: "Now", path: "/now", icon: "alarm" }
    ]
  }),
  props: {
    source: String
  }
};
</script>

<style lang="scss">

$navBarHeight: 52px;

body {
  font-family: "Barlow";
  max-width: 760px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: stretch;
}

h1,
h2,
h3 {
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  margin: 0.4em 0;
}

.flex {
  display: flex;
}

.column {
  flex-direction: column;
}

.dim {
  opacity: 0.5;
}

.navbar {
  margin-bottom: 1em;
  height: $navBarHeight;
  justify-content: space-around;
  align-items: center;
  background-color: white;

  a {
    color: inherit;
  }
}

.xs-show {
  display: none;
}

@media all and (max-width: 414px) {
  .xs-hidden {
    display: none;
  }

  .xs-show {
    display: inline;
  }

  body {
    padding-bottom: $navBarHeight + 10px;
  }

  .navbar {
    position: fixed;
    left:0;
    right:0;
    bottom:-16px;
    box-shadow: 0 6px 15px gray;
  }
}

@media only screen and (min-width: 768px) {
  .navbar {
    justify-content: center;

    * {
      margin-right: 10px;
    }
  }
}
</style>
