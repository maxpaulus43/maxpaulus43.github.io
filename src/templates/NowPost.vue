<template>
  <Layout>
    <span class="dim">last updated on {{$page.now.date}}</span>
    <div v-html="$page.now.content" />
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
