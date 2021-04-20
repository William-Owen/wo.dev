import React from "react"
import Page from "../components/Page"
import * as styles from "./index.module.css"

const IndexPage = () => {

	return (

		<div className={styles.indexPage}>

			<section className={styles.hero}>

				<Page>

					<h1><strong>Hello</strong><br />my name is William.</h1>

					<p>I have been designing and building websites and web based applications commercial experience for over 25 years, based in the UK. At wo.dev; I hope to being my broad range of experience to your project.</p>

					<h2>Principle services</h2>

					<ul>
						<li>Development project <strong>consultancy</strong></li>
						<li>Front-end project <strong>architecture</strong> design</li>
						<li>React front-end application <strong>development</strong></li>
						<li><strong>User Experience</strong> design.</li>
						<li><strong>User Interface</strong> design.</li>
						<li><strong>Branding</strong> and <strong>creative design.</strong></li>
					</ul>

				</Page>

			</section>

		</div>

	)

}

export default IndexPage
