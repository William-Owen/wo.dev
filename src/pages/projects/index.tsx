import React from "react"
import Page from "../../components/Page"
import * as styles from "./projects.module.css"
import PastHeroClients from "../../components/PastHeroClients"
import { graphql } from "gatsby"
import Card from "../../components/Card"

const ProjectPage = (props) => {

	const {edges: allProjects} = props.data.allMarkdownRemark

	return (

		<div className={styles.indexPage}>

			<Page>

				<h1>Projects &<br /><strong>design portfolio</strong></h1>

				<article>

					<div>

						<p>More information about these projects coming soon.</p>

						<h2>Why so few examples?</h2>

						<p>Unfortunately a large number of the projects I have work on are behind NDAs, are commercially sensitive or have security considerations as in the case of my work for the Ministry of Defence, Ministry of Justice and National Health Service.</p>

					</div>

				</article>

			</Page>

			<section className={styles.projectListingSection}>

				<div className={styles.projectListing}>

					{allProjects.map(project=>{

						console.info(project)

						const {slug} = project.node.fields
						const {projectTitle, abstract, heroScreen, tags} = project.node.frontmatter

						return <Card key={slug} tags={tags} title={projectTitle} abstract={abstract} imageNode={heroScreen} />

					})}

				</div>

			</section>

			<PastHeroClients />

		</div>

	)

}

export default ProjectPage

export const pageQuery = graphql`

	query {
		allMarkdownRemark(

			filter: {
				fields: {
					source: {eq: "project"}
				}
			}

		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						projectTitle
						abstract
						tags
						heroScreen {
							childImageSharp {
								gatsbyImageData(
									width: 550,
									placeholder: BLURRED,
									layout: FULL_WIDTH,
									formats: [AUTO, WEBP, AVIF]
								)
							}
						}
					}
				}
			}
		}
	}

`
