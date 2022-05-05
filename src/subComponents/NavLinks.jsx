import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Github,Instagram,Linkedin } from '../data/AllSvg';
import { DarkTheme } from '../components/Themes';
 
const LogoContainer=styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;

	position:fixed;
	bottom:0;
	left:2rem;

	&>*:not(last-child){
		margin: 0.5rem 0;
	}
	z-index:9;
`

const Line=styled(motion.span)`
	width:2px;
	height:8rem;
	background-color:${props=>props.device==='pc' || props.device==='tablet' ? (props.theme==='dark' ? DarkTheme.text : DarkTheme.body) : DarkTheme.body};
`

export default function NavLinks(props){
	return(
		<LogoContainer>
			<motion.div
				initial={{
					transform:'scale(0)'
				}}
				animate={{
					scale:[0,1,1.5,1]
				}}

				transition={{
					type:'spring',duration:1,delay:1.2
				}}
			>
				<a style={{color:'inherit'}} target="_blank" href="https://github.com/ginebras" >
					<Github width={30} height={30} fill={props.device==='pc' || props.device==='tablet'? (props.theme === 'dark' ? DarkTheme.text : DarkTheme.body) : DarkTheme.body} />
				</a>
			</motion.div>

			<motion.div
				initial={{
					transform:'scale(0)'
				}}
				animate={{
					scale:[0,1,1.5,1]
				}}

				transition={{
					type:'spring',duration:1,delay:1.4
				}}
			>
				<a style={{color:'inherit'}} target="_blank" href="https://www.instagram.com/alejo.francop/">
					<Instagram width={30} height={30} fill={props.device==='pc' || props.device==='tablet'? (props.theme === 'dark' ? DarkTheme.text : DarkTheme.body) : DarkTheme.body} />
				</a>
			</motion.div>

			<motion.div
				initial={{
					transform:'scale(0)'
				}}
				animate={{
					scale:[0,1,1.5,1]
				}}

				transition={{
					type:'spring',duration:1,delay:1.4
				}}
			>
				<a style={{color:'inherit'}} target="_blank" href="https://www.linkedin.com/in/alejo-franco-59170121a/">
					<Linkedin/>
				</a>
			</motion.div>

			<Line 
				theme={props.theme}
				device={props.device}
				initial={{
					height:0
				}}
				animate={{
					height:'8rem',

					transition:{
						type:'spring',
						duration:1.5,
						delay:0.8
					}
				}}

			/>
		</LogoContainer>
	)
}