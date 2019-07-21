<template >
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
