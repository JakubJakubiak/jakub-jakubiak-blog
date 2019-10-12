import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/index.css"


const IndexPage = ({
  data:{
    blog: { designsConnection: {edges} },
}}) =>(
 
  <Layout>

    <SEO title="Home" />
   
      <Image/>
      <div className="centerAll blog-wtraper">
      
      {edges.map(page =>(
        <Link className="link blog-touch" key={page.node.slug} to={page.node.slug}>
        <img className="img-blok" src= {page.node.image}/>
         <p> {page.node.title}</p>
        </Link>
      ))}
      </div>
  </Layout>
)

export const allBlogPagesQuery = graphql`
{
  blog{
  designsConnection {
    edges {
      node {
        status
        id
        title
        description
        image
        slug
      }
    }
  }
}
}
`;

export default IndexPage
