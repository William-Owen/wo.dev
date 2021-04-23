import React from "react"
import Page from "../components/Page"
import PastHeroClients from "../components/PastHeroClients"
import * as styles from "./index.module.css"

const PhilosophyPage = () => {

	return (

		<div className={styles.indexPage}>

			<section className={styles.hero}>

				<Page>

					<h1>Professional <strong>philosophy</strong></h1>

					<p>Technology, design and creative expressions are a single medium through which your projects ambition needs to be realised. Finding the right solutions means understanding the objective and thinking across these domains.</p>

					<h2>Design is not subjective</h2>

					<p>Far too often design is seen as a subjective expression of a creative individual. However design should not be seen in this way. If there is a clear objective any design expression should be evaluated as being better or worse at achieving that objective. Often bad design is a consequence of an unclear objective or mistakenly confusing subjective expression with affective design.</p>

					<p>When trying to understand the objective one of the key questions must be who are you designing for. To frequently the answer to this question is the designer, the client or product owner. It is usually never the case these these people are the actual intended audience of the design.</p>

					<h2>User experience is an holistic responsibility</h2>

					<p>User experience is not a role. User experience is an holistic responsibility. User experience is just as easily impeded white poor database optimisation as it is in elegant user interface design. And applications quality feel and performance are critical components of user experience. Elegant experience design is important, but it needs to be addressed by the whole team.</p>

					<h2>Empathy is a critical skill.</h2>

					<p>The value of empathy is too often overlooked in application design and development. Empathy for your customers, empathy for your project team, empathy for the product owner and empathy for the business. Without empathy project teams become dysfunctional as presumes build and requirements are missed or not fully realised.</p>

				</Page>

			</section>

		</div>

	)

}

export default PhilosophyPage
