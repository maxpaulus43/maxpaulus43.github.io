<template>
  <Layout>
    <div class="markdown">
      <div>{{$page.post.date}}</div>
      <div v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: blogPost (id: $id) {
    title
    author
    date(format: "MMMM DD, YYYY")
    content
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