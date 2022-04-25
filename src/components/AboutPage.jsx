import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import NavLinks from '../subComponents/NavLinks';
import SPACEMAN from '../assets/images/spaceman.png';
import BigTitle from '../subComponents/BigTitle';

const Container=styled.div`
	position:relative;
	width:100%;
	height:100vh;
	overflow:hidden;
	background-color:grey;
`

const AboutContainer=styled.div`
	position:absolute;
	top:65%;
	left:25%;
	transform:translate(-25%,-65%);
	width:100vh;
	height:50vh;
	border:1px solid white;
	color:white;
	padding:2rem;
	backdrop-filter:blur(1px);

	font-family:'Ubutntu Mono',monospace;
	font-styled:italic;
	line-height:1.5;

	display:flex;
	align-items:center;
	justify-content:center;
`

const floating=keyframes`
	0%{ transform: translateY(-10px) }
	50%{ transform: translateY(15px) translateX(15px) }
	100%{ transform: translateY(-10px) }
`

const SpacemanContainer=styled.div`
	position:absolute;
	top:10%;
	right:5%;
	transform:translate(-5%,-10%);
	width:25vw;
	height:auto;
	animation:${floating} 4s ease infinite;

	img{
		width:100%;
		object-fit:cover;
	}
`

export default function AboutPage(){
	return(
		<Container>
			<motion.div
				initial={{ opacity:0}}
				animate={{opacity:1}}
				exit={{
					opacity:0
				}}
			>
				<LogoComponent theme='dark' />
				<PowerButton/>
				<NavLinks theme='dark' />

				<AboutContainer>
					I'm a Web Developer from Buenos Aires, Argentina. I like to create apps with a controlled backend and a sweet frontend with a good design
					<br/>
					<br/>
					I'm interested in the whole Fullstack and i'm very interested about discovering new and different ways to create apps.
					<br/>
					<br/>
					I started at 15yo with the Web Development, the 1th framework i used was Angular and i was fascinated by the way it works and the things you could do with it.
					But quickly discovered ReactJS and since then i been using it so far, i really enjoy using it,i even made this using ReactJS.
				</AboutContainer>

				<SpacemanContainer>
					<img src={SPACEMAN} alt="spaceman" />
				</SpacemanContainer>

				<BigTitle title='ABOUT' top='5rem' left='10vh' />
			</motion.div>
		</Container>
	)
}