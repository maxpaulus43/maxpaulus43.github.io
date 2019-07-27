<template>
  <Layout>
    <h2>#{{$page.tag.id}}</h2>
    <div class="flex flex-col">
      <g-link v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :to="edge.node.path">
        <div class="shadow p-3 hover:shadow-lg">
          <div class>
            <div class="font-bold text-xl">{{edge.node.title}}</div>
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
  </Layout>
</template>

<script>
export default {};
</script>

<page-query>
query Tag ($id: String!) {
  tag (id:$id) {
    id
    belongsTo {
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
