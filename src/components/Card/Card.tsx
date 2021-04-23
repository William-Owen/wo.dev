import React from "react"
import clsx from "clsx";
import * as style from "./Card.module.css"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tags from "../Tags";

interface CardProps {

	className?: string
	key?: string
	link?: string
	title?: string
	imageNode?: any
	abstract?: string
	tags?: string[]


}

const Card: React.FC<CardProps> = ({tags, link, className, title, abstract, imageNode}) => {

	const rooClassName = clsx([

		style.Card,
		"Card",
		className

	])

	const image = getImage(imageNode)

	const CardContent = (

		<>

			<GatsbyImage className={style.CardImage} image={image} alt="test" />

			{title &&
				<h3>{title}</h3>
			}

			{abstract &&
				<p>{abstract}</p>
			}

			{tags && <Tags tags={tags} />}

		</>

	)

	if (link) {

		return (

			<Link to={link} className={rooClassName}>

				{CardContent}

			</Link>

		)

	}

	return (

		<div className={rooClassName}>

			{CardContent}

		</div>

	)

}

export default Card;
