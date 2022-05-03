import styled, { ThemeProvider,keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { DarkTheme } from '../components/Themes';

const hideModal=keyframes`
	from{
		transform:translateY(0%);
	}
	to{
		transform:translateY(250%);
	}
`

const Modal=styled(motion.div)`
	position:absolute;
	bottom:1rem;
	left:6rem;
	width:25vw;
	height:15vh;
	background-color:${ DarkTheme.body  };
	color:${DarkTheme.text  };
	padding:1rem;
	z-index:9;
	border-radius:10px;
	font-family:'Urbanist';
	line-height:1.5;
	animation:${hideModal} 5s 10s 1 forwards;

	@media (max-width:600px){
		display:none;
	}
`

const Name=styled.strong`
	font-family: 'Square Peg', cursive;
	font-size:5vh;
`

const LinkVideo=styled(motion.a)`
	font-family:inherit;
	color:rgb(201 185 185 / 40%);
	font-style:Italic;
`

export default function ThanksModal({click}){
	return(
		<ThemeProvider theme={DarkTheme}>		
			<Modal
				initial={{ y:250}}
				animate={{ y:0,display:'none' }}
				transition={{type:'spring',duration:5}}
			>
				<div>
					Hello this portfolio was made thanks to <Name>CodeBucks</Name>
				</div>
				<LinkVideo
					whileHover={{scale:1.1}}
					whileTap={{scale:0.9}}
					initial={{ opacity:0}}
					animate={{opacity:1}}
					transition={{duration:2,delay:1}}
				 	href="https://www.youtube.com/watch?v=jcohAIaSy2M&t=9591s"
				 	target='_blank'
				>Tutorial video</LinkVideo>
			</Modal>
		</ThemeProvider>
	)
}