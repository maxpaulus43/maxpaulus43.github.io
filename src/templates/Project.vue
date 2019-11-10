<template>
  <Layout>
    <div class="markdown">
      <div v-html="$page.project.content" />
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<page-query>
query Project ($id: ID!) {
    project: project(id: $id) {
        title
        excerpt
        content
        skills {
          id
          path
        }
    }
}
</page-query>

<style scoped src="../markdown.css">