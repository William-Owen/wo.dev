import React from "react"
import clsx from "clsx";
import style from "./SkillList.module.css"
import _ from "lodash"
import SkillIcon from "../SkillIcon";

interface SkillListProps {

	data: object

}

const SkillList: React.FC<SkillListProps> = ({data}) => {

	const className = clsx([

		style.SkillList,
		"SkillList",

	])

	const dataSorted = _.sortBy(data, ['name'])

	return (

		<div className={className}>

			<h2>Skill Set</h2>

			<div>

				{dataSorted.map(skill=>(

					<div>

						<SkillIcon icon={skill.icon} />
						<h4>{skill.name}</h4>

					</div>

				))}

			</div>

		</div>

	)

}

export default SkillList;
