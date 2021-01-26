import React from "react"
import clsx from "clsx";
import style from "./Layout.module.css"

interface LayoutProps {

	children?: React.ReactNode

}

const Layout: React.FC<LayoutProps> = ({children}) => {

	const className = clsx([

		style.Layout,
		"Layout"

	])

	return (

		<div className={className}>

			{children}

		</div>

	)

}

export default Layout;
