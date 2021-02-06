import React from "react"
import Page from "../components/Page"
import SkillList from "../components/SkillList"
import styles from "./index.module.css"
import ToolsList from "../components/ToolsList"
import { graphql } from "gatsby"
import WTGLogo from "../images/companies/wtg.svg"
import TescoLogo from "../images/companies/Tesco_Logo.svg"
import JMLogo from "../images/companies/JM.svg"
import SpindriftLogo from "../images/companies/SpindriftLogo.svg"
import PlayLogo from "../images/companies/play.svg"
import ImmediateMedia from "../images/companies/Immediate-Media.svg"
import RamesysLogo from "../images/companies/Ramesys.svg"
import LSCGroupLogo from "../images/companies/lsc.svg"

const IndexPage = ({data}) => {

	const skillsData = data.allMarkdownRemark.edges.map(skill=>({

		name: skill.node.frontmatter.title,
		icon: skill.node.frontmatter.icon,
		type: skill.node.frontmatter.type,
		content: skill.node.html,

	}))

	return (

		<>

			<section className={styles.hero}>

				<Page>

					<h1><strong>Hello</strong><br />my name is William.</h1>

					<p>I am a <strong>web design</strong> and <strong>development</strong> contractor with over 25 years of commercial experience, based in the UK. I principally develop <strong>React</strong> applications, including <strong>user interface</strong> and <strong>experience design</strong>, for complex projects.</p>

				</Page>

			</section>

			<Page>

				<h2>Philosophy</h2>

				<p>Finding the right solution for your project come from seeing technology, design and art as a single medium. Finding the right approach means understanding the problem and then thinking and communicating across domains.</p>

			</Page>

			<section className={styles.pastClients}>

				<h2>Some great companies I have worked with</h2>

				<div>

					<WTGLogo />
					<TescoLogo />
					<JMLogo />
					<SpindriftLogo />
					<PlayLogo />
					<ImmediateMedia />
					<RamesysLogo />
					<LSCGroupLogo />

				</div>

			</section>

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
