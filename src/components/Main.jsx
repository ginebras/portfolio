import { useState,useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import NavLinks from '../subComponents/NavLinks';
import { YinYang } from '../data/AllSvg';
import Intro from '../subComponents/Intro';
import AudioComponent from '../subComponents/AudioComponent';
import ContactForm from '../subComponents/ContactForm';
import ThanksModal from '../subComponents/ThanksModal';

const MainContainer=styled.div`
	background-color:${props=>props.theme.body};
	width:100%;
	height:100vh;
	overflow:hidden;

	position:relative;

	h1,h2,h3,h4,h5,h6{
		font-family:'Karla',sans-serif;
		font-weight:500;
	}
`

const Container=styled(motion.div)`
	padding:2rem;
`

const About=styled.a`
	color:${props=>props.theme.text};
	position:absolute;
	top:50%;
	right:6vh;
	transform:rotate(90deg) translate(-50%,-50%);
	text-decoration:none;
	z-index:10;
`

const Work=styled.a`
	color:${props=>props.device==='pc' || props.device==='tablet' ? (props.click? props.theme.body : props.theme.text) : props.theme.text};
	position:absolute;
	top:50%;
	left:6vh;
	transform:rotate(-90deg) translate(-50%,-50%);
	text-decoration:none;
	z-index:10;
`

const BottomBar=styled.div`
	width:100%;
	position:absolute;
	left:0;
	right:0;
	bottom:1rem;

	display:flex;
	justify-content:center;
`

const Skills=styled.a`
	text-decoration:none;
	color:${props=>props.theme.text};
	z-index:10;
`

const rotate=keyframes`
	from{
		transform:rotate(0);
	}
	to{
		transform:rotate(360deg);
	}
`

const Center=styled.div`
	position:absolute;
	top:${props=>props.click ? '82%': '50%'};
	left:${props=>props.click ? '92%' : '50%'};
	transform:translate(-50%,-50%);
	cursor:pointer;

	display:flex;
	flex-direction:column;
	align-items:center;
	transition:all 1s;

	&>:first-child{
		animation:${rotate} infinite 1.5s linear;
	}

	&>:last-child{
		padding-top:1rem;
		display:${props=> props.click ? 'none' : 'inline-block'};
	}
`

const DarkPc=styled.div`
	position:absolute;
	top:0;
	bottom:0;
	right:50%;
	width:${props=>props.click ? '50%' : '0%'};
	height:${props=>props.click ? '100%' : '0%'};
	background-color:#000;
	z-index:3;
	transition:height 0.5s ease,width 1s ease 0.5s;
`

const DarkMobile=styled.div`
	position:absolute;
	top:0;
	left:0;
	right:0;
	background-color:#000;
	z-index:3;
	transition:height 0.5s ease,width 1s ease 0.5s;
	width:${props=>props.click ? '100%' : '0%'};
	height:${props=>props.click ? '50%' : '0%'};
`

export default function Main(){
	const [click,setClick]=useState(false);
	const [deviceWidth,setDeviceWidth]=useState('pc');
	const [thanks,setThanks]=useState(true);

	useEffect(()=>{
		if(thanks){
			setTimeout(()=>{
				setThanks(false);
			},5000)
		}
	},[])

	useEffect(()=>{
		if(document.body.offsetWidth<600)
			setDeviceWidth('mobile');
		else if(document.body.offsetWidth<1024 && document.body.offsetWidth>600)
			setDeviceWidth('tablet');
		else
			setDeviceWidth('pc');
		
	},[document.body.offsetWidth])

	return(
		<MainContainer>
			
			{((deviceWidth==='pc') || (deviceWidth==='tablet')) && <DarkPc click={click} />}
			{deviceWidth==='mobile' && <DarkMobile click={click} />}

			<Container
				initial={{ opacity:0}}
				animate={{opacity:1}}
				exit={{opacity:0}}
			>
				<AudioComponent theme={click ? 'dark' : 'light'} />
				<PowerButton/>
				<LogoComponent theme={click ? 'dark' : 'light'}/>
				<NavLinks theme={ click ? 'dark' : 'light'} device={deviceWidth} />
				{ deviceWidth!=='mobile' && <ThanksModal/>}
				<ContactForm canOpen={ click ? 'no' : 'yes'} theme={click ? 'dark' : 'light'}/>

				<About href="/about">
					<motion.h3
						whileHover={{scale:1.1}}
						whileTap={{scale:0.9}}
						initial={{
							y:-200,
							transition:{type:'spring',duration:1.5,delay:0.5}
						}}
						animate={{
							y:0,
							transition:{type:'spring',duration:1.5,delay:0.5}
						}}
					> About</motion.h3>
				</About>

				<Work href="/work" click={click} device={deviceWidth} >
					<motion.h3
						whileHover={{scale:1.1}}
						whileTap={{scale:0.9}}
						initial={{
							y:-200,
							transition:{type:'spring',duration:1.5,delay:0.5}
						}}
						animate={{
							y:0,
							transition:{type:'spring',duration:1.5,delay:0.5}
						}}
					> Work</motion.h3>
				</Work>

				<Center click={click}>
					<YinYang onClick={()=>setClick(!click)} width={ click ? 120 : 200 } height={click ? 120 : 200} fill='currentColor' />
					<span>click here</span>
				</Center>

				<BottomBar>
					<Skills href="/skills">
						<motion.h3
							whileHover={{scale:1.1}}
							whileTap={{scale:0.9}}
							initial={{
								y:200,
								transition:{type:'spring',duration:1.5,delay:1}
							}}
							animate={{
								y:0,
								transition:{type:'spring',duration:1.5,delay:1}
							}}
						>My Skills.</motion.h3>
					</Skills>
				</BottomBar>

				{ click ? <Intro click={click} device={deviceWidth} /> : null}
			</Container>
		</MainContainer>
	)
}