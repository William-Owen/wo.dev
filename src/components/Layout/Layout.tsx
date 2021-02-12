import React from "react"
import clsx from "clsx";
import style from "./Layout.module.css"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { Link } from "gatsby"
import Logo from "../../images/william-owen-white-logo.svg"
interface LayoutProps {

	children?: React.ReactNode

}

const PrimaryHeader = ({children}) => {

	const { scrollY } = useViewportScroll()
	const opacityValue = useTransform(scrollY, value => value / 100 )

	return <motion.header>{children}</motion.header>

}

const Layout: React.FC<LayoutProps> = ({children}) => {

	const className = clsx([

		style.Layout,
		"Layout"

	])

	return (

		<div className={className}>

			<a className={style.skipToContent} href="#content">Skip to content</a>

			<PrimaryHeader>

				<Link className={style.logo} to="/"><Logo /></Link>

				<nav className={style.primaryNav}>

					<Link to="/">Home</Link>
					<Link to="/about">About Me</Link>
					<Link to="/skills">Skill Set</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/uses">/uses</Link>
					{/* <Link to="/blog">Blog</Link> */}

				</nav>

			</PrimaryHeader>

			{children}

			<footer>

				<nav>
					<a href="mailto:hello@wo.dev">Contact Me</a>
					<a href="https://www.linkedin.com/in/williamowenuk/">LinkedIn</a>
					<a href="https://github.com/William-Owen">GitHub</a>
				</nav>

				<p>This website was created with <a href="https://www.gatsbyjs.com/">Gastby</a> and is hosted on <a href="https://www.netlify.com/">Netlify</a></p>
				<p>William Owen UK LIMITED is a company registered in England and Wales under company number 08243425.</p>
				<p>&copy; {new Date().getFullYear()} William Owen UK Limited. wo.dev branding, designed and development by William Owen @ <a href="https://wo.dev">wo.dev</a></p>

			</footer>

		</div>

	)

}

export default Layout;
