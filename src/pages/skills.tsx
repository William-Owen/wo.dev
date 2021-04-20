import { graphql } from "gatsby"
import React from "react"
import Page from "../components/Page"
import SkillList from "../components/SkillList"

const IndexPage = ({data}) => {

	const skillsData = data.allMarkdownRemark.edges.map((skill:object)=>({

		... skill.node.frontmatter,
		content: skill.node.html,

	}))

	return (

		<>

			<SkillList data={skillsData} />

		</>

	)

}

export default IndexPage

export const pageQuery = graphql`
	{
		allMarkdownRemark(

			sort: {order: DESC, fields: [frontmatter___title]}

			) {
			edges {
				node {
					frontmatter {
						title,
						icon,
						type,
						level,
						preferred
					}
					html
				}
			}
		}
	}

`
