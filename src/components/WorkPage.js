import { useEffect,useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { DarkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import NavLinks from '../subComponents/NavLinks';
import { Work }  from '../data/WorkData';
import WorkCard from '../subComponents/WorkCard';
import { YinYang } from '../data/AllSvg';
import BigTitle from '../subComponents/BigTitle';

const Box=styled.div`
	position:relative;
	background-color:${props=>props.theme.body};
	height:400vh;
	overflow:hidden;	
`

const Main=styled(motion.ul)`
	position:fixed;
	top:20%;
	left:20%;
	transform:translate(-25%,-60%);
	display:flex;
	color:white;
	gap:1rem;
	list-style:none;
	height:65vh;
`

const Rotate=styled.div`
	position:fixed;
	bottom:2vh;
	right:50px;
`

const container={
	hidden:{ opacity: 0 },
	show:{
		opacity:1,

		transition:{
			staggerChildren:0.5,
			duration:0.5
		}
	}
}

export default function WorkPage(){

	const ref=useRef(null);
	const refRotate=useRef(null);

	useEffect(()=>{
		let element=ref.current;

		window.addEventListener('scroll',()=>{
			element.style.transform=`translateX(${-window.pageYOffset}px)`;

			refRotate.current.style.transform=`rotate(`+ -window.pageYOffset +'deg)';
		});

	},[])

	return(
		<ThemeProvider theme={DarkTheme}>
			<Box >
				<motion.div
					initial={{ opacity:0}}
					animate={{opacity:1}}
					exit={{
						opacity:0
					}}
				>
					<LogoComponent theme='dark' />
					<PowerButton/>
					<NavLinks theme='light' />

					<Main ref={ref} variants={container} initial='hidden' animate='show' >
						{ Work.map((w,index)=>(
							<WorkCard key={index} data={w} />
						))}
					</Main>
				
					<Rotate ref={refRotate} >
						<YinYang width={85} height={85} fill={DarkTheme.text} />
					</Rotate>

					<BigTitle title="WORK" top='0%' right='14%'  />

				</motion.div>
			</Box>

		</ThemeProvider>
	)
}