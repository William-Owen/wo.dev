import React from "react"
import Page from "../components/Page"
import PastHeroClients from "../components/PastHeroClients"
import styles from "./index.module.css"
import logiMouse from "../images/logi_mouse.png"

const IndexPage = () => {

	return (

		<div className={styles.indexPage}>

			<section className={styles.hero}>

				<Page>

					<h1><strong>Hello</strong><br />my name is William.</h1>

					<p>I am a <strong>web design</strong> and <strong>development</strong> contractor with over 25 years of commercial experience, based in the UK. I principally develop <strong>React</strong> applications, including <strong>user interface</strong> and <strong>experience design</strong>, for complex projects.</p>

				</Page>

				<img src={logiMouse} />

			</section>

			<Page>

				<h2>Philosophy</h2>

				<p>Finding the right solution for your project come from seeing technology, design and art as a single medium. Finding the right approach means understanding the problem and then thinking and communicating across domains.</p>

			</Page>

			<PastHeroClients />

		</div>

	)

}

export default IndexPage
