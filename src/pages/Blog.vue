<template>
  <Layout>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Blog</h1>
      </v-flex>

      <v-flex v-for="edge in $page.blogPosts.edges" :key="edge.node.id" xs12>
        <g-link :to="edge.node.path">
          <v-card hover style="margin-top: 10px;">
            <v-card-title>
              <div>
                <h3>{{edge.node.title}}</h3>
                <span class="dim">{{edge.node.date}}</span>
              </div>
            </v-card-title>
            <v-card-text>{{edge.node.excerpt}}</v-card-text>
          </v-card>
        </g-link>
      </v-flex>
    </v-layout>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Max's Blog"
  }
};
</script>

<style scoped>
.dim {
  opacity: 0.5;
}
</style>

<page-query>
query BlogPosts {
  blogPosts: allBlogPost {
    edges {
      node {
        id
        title
        author
        excerpt
        date(format: "MMMM DD, YYYY")
        path
      }
    }
  }
}
</page-query>