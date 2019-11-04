<template>
  <Layout>
    <div>PORTFOLIO</div>
    <p class="text-sm mb-3">You can see my resumé 
      <a href="https://www.dropbox.com/s/322p5hn4l8co8u5/resume_2019.pdf?dl=0" class="link">here</a></p>
    <div class="flex flex-col">
      <g-link v-for="edge in $page.project.edges" :key="edge.node.id" :to="edge.node.path">
        <div class="shadow p-3 hover:shadow-lg">
          <div class>
            <h3 class="text-xl">{{edge.node.title}}</h3>
            <p class="text-gray-700 text-base">{{edge.node.excerpt}}</p>
          </div>
          <div class="pt-3">
            <p class="text-sm">Skills:</p>
            <g-link v-for="skill in edge.node.skills" :key="skill.id" :to="skill.path">
              <span
                class="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-gray-200"
              >#{{skill.id}}</span>
            </g-link>
          </div>
        </div>
      </g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Max's Portfolio"
  },
  data() {
    return {
    };
  }
};
</script>

<page-query>
query Projects {
  project: allProject {
    edges {
      node {
        id
        title
        excerpt
        path
        skills {
          id
          path
        }
      }
    }
  }
}
</page-query>

