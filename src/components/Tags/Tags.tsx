import React from "react"
import clsx from "clsx";
import * as style from "./Tags.module.css"

interface TagsProps {

	tags: string[]

}

const Tags: React.FC<TagsProps> = ({tags}) => {

	const rooClassName = clsx([

		style.Tags,
		"Tags",

	])

	return (

		<div className={rooClassName}>

			{tags.map(tag=>(<span>{tag}</span>))}

		</div>

	)

}

export default Tags
