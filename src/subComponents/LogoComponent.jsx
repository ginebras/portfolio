import styled from 'styled-components';

import { DarkTheme } from '../components/Themes';

const Logo=styled.h1`
	display:inline-block;
	color:${props=>props.theme==='dark' ? DarkTheme.text : DarkTheme.body};
	font-family:'Pacifico',cursive !important;

	position:fixed;
	top:2rem;
	left:2rem;
	z-index:9;
`

export default function LogoComponent(props){
	return(
		<Logo theme={props.theme}>
			AF
		</Logo>
	)
}