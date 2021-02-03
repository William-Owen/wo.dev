import React, { useMemo, useState } from "react"
import clsx from "clsx";
import style from "./SkillList.module.css"
import _ from "lodash"
import SkillIcon from "../SkillIcon";
interface ISkillObject {

	name: string
	icon: string
	type: string[]
	content: string

}
interface ISkillListProps {

	data: ISkillObject[]

}

const SkillList: React.FC<ISkillListProps> = ({data: allSkillData}) => {

	const [filteredSkillData, setFilteredSkillData] = useState(_.sortBy(allSkillData, ['name']));

	// Collect all the skill types from the skills array

	const allSkillTypes = useMemo(()=>{

		const skillTypes = new Set()

		allSkillData.forEach(skill => {

			if (skill.type) {

				skill.type.forEach(type => {

					skillTypes.add(type)

				})

			}

		})

		return Array.from(skillTypes)


	}, allSkillData )

	const className = clsx([

		style.SkillList,
		"SkillList",

	])

	const handelFilterSkills = (e) => {

		const skillTypeFilterTerm = e.target.dataset.type

		const newData = allSkillData.filter(skill => {

			if (skill.type) {
				return skill.type.includes(skillTypeFilterTerm)
			}
			return false

		})

		setFilteredSkillData(newData)

	}

	const handelResetFilterSkills = () => {

		setFilteredSkillData(allSkillData)

	}

	return (

		<div className={className}>

			<h2>Skill Set</h2>

			<nav>

				<h4>Filter:</h4>
				<div onClick={handelResetFilterSkills}>Show all</div>
				{allSkillTypes.map(type=><div onClick={handelFilterSkills} data-type={type}>{type}</div>)}

			</nav>

			<div>

				{filteredSkillData.map(skill=>(

					<div className={style.skill}>

						<SkillIcon icon={skill.icon} />
						<h4>{skill.name}</h4>

					</div>

				))}

			</div>

		</div>

	)

}

export default SkillList;
