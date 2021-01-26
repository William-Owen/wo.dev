import React from "react"
import clsx from "clsx";
import style from "./Page.module.css"

interface PageProps {

	children?: React.ReactNode

}

const Page: React.FC<PageProps> = ({children}) => {

	const className = clsx([

		style.Page,
		"Page",

	])

	return (

		<div className={className}>

			{children}

		</div>

	)

}

export default Page;
