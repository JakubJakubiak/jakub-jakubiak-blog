import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"
import { render } from "ink"

const DesignTemplate = ({pageContext: {data} })=>(

  <Layout>
   <SEO title={data.title} />
  <div className="centerPost">
      <img src={data.image}/>
      <h1 className="marginAll">{data.title}</h1>
      <p className="marginAll">{data.description}</p>
      <p><a className="link linkStyle" href={data.link}>{data.link}</a></p>

      <Link className="link" to="/"> Wróć do głownej  </Link>
</div>
  </Layout>
)



export default DesignTemplate
