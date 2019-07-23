<template >
  <div class="card">
    <g-link v-if="to" :to="to">
      <slot />
    </g-link>
    
    <slot v-else/>
  </div>
</template>

<script>
export default {
  props: {
    to: String
  }
};
</script>

<style scoped>

.card > a,
.card > a:link,
.card > a:visited,
.card > a:hover,
.card > a:focus,
.card > a:active {
  color: inherit;
  text-decoration: inherit;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: transform .2s; /* Animation */
    box-shadow: 0px 1px 3px gray;
    padding: 10px 15px;
    margin-bottom: 8px;
    background-color: white;
}

.card:hover {
    box-shadow: 0px 2px 5px gray;
}

</style>
