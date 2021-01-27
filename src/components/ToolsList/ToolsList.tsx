import React from "react"
import clsx from "clsx";
import style from "./ToolsList.module.css"
import AppleMacBookProImage from "../../images/tools/AppleMacbookPro.png"
import Bose700Image from "../../images/tools/Bose700.png"
import FocusriteScarlettSolo3Image from "../../images/tools/FocusriteScarlettSolo3.png"
import LogitechBrio4KImage from "../../images/tools/LogitechBrio4K.png"
import LogitechCraft2Image from "../../images/tools/LogitechCraft2.png"
import LogitechMasterMX3Image from "../../images/tools/LogitechMasterMX3.png"
import LoupedeckCreativeToolImage from "../../images/tools/LoupedeckCreativeTool.png"
import NikonD850Image from "../../images/tools/NikonD850.png"
import SureSMB7Image from "../../images/tools/SureSMB7.png"
import ValveIndexImage from "../../images/tools/ValveIndex.png"
import WacomIntuosProImage from "../../images/tools/WacomIntuosPro.png"
import XboxOneXEliteController2Image from "../../images/tools/XboxOneXEliteController2.png"
import AppleIpad from "../../images/tools/AppleIpad.png"

interface ToolsListProps {

	children?: React.ReactNode

}

const ToolsList: React.FC<ToolsListProps> = ({children}) => {

	const className = clsx([

		style.ToolsList,
		"ToolsList",

	])

	return (

		<div className={className}>

			<h2>Tools I use</h2>

			<div>

				<div>
					<img src={AppleMacBookProImage} />
					<h4>Apple MacBook Pro 2019</h4>
				</div>

				<div>
					<img src={Bose700Image} />
					<h4>Bose 700</h4>
				</div>

				<div>
					<img src={FocusriteScarlettSolo3Image} />
					<h4>Focusrite Scarlett Solo 3</h4>
				</div>

				<div>
					<img src={LogitechBrio4KImage} />
					<h4>Logitech Brio 4K</h4>
				</div>

				<div>
					<img src={LogitechCraft2Image} />
					<h4>Logitech Craft Keyboard</h4>
				</div>

				<div>
					<img src={LogitechMasterMX3Image} />
					<h4>Logitech MX Master 3</h4>
				</div>

				<div>
					<img src={LoupedeckCreativeToolImage} />
					<h4>Loupedeck Creative Tool</h4>
				</div>

				<div>
					<img src={NikonD850Image} />
					<h4>Nikon D850</h4>
				</div>

				<div>
					<img src={SureSMB7Image} />
					<h4>Sure SM7B</h4>
				</div>

				<div>
					<img src={ValveIndexImage} />
					<h4>Valve Index</h4>
				</div>

				<div>
					<img src={WacomIntuosProImage} />
					<h4>Wacom Intuos Pro</h4>
				</div>

				<div>
					<img src={XboxOneXEliteController2Image} />
					<h4>Xbox Elite Controller 2</h4>
				</div>

				<div>
					<img src={AppleIpad} />
					<h4>Apple iPad Pro</h4>
				</div>

			</div>

		</div>

	)

}

export default ToolsList;
