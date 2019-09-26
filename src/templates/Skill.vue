<template>
  <Layout>
    <h2>#{{$page.skill.id}}</h2>
    <div class="flex flex-col">
      <g-link v-for="edge in $page.skill.belongsTo.edges" :key="edge.node.id" :to="edge.node.path">
        <div class="shadow p-3 hover:shadow-lg">
          <div class>
            <h3 class="text-xl">{{edge.node.title}}</h3>
            <p class="text-gray-700 text-base">{{edge.node.excerpt}}</p>
          </div>
          <div class="pt-3">
            <g-link v-for="skill in edge.node.skills" :key="skill.id" :to="skill.path">
              <span
                class="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-gray-200"
              >#{{skill.id}}</span>
            </g-link>
          </div>
        </div>
      </g-link>
    </div>
 
    <Pager
      class="w-full flex justify-center my-2"
      :info="$page.skill.belongsTo.pageInfo"
      linkClass="px-3 hover:bg-gray-400"
    />

  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
    components: {
        Pager
    }
};
</script>

<page-query>
query Skill ($id: String!, $page: Int) {
  skill (id:$id) {
    id
    belongsTo(perPage: 10, page: $page) @paginate  {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
         	 ...on Project {
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
  }
}
</page-query>