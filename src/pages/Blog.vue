<template>
  <Layout>
    <div class="flex column">
      <Card v-for="edge in $page.blogPosts.edges" :key="edge.node.id" :to="edge.node.path">
        <h3>{{edge.node.title}}</h3>
        <span>{{edge.node.excerpt}}</span><br>
        <span class="dim">{{edge.node.date}}</span>
      </Card>
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