import React from "react"
import Page from "../components/Page"
import SkillList from "../components/SkillList"
import styles from "./index.module.css"
import ToolsList from "../components/ToolsList"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {

	const skillsData = data.allMarkdownRemark.edges.map(skill=>({

		... skill.node.frontmatter,
		content: skill.node.html,

	}))

	return (

		<>

			<Page>

				<h2>Uses</h2>

				<p>Finding the right solution for your project come from seeing technology, design and art as a single medium. Finding the right approach means understanding the problem and then thinking and communicating across domains.</p>

				<ul>

					<li>Pomodoro Technique https://en.wikipedia.org/wiki/Pomodoro_Technique</li>

				</ul>

			</Page>

			<ToolsList />

		</>

	)

}

export default IndexPage

export const pageQuery = graphql`
	{
		allMarkdownRemark(
			filter: {
				fields: {sourceName: {eq: "skills"}}},
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
