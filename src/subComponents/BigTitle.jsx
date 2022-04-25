import styled from 'styled-components';

const Title=styled.h1`
	position:fixed;
	top:${props=>props.top};
	bottom:${props=>props.bottom};
	right:${props=>props.right};
	left:${props=>props.left};
	color:${props=>`rgba(${props.theme.textRgba},0.1)`};
	font-size:calc(5rem + 5vw);
	z-index:0;
`

export default function BigTitle(props){
	return(
		<Title top={props.top} bottom={props.bottom} left={props.left} right={props.right} >
			{props.title}
		</Title>
	)
}