<template>
  <Layout>
    <div class="markdown">
      <div class="mb-2">{{$page.post.date}}</div>
      <g-link
        class="bg-gray-200 p-1 m-1 hover:bg-gray-300"
        v-for="tag in $page.post.tags"
        :key="tag.id"
        :to="tag.path"
      >#{{tag.id}}</g-link>
      <div v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: blogPost (id: $id) {
    title
    author
    date(format: "MMMM DD, YYYY")
    content
    tags {
      id
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style scoped src="../markdown.css">