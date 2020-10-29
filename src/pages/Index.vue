<template>
  <Layout>
    <Introduction id="introduction" class="mb-3"/>
    <!-- <ContactMe id="contact-me" class="mb-3"/> -->
  </Layout>
</template>

<script>
import Introduction from "~/components/Introduction.vue";

export default {
  metaInfo: {
    title: "Max's Home Page"
  },
  components: {
    Introduction
  }
};
</script>

