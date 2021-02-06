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

				<Logo />

				<nav className={style.primaryNav}>

					<Link to="about">About Me</Link>
					<Link to="resume">Projects</Link>
					<Link to="resume">Résumé</Link>
					<Link to="uses">/uses</Link>
					<Link to="blog">Blog</Link>
					<Link to="contact">Contact</Link>
					<Link to="contact">GitHub</Link>

				</nav>

			</PrimaryHeader>

			{children}

			<footer>

				<div className="fade-in" />

				<p>William Owen UK LIMITED is a company registered in England and Wales under company number 08243425.</p>
				<p>&copy; {new Date().getFullYear()} William Owen UK Limited. wo.dev branding, designed and development by William Owen @ <a href="https://wo.dev">wo.dev</a></p>

			</footer>

		</div>

	)

}

export default Layout;
