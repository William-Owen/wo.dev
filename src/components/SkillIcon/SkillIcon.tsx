import React from "react"
import AppleIcon from "./icons/apple.svg"
import Css3Icon from "./icons/css3.svg"
import Csharp from "./icons/csharp.svg"
import DockerIcon from "./icons/docker.svg"
import GatsbyIcon from "./icons/gatsby.svg"
import GitIcon from "./icons/git.svg"
import Testinglibrary from "./icons/testinglibrary.svg"
import GithubIcon from "./icons/github.svg"
import GitlabIcon from "./icons/gitlab.svg"
import GoogleanalyticsIcon from "./icons/googleanalytics.svg"
import GraphQLIcon from "./icons/graphql.svg"
import Godotengine from "./icons/godotengine.svg"
import Html5Icon from "./icons/html5.svg"
import JavascriptIcon from "./icons/javascript.svg"
import LinuxIcon from "./icons/linux.svg"
import MarkdownIcon from "./icons/markdown.svg"
import NodeIcon from "./icons/node-dot-js.svg"
import ReactIcon from "./icons/react-icon.svg"
import ReduxIcon from "./icons/redux.svg"
import SassIcon from "./icons/sass.svg"
import WebpackIcon from "./icons/webpack.svg"
import WindowsIcon from "./icons/windows.svg"
import SketchIcon from "./icons/sketch.svg"
import ApollographqlIcon from "./icons/apollographql.svg"
import AffinityphotoIcon from "./icons/affinityphoto.svg"
import AffinitydesignerIcon from "./icons/affinitydesigner.svg"
import AdobetypekitIcon from "./icons/adobetypekit.svg"
import AdobepremiereIcon from "./icons/adobepremiere.svg"
import AdobephotoshopIcon from "./icons/adobephotoshop.svg"
import AdobelightroomclassicIcon from "./icons/adobelightroomclassic.svg"
import AdobeaftereffectsIcon from "./icons/adobeaftereffects.svg"
import Adobeindesign from "./icons/adobeindesign.svg"
import Adobexd from "./icons/adobexd.svg"
import CypressIcon from "./icons/cypress.svg"
import ReactrouterIcon from "./icons/reactrouter.svg"
import JestIcon from "./icons/jest.svg"
import StoryBookIcon from "./icons/storybook.svg"
import CraftCSMIcon from "./icons/craftcms.svg"
import VSCodeIcon from "./icons/visualstudiocode.svg"
import NetlifyIcon from "./icons/netlify.svg"
import JiraIcon from "./icons/jira.svg"
import PodcastIcon from "./icons/podcast.svg"
import BabelIcon from "./icons/babel.svg"
import EslintIcon from "./icons/eslint.svg"
import ElectronIcon from "./icons/electron.svg"
import NpmIcon from "./icons/npm.svg"
import PostmanIcon from "./icons/postman.svg"
import SlackIcon from "./icons/slack.svg"
import SVGIcon from "./icons/svg.svg"
import SwaggerIcon from "./icons/swagger.svg"
import TypeScriptIcon from "./icons/typescript.svg"
import YarnIcon from "./icons/yarn.svg"
import AgileIcon from "./icons/agile.svg"
import ResponsiveIcon from "./icons/responsive.svg"
import UserJourney from "./icons/user-journey.svg"
import SearchIcon from "./icons/search.svg"
import WebSocketsIcon from "./icons/websocket.svg"
import PhotographyIcon from "./icons/photography.svg"
import VideographyIcon from "./icons/video-camera.svg"
import TeamLeadIcon from "./icons/team-lead.svg"
import W3CIcon from "./icons/w3c.svg"
import OmnigraffleIcon from "./icons/omnigraffle.svg"
import MDXIcon from "./icons/mdx.svg"
import UIIcon from "./icons/ux-icon.svg"
import UXIcon from "./icons/ui-icon.svg"
import BalsamiqIcon from "./icons/balsamiq.svg"
import StoplightIcon from "./icons/stoplight.svg"
import BrandingIcon from "./icons/brand.svg"
import ScrumIcon from "./icons/partner.svg"
import RADIcon from "./icons/rad.svg"
import RemoteIcon from "./icons/local.svg"
import LoDashIcon from "./icons/lodash.svg"
import Googlechrome from "./icons/googlechrome.svg"
import Postcss from "./icons/postcss.svg"
import Aseprite from "./icons/aseprite.svg"
import Blender from "./icons/blender.svg"
import Json from "./icons/json.svg"
import Rollup from "./icons/rollup-dot-js.svg"
import Ghost from "./icons/ghost.svg"
import Ngrok from "./icons/ngrok.svg"
import Python from "./icons/python.svg"
import Microsoftteams from "./icons/microsoftteams.svg"
import Reaper from "./icons/reaper.svg"
import DavinciResolve from "./icons/davinciresolve.svg"
import Philosophy from "./icons/philosophy.svg"
import CriticalThinking from "./icons/thinking.svg"
import Communication from "./icons/chat.svg"
import Jsx from "./icons/jsx.svg"
interface SkillIconProps {

	icon: string

}

