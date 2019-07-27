<template>
  <Layout>
    <div class="flex flex-col">
      <g-link v-for="edge in $page.blogPosts.edges" :key="edge.node.id" :to="edge.node.path">
        <div class=" shadow p-3 hover:shadow-lg">
          <div class>
            <div class="font-bold text-xl">{{edge.node.title}}</div>
            <p class="text-gray-700 text-base">{{edge.node.excerpt}}</p>
            <p class="text-gray-400 text-sm">{{edge.node.date}}</p>
          </div>
          <div class="pt-3">
            <span
              v-for="tag in tags"
              :key="tag.text"
              class="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500 mr-2"
            >#{{tag.text}}</span>
          </div>
        </div>
      </g-link>
    </div>
  </Layout>
</template>

<script>

export default {
  data() {
    return {
      tags: [
        { text: "vue", path: "/" },
        { text: "javascript", path: "/" },
        { text: "self help", path: "/" }
      ]
    };
  },
  metaInfo: {
    title: "Max's Blog"
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