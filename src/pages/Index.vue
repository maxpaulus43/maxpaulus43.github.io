<template>
  <Layout>
    <Introduction id="introduction" />
    <Portfolio id="portfolio" />
    <ContactMe id="contact-me" />
  </Layout>
</template>

<script>
import Introduction from "~/components/Introduction.vue";
import Portfolio from "~/components/Portfolio.vue";
import ContactMe from "~/components/ContactMe.vue";

export default {
  metaInfo: {
    title: "Max's Home Page"
  },
  components: {
    Introduction,
    Portfolio,
    ContactMe,
  }
};
</script>

