<template>
  <Layout>
    <div class="flex column">
      <g-link class="plain" v-for="edge in $page.blogPosts.edges" :key="edge.node.id" :to="edge.node.path">
        <Card>
          <h3>{{edge.node.title}}</h3>
          <span class="dim">{{edge.node.date}}</span>
          <p>{{edge.node.excerpt}}</p>
        </Card>
      </g-link>
    </div>
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  metaInfo: {
    title: "Max's Blog"
  },
  components: {
    Card
  }
};
</script>

<style scoped>

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