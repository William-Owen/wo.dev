import React from "react"
import Page from "../components/Page"
import * as styles from "./project.module.css"
import { graphql, Link } from "gatsby"

const IndexPage = (props) => {

	console.info(props)

	const {markdownRemark: project} = props.data
	const {projectTitle} = project.frontmatter

	return (

		<div className={styles.projectPage}>

			<section className={styles.hero}>

				<Page>

					<h1><span>Project</span>{projectTitle}</h1>

				</Page>

			</section>

		</div>

	)

}

export default IndexPage

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        projectTitle
        abstract
      }
    }
    previousProject: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    nextProject: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        projectTitle
      }
    }
  }
`
