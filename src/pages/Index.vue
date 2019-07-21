<template>
  <Layout>
    <Card>
      <Introduction id="introduction" />
    </Card>
    <Card>
      <Portfolio id="portfolio" />
    </Card>
    <Card>
      <ContactMe id="contact-me" />
    </Card>
  </Layout>
</template>

<script>
import Introduction from "~/components/Introduction.vue";
import Portfolio from "~/components/Portfolio.vue";
import ContactMe from "~/components/ContactMe.vue";
import Card from "~/components/Card.vue";

export default {
  metaInfo: {
    title: "Max's Home Page"
  },
  components: {
    Introduction,
    Portfolio,
    ContactMe,
    Card
  }
};
</script>

<style scoped>
</style>
