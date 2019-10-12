import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"

const DesignTemplate = ({pageContext: {data} })=>(
  <Layout>
   <SEO title={data.title} />
  <div className="centerPost">
      <img src={data.image}/>
      <h1>{data.title}</h1>
      <h2>{data.slug}</h2>
      <p>{data.description}</p>
      <div>{data.div}</div>
      <p><a className="link" href={data.link}>{data.link}</a></p>

      <Link className="link" to="/"> Wróć do głownej  </Link>
</div>
    
  </Layout>
)

export default DesignTemplate