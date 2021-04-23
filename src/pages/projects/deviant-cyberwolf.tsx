import React from "react"
import ProjectPage from "../../components/ProjectPage"
import * as styles from "./projects.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Tags from "../../components/Tags"

const IndexPage = () => {

	return (

		<ProjectPage projectTitle="Deviant Cyberwolf">

			<article>

				<header className={styles.Card}>

					<div>

						<StaticImage className={styles.CardImage} src={"../../../content/projects/deviant-cyberwolf/cardImage-deviant-cyberwolf.jpg"} alt="test" />

						<h3>Deviant cyberwolf</h3>

						<p>Created Deviant as part of the Deviant Robot project Deviant Cyberwolf is a group deduction game based on the game Werewolf; it featured an 80s retro futurism aesthetic.</p>

						<Tags tags={["design", "personal"]} />

					</div>

				</header>

				<main>

					<StaticImage className={styles.Image} layout="constrained" src={"../../../content/projects/deviant-cyberwolf/vhs-cover.jpeg"} alt="test" />

					<div className={styles.Gallery}>

						<div>
							<StaticImage className={styles.Image} layout="constrained" src={"../../../content/projects/deviant-cyberwolf/poster.jpeg"} alt="test" />
						</div>

						<div>
							<StaticImage className={styles.Image} layout="constrained" src={"../../../content/projects/deviant-cyberwolf/game-set.jpeg"} alt="test" />
						</div>

						<div>
							<StaticImage className={styles.Image} layout="constrained" src={"../../../content/projects/deviant-cyberwolf/vhs.jpg"} alt="test" />
						</div>

					</div>

				</main>

			</article>

		</ProjectPage>

	)

}

export default IndexPage
