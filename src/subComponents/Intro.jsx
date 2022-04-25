import styled from 'styled-components';
import { motion } from 'framer-motion';

import bearpic1 from '../assets/images/bear.png';

const Box=styled(motion.div)`
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);

	width:65vw;
	height:55vh;

	display:flex;

	background:linear-gradient(
		to right,
		${props=>props.theme.body} 50%,
		${props=>props.theme.text} 50%) bottom,
	linear-gradient(
		to right,
		${props=>props.theme.body} 50%,
		${props=>props.theme.text} 50%) top;

	background-repeat:no-repeat;
	background-size:100% 2px;
	border-left:2px solid ${props=>props.theme.body};
	border-right:2px solid ${props=>props.theme.text};
	z-index:20;
`

const SubBox=styled.div`
	width:100%;
	position:relative;
	display:flex;

	.pic{
		width:100%;
		bottom:0;
		height:auto;
		position:absolute;
	}	
`

const Text=styled.div`
	display:flex;
	flex-direction:column;
	justify-content:space-evenly;
	padding:2rem;
	cursor:pointer;

	color:${props=>props.theme.body};

	font-size:calc(1em + 1.5vw);

	&>*:last-child{
		color:${props=> `rgba(${props.theme.bodyRgba},0.6)`};
		font-size:calc(0.5rem + 1.5vw);
		font-weight:300;
	}
`



export default function Intro(){
	return(
		<Box
			initial={{height:0,}}
			animate={{height:'55vh'}}
			transition={{type:'spring', duration:2, delay:1}}
		>
			<SubBox>
				<Text>
					<h1>Hello,</h1>
					<h3>I'm Alejo Franco</h3>
					<h6>Well i'm a Junior Web Developer just starting</h6>
				</Text>
			</SubBox>

			<SubBox>
				<motion.div
					initial={{ opacity:0}}
					animate={{opacity:1}}
					transition={{type:'spring',duration:2,delay:1.8}}
				>
					<img src={bearpic1} className="pic" alt="bear" />
				</motion.div>
			</SubBox>
		</Box>
	)
}