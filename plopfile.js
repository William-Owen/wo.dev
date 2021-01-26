module.exports = function (plop) {

	// create your generators here

	plop.setGenerator("Component", {
		description: "Project component",
		prompts: [

			{
				type: "input",
				name: "componentName",
				message: "Component name",
			},

		], // array of inquirer prompts
		actions: [

			{
				type: "add",
				path: "src/components/{{componentName}}/{{componentName}}.tsx",
				templateFile: "plop-templates/component/componentName.tsx.hbs",
			},
			{
				type: "add",
				path: "src/components/{{componentName}}/{{componentName}}.module.css",
				templateFile: "plop-templates/component/componentName.css.hbs",
			},
			{
				type: "add",
				path: "src/components/{{componentName}}/index.tsx",
				templateFile: "plop-templates/component/index.tsx.hbs",
			},

		], // array of actions
	})

	plop.setGenerator("View", {

		description: "Project view",
		prompts: [

			{
				type: "input",
				name: "ViewName",
				message: "View name",
			},

		], // array of inquirer prompts
		actions: [

			{
				type: "add",
				path: "src/views/View{{ViewName}}/View{{ViewName}}.tsx",
				templateFile: "plop-templates/view/ViewComponentName.tsx.hbs",
			},
			{
				type: "add",
				path: "src/views/View{{ViewName}}/View{{ViewName}}.module.css",
				templateFile: "plop-templates/view/ViewComponentName.css.hbs",
			},
			{
				type: "add",
				path: "src/views/View{{ViewName}}/index.tsx",
				templateFile: "plop-templates/view/index.tsx.hbs",
			},

		], // array of actions

	})

}
