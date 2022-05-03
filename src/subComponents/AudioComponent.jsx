import { useState,useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import audio from '../assets/audio/saidit.mp3';
import { DarkTheme } from '../components/Themes';

const Box=styled.div`
	position:fixed;
	top:2rem;
	cursor:pointer;
	z-index:9;
	left:6rem;
	height:35px;

	display:flex;
	align-items:center;

	&>*:nth-child(1){
		animation-delay:0.2s;
	}
	&>*:nth-child(2){
		animation-delay:0.3s;
	}
	&>*:nth-child(3){
		animation-delay:0.4s;
	}
	&>*:nth-child(4){
		animation-delay:0.5s;
	}
	&>*:nth-child(5){
		animation-delay:0.6s;
	}
`

const play=keyframes`
	0%{
		transform:scaleY(1);
	}
	50%{
		transform:scaleY(2);
	}
	100%{
		transform:scaleY(1);
	}
	
`

const Line=styled.span`
	background:${props=>props=>props.theme==='dark' ? DarkTheme.text : DarkTheme.body};
	border:1px solid ${props=>props=>props.theme==='dark' ? DarkTheme.text : DarkTheme.body};

	animation:${play} 1s ease infinite;
	animation-play-state:${props=>props.click ? 'running': 'paused'};
	height:1rem;
	width:2px;
	margin:0 0.1rem;
`

export default function AudioComponent(props){
	const ref=useRef();
	const [click,setClick]=useState(false);

	const handleClick=()=>{
		setClick(!click);

		if(!click)
			ref.current.play();
		else
			ref.current.pause();
	}

	return(
		<Box onClick={()=>handleClick()} >
			<Line theme={props.theme} click={click} />
			<Line theme={props.theme} click={click} />
			<Line theme={props.theme} click={click} />
			<Line theme={props.theme} click={click} />
			<Line theme={props.theme} click={click} />

			<audio src={audio} ref={ref} loop />
		</Box>
	)
}