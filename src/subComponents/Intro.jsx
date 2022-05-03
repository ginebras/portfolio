import { useState,useEffect } from 'react';
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

	@media (max-width:1024px){
		height:40vh;
	}

	@media (max-width:600px){
		height:50vh;
		flex-direction:column;
		background:linear-gradient(
			to right,
			${props=>props.theme.text} 100%,
			${props=>props.theme.body} 100%) bottom,
		linear-gradient(
			to right,
			${props=>props.theme.body} 100%,
			${props=>props.theme.text} 100%) top;

		background-repeat:no-repeat;
		background-size:100% 2px;
		border-left:2px solid ${props=>props.theme.body};
		border-right:2px solid ${props=>props.theme.text};

		&>*:first-child{
			border-right:2px solid ${props=>props.theme.body};
		}
		&>*:last-child{
			border-left:2px solid ${props=>props.theme.text};
		}
	}

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

		@media (max-width:1024px){
			top:50%;
			transform:translateY(-50%);
		}

		@media (max-width:600px){
			position:relative;
			width:100%;
			height:100%;
		}
	}	

	@media (max-width:600px){
		justify-content:center;
		height:50%;
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

	@media (max-width:600px){
		padding:2rem 1rem;
	}
`



export default function Intro({device}){
	const [height,setHeight]=useState('55vh');

	useEffect(()=>{
		if(device==='pc')
			setHeight('55vh');
		else if(device==='tablet')
			setHeight('40vh');
		else
			setHeight('50vh');
	},[device])

	return(
		<Box
			initial={{height:0,}}
			animate={{height:height}}
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