declare module '*.css' {
	interface IClassNames {
	  [className: string]: string
	}
	const classNames: IClassNames;
	export = classNames;
  }

declare module "*.module.css" {
	const content: any;
	export default content;
}

declare module "*.svg" {
	const content: any;
	export default content;
}

declare module "*.png" {
	const content: any;
	export default content;
}
