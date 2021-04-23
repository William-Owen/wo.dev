import React from "react"
import clsx from "clsx";
import * as style from "./ProjectPage.module.css"
interface LayoutProps {

	children?: React.ReactNode
	projectTitle: string

}

const Layout: React.FC<LayoutProps> = (props) => {

	const className = clsx([

		style.ProjectPage,
		"ProjectPage"

	])

	return (

		<article className={className}>

			<header>

				<h1>
					project
					<span>{props.projectTitle}</span>
				</h1>

			</header>

			<main>

				{props.children}

			</main>

		</article>

	)

}

export default Layout;
