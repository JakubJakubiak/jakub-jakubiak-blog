const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => 
{
  const { createPage } = actions
  const designTemplate = path.resolve(`src/templates/designTemplate.js`)
  const designsQuery = await graphql(`
  {
    blog {
      designs : designsConnection(first: 100) {
        edges {
          node {
            id
            status
            updatedAt
            createdAt
            title
            description
            image
            slug
            link
            div
          }
        }
      }
    }
  }
`)

  
  designsQuery.data.blog.designs.edges.forEach
  (design => {
    createPage({
      path: design.node.slug,
      component: designTemplate,
      context: {
        data: design.node
      },
    })
  });


}
