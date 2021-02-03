import React from "react"
import Page from "../components/Page"
import SkillList from "../components/SkillList"
import styles from "./index.module.css"
import ToolsList from "../components/ToolsList"
import { graphql } from "gatsby"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Logo from "../images/wo_dev_transparent.inline.svg"
import { reduce } from "lodash"

const SiteTitleDiv = ({children}) => {

	const { scrollY } = useViewportScroll()
	const opacityValue = useTransform(scrollY, value => value / 400 )

	return <motion.div className={styles.siteTitle} style={{ opacity: opacityValue, transform: `translateY(-${scrollY}px)` }}>{children}</motion.div>

}

const IndexPage = ({data}) => {

	const skillsData = data.allMarkdownRemark.edges.map(skill=>({

		name: skill.node.frontmatter.title,
		icon: skill.node.frontmatter.icon,
		type: skill.node.frontmatter.type,
		content: skill.node.html,

	}))

	return (

		<>

			<section className={styles.mainLogo}>

				<div className={styles.fade} />

				<div className={styles.logo}>

					<Logo role="presentation" alt="" />
					<Logo role="presentation" alt="" className={styles.lights} />

				</div>

				<SiteTitleDiv>

					<h1>WILLIAM OWEN</h1>
					<h2>Professional UI & UX design and development</h2>

				</SiteTitleDiv>

			</section>

			<Page>

				<section>

					<h1><strong>Hello</strong><br />my name is William.</h1>

					<p>I am a UK based contractor with over 20 years of commercial experience in web design and development.</p>
					<p>I principally develop React applications, including user interface and experience design, for complex projects. I am very effective at working with stakeholders, building a development strategy and communicating ideas.</p>

					<h2>Philosophy</h2>

					<p>The best solutions come from seeing design and development as a single medium through which we express an organizations ambitions. Finding the right approach means understanding, thinking, and communicating across domains.</p>

				</section>

			</Page>

			<SkillList data={skillsData} />

			<section>

				<ToolsList />

			</section>

			<Page>

				<div className={styles.links}>

					<nav>

						<h2>Side projects</h2>

						<div>

							<a href="https://www.reasonsleeps.com/">Reason Sleeps</a>
							<p>A video game project written in C# using the open source game engine Godot.</p>

						</div>

						<div>

							<a href="https://deviantrobot.com/">Deviant Robot</a>
							<p>A website and podcast celebrating ideas and imagination.</p>

						</div>

						<div>

							<a href="http://hulo.io">Hulo.io</a>
							<p>A small human log command line tool</p>

						</div>

					</nav>

					<nav>

						<h2>Connect</h2>

						<a href="mailto:enquiries@wo.dev">Contact Me</a>
						<a href="https://www.linkedin.com/in/williamowenuk/">LinkedIn</a>
						<a href="https://github.com/William-Owen">GitHub</a>

					</nav>

				</div>

			</Page>

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
						type
					}
					html
				}
			}
		}
	}

`
