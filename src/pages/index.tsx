import React from "react"
import Page from "../components/Page"
import SkillList from "../components/SkillList"
import styles from "./index.module.css"
import skills from "../data/skills"
import ToolsList from "../components/ToolsList"

const IndexPage = () => (

	<>

		<Page>

			<h1>wo.dev</h1>

			<p><strong>Hello</strong>, my name is William. I am a UK based contractor with over 20 years of commercial experience in web design and development.</p>
			<p>I principally develop React applications, including user interface and experience design, for complex projects. I am very effective at working with stakeholders, building a development strategy and communicating ideas.</p>

			<h2>Philosophy</h2>

			<p>The best solutions come from seeing design and development as a single medium through which we express an organizations ambitions. Finding the right approach means understanding, thinking, and communicating across domains.</p>

		</Page>

		<SkillList data={skills} />
		<ToolsList />

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

						<a href="http://hulo.io.">Hulo.io</a>
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

export default IndexPage
