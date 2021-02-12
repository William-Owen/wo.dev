import React from "react"
import clsx from "clsx";
import style from "./LevelIndicator.module.css"
import Level05 from "./levels/level05.inline.svg"
import Level1 from "./levels/level1.inline.svg"
import Level15 from "./levels/level15.inline.svg"
import Level2 from "./levels/level2.inline.svg"
import Level25 from "./levels/level25.inline.svg"
import Level3 from "./levels/level3.inline.svg"

interface LevelIndicatorProps {

	level: number
	className?: string

}

const LevelIndicator: React.FC<LevelIndicatorProps> = ({level, className}) => {

	const rootClassName = clsx([

		style.LevelIndicator,
		"LevelIndicator",
		className

	])

	return (

		<>

			{(level === .5) && <Level05 className={rootClassName} />}
			{(level === 1) && <Level1 className={rootClassName} />}
			{(level === 1.5) && <Level15 className={rootClassName} />}
			{(level === 2) && <Level2 className={rootClassName} />}
			{(level === 2.5) && <Level25 className={rootClassName} />}
			{(level === 3) && <Level3 className={rootClassName} />}

		</>

	)

}

export default LevelIndicator;
