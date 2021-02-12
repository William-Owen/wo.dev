import React, { useMemo, useState } from "react"
import clsx from "clsx";
import style from "./SkillList.module.css"
import _ from "lodash"
import SkillIcon from "../SkillIcon";
import Page from "../Page";
import LevelIndicator from "../LevelIndicator";
interface ISkillObject {

	title: string
	icon: string
	level: number
	preferred: boolean
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

			<Page className={style.Page}>

				<h2>Skill Set</h2>

				<p>To try and mitigate the <a href="https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect">Dunning Kruger effect</a> I have tried to evaluate my confidence in relying on a skill in a commercial context. The highest confidence is not attempting to indicate unparalleled knowledge, only high confident that I can deliver what a client might expect from someone experienced in this area to deliver quickly, to a processional standard and without assistance. </p>

				<ol className={style.levelKey}>

					<li><LevelIndicator level={1} /> <div><strong>Baseline</strong> - Able to use the common features, functions or concepts. Might need guidance for more advanced work, or might need more time to solve problems.</div></li>
					<li><LevelIndicator level={2} /> <div><strong>Intermediate</strong> - Able use more intermediate features, functions or concepts. Able to work alone for most tasks, may need time to understand advanced concepts.</div></li>
					<li><LevelIndicator level={3} /> <div><strong>Experienced</strong> - Confident in the use of most advanced features, functions or concepts. Able work alone, to troubleshoot and mentor others.</div></li>

				</ol>

			</Page>

			<nav>

				<h4>Filter:</h4>
				<div onClick={handelResetFilterSkills}>Show all</div>
				{allSkillTypes.map(type=><div onClick={handelFilterSkills} data-type={type}>{type}</div>)}

			</nav>

			<div className={style.skillCollection}>

				{filteredSkillData.map(skill=>{

					const skillClassName = clsx([
						style.skill,
						{[style.preferred]: skill.preferred}
					])

					return (

						<div className={skillClassName}>

							<SkillIcon icon={skill.icon} />
							<h4>{skill.title}</h4>
							<LevelIndicator className={style.level} level={skill.level} />

						</div>

					)

				})}

			</div>

		</div>

	)

}

export default SkillList;
