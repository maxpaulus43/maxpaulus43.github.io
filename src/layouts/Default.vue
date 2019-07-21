<template>
  <v-app>
    <v-toolbar class="hidden-xs-only" scroll-off-screen :scroll-threshold="300" :color="color" dark>

      <g-link class="plain" to="/">
        <v-toolbar-title>{{ $static.metaData.siteName }}</v-toolbar-title>
      </g-link>

      <v-spacer></v-spacer>

      <v-toolbar-items >
        <g-link class="plain" v-for="item in menuItems" :key="item.title" :to="item.path">
          <!-- hack to get style working with g-links -->
          <v-btn flat style="height: 100%">
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.text }}
          </v-btn>
        </g-link>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>

    <v-card height="50px" class="hidden-sm-and-up" app>
      <v-bottom-nav :value="true" fixed :color="color" dark>
        <v-btn v-for="item in bottomBarItems" :key="item.title" :to="item.path" dark>
          <span>{{item.text}}</span>
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>

export default {
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

<style>
a.plain,
a.plain:link,
a.plain:visited,
a.plain:hover,
a.plain:focus,
a.plain:active {
  color: inherit;
  text-decoration: inherit;
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
</style>