const SkillIcon: React.FC<SkillIconProps> = ({icon}) => {

	if (icon==="Jsx") {return <Jsx />}
	if (icon==="Communication") {return <Communication />}
	if (icon==="Philosophy") {return <Philosophy />}
	if (icon==="CriticalThinking") {return <CriticalThinking />}
	if (icon==="DavinciResolve") {return <DavinciResolve />}
	if (icon==="Reaper") {return <Reaper />}
	if (icon==="Microsoftteams") {return <Microsoftteams />}
	if (icon==="Python") {return <Python />}
	if (icon==="Ngrok") {return <Ngrok />}
	if (icon==="Ghost") {return <Ghost />}
	if (icon==="Rollup") {return <Rollup />}
	if (icon==="Json") {return <Json />}
	if (icon==="Blender") {return <Blender />}
	if (icon==="Aseprite") {return <Aseprite />}
	if (icon==="Postcss") {return <Postcss />}
	if (icon==="Apple") {return <AppleIcon />}
	if (icon==="Testinglibrary") {return <Testinglibrary />}
	if (icon==="Adobexd") {return <Adobexd />}
	if (icon==="Css3") {return <Css3Icon />}
	if (icon==="Csharp") {return <Csharp />}
	if (icon==="Docker") {return <DockerIcon />}
	if (icon==="Gatsby") {return <GatsbyIcon />}
	if (icon==="Git") {return <GitIcon />}
	if (icon==="Github") {return <GithubIcon />}
	if (icon==="Gitlab") {return <GitlabIcon />}
	if (icon==="Googleanalytics") {return <GoogleanalyticsIcon />}
	if (icon==="GraphQL") {return <GraphQLIcon />}
	if (icon==="Godotengine") {return <Godotengine />}
	if (icon==="Html5") {return <Html5Icon />}
	if (icon==="Javascript") {return <JavascriptIcon />}
	if (icon==="Linux") {return <LinuxIcon />}
	if (icon==="Markdown") {return <MarkdownIcon />}
	if (icon==="Node") {return <NodeIcon />}
	if (icon==="React") {return <ReactIcon />}
	if (icon==="Redux") {return <ReduxIcon />}
	if (icon==="Sass") {return <SassIcon />}
	if (icon==="Webpack") {return <WebpackIcon />}
	if (icon==="Windows") {return <WindowsIcon />}
	if (icon==="Sketch") {return <SketchIcon />}
	if (icon==="Apollographql") {return <ApollographqlIcon />}
	if (icon==="Affinityphoto") {return <AffinityphotoIcon />}
	if (icon==="Affinitydesigner") {return <AffinitydesignerIcon />}
	if (icon==="Adobetypekit") {return <AdobetypekitIcon />}
	if (icon==="Adobepremiere") {return <AdobepremiereIcon />}
	if (icon==="Adobephotoshop") {return <AdobephotoshopIcon />}
	if (icon==="Adobelightroomclassic") {return <AdobelightroomclassicIcon />}
	if (icon==="Adobeaftereffects") {return <AdobeaftereffectsIcon />}
	if (icon==="Adobeindesign") {return <Adobeindesign />}
	if (icon==="Cypress") {return <CypressIcon />}
	if (icon==="Reactrouter") {return <ReactrouterIcon />}
	if (icon==="Jest") {return <JestIcon />}
	if (icon==="StoryBook") {return <StoryBookIcon />}
	if (icon==="CraftCSM") {return <CraftCSMIcon />}
	if (icon==="VSCode") {return <VSCodeIcon />}
	if (icon==="Netlify") {return <NetlifyIcon />}
	if (icon==="Jira") {return <JiraIcon />}
	if (icon==="Podcast") {return <PodcastIcon />}
	if (icon==="Babel") {return <BabelIcon />}
	if (icon==="Eslint") {return <EslintIcon />}
	if (icon==="Electron") {return <ElectronIcon />}
	if (icon==="Npm") {return <NpmIcon />}
	if (icon==="Postman") {return <PostmanIcon />}
	if (icon==="Slack") {return <SlackIcon />}
	if (icon==="Googlechrome") {return <Googlechrome />}
	if (icon==="SVG") {return <SVGIcon />}
	if (icon==="Swagger") {return <SwaggerIcon />}
	if (icon==="TypeScript") {return <TypeScriptIcon />}
	if (icon==="Yarn") {return <YarnIcon />}
	if (icon==="Agile") {return <AgileIcon />}
	if (icon==="Responsive") {return <ResponsiveIcon />}
	if (icon==="UserJourney") {return <UserJourney />}
	if (icon==="Search") {return <SearchIcon />}
	if (icon==="WebSockets") {return <WebSocketsIcon />}
	if (icon==="Photography") {return <PhotographyIcon />}
	if (icon==="Videography") {return <VideographyIcon />}
	if (icon==="TeamLead") {return <TeamLeadIcon />}
	if (icon==="W3C") {return <W3CIcon />}
	if (icon==="Omnigraffle") {return <OmnigraffleIcon />}
	if (icon==="MDX") {return <MDXIcon />}
	if (icon==="UI") {return <UIIcon />}
	if (icon==="UX") {return <UXIcon />}
	if (icon==="Balsamiq") {return <BalsamiqIcon />}
	if (icon==="Stoplight") {return <StoplightIcon />}
	if (icon==="Branding") {return <BrandingIcon />}
	if (icon==="Scrum") {return <ScrumIcon />}
	if (icon==="RAD") {return <RADIcon />}
	if (icon==="Remote") {return <RemoteIcon />}
	if (icon==="LoDash") {return <LoDashIcon />}
	return <p>Icon '{icon}' not found</p>
}

export default SkillIcon;
