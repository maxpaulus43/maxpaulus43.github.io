<template>
  <Layout>
    <h1>Blog</h1>
    <g-link v-for="edge in $page.blogPosts.edges" :key="edge.node.id" :to="edge.node.path">
      <div>
        {{ edge.node.title }}
        {{ edge.node.date }}
        {{ edge.node.author }}
      </div>
    </g-link>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Max\'s Blog'
  }
}
</script>

<page-query>
query BlogPosts {
  blogPosts: allBlogPost {
    edges {
      node {
        id
        title
        author
        date(format: "MMMM DD, YYYY")
        path
      }
    }
  }
}
</page-query>