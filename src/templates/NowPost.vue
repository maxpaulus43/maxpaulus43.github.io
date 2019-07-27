<template>
  <Layout>
    <span class="text-gray-600">last updated on {{$page.now.date}}</span>
    <div class="markdown">
      <div v-html="$page.now.content" />
    </div>
  </Layout>
</template>

<page-query>
query Now {
  now: nowPost(path:"/now") {
    date(format:"MMMM DD, YYYY")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Now"
    };
  }
};
</script>

<style scoped src="../markdown.css">
