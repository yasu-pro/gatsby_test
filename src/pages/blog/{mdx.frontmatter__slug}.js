// import React, { useEffect } from "react"
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import {Seo} from '../../components/seo'

// コンソールでdataの中身を確認する。
// const BlogPost = (data) => {
//     useEffect(() => {
//     console.log(data)
//   }, [data])
// }

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
