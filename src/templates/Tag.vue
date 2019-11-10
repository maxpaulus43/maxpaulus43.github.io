<template>
  <Layout>
    <h2>#{{$page.tag.id}}</h2>
    <Pager
      class="w-full flex justify-center my-2"
      :info="$page.tag.belongsTo.pageInfo"
      linkClass="px-3 hover:bg-gray-400"
    />
    <div class="flex flex-col">
      <g-link v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :to="edge.node.path">
        <div class="shadow p-3 hover:shadow-lg">
          <div class>
            <h3 class="text-xl">{{edge.node.title}}</h3>
            <p class="text-gray-700 text-base">{{edge.node.excerpt}}</p>
            <p class="text-gray-400 text-sm">{{edge.node.date}}</p>
          </div>
          <div class="pt-3">
            <g-link v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path">
              <span
                class="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500 mr-2 hover:bg-gray-200"
              >#{{tag.id}}</span>
            </g-link>
          </div>
        </div>
      </g-link>
    </div>

    <Pager
      class="w-full flex justify-center my-2"
      :info="$page.tag.belongsTo.pageInfo"
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
query Tag ($id: ID!, $page: Int) {
  tag (id:$id) {
    id
    belongsTo (perPage: 10, page: $page) @paginate  {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on BlogPost {
            id
            title
            path
            date(format:"MMMM DD, YYYY")
            excerpt
            tags {
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
