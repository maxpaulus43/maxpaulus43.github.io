<template>
  <div class="flex flex-col">
    <h2>Portfolio</h2>
    <g-link v-for="proj in projects.slice(0,3)" :to="proj.path" :key="proj.title" class="mb-2">
        <strong>{{proj.title}}</strong>
        <p class="text-sm">{{proj.summary}}</p>
    </g-link>
    <g-link to="/portfolio">More...</g-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        
      ]
    };
  }
};
</script>