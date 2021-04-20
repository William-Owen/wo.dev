import React from "react"
import clsx from "clsx";
import * as style from "./PastHeroClients.module.css"
import WTGLogo from "./companies/wtg.svg"
import TescoLogo from "./companies/Tesco_Logo.svg"
import JMLogo from "./companies/JM.svg"
import SpindriftLogo from "./companies/SpindriftLogo.svg"
import PlayLogo from "./companies/play.svg"
import ImmediateMedia from "./companies/Immediate-Media.svg"
import RamesysLogo from "./companies/Ramesys.svg"
import LSCGroupLogo from "./companies/lsc.svg"

interface PastHeroClientsProps {

	children?: React.ReactNode

}

const PastHeroClients: React.FC<PastHeroClientsProps> = ({children}) => {

	const className = clsx([

		style.PastHeroClients,
		"PastHeroClients",

	])

	return (

		<section className={className}>

			<h2>Some great companies I have worked with</h2>

			<div>

				<WTGLogo />
				<TescoLogo />
				<JMLogo />
				<SpindriftLogo />
				<PlayLogo />
				<ImmediateMedia />
				<RamesysLogo />
				<LSCGroupLogo />

			</div>

		</section>

	)

}

export default PastHeroClients;
