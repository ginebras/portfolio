import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Github } from '../data/AllSvg';

const CardItem=styled(motion.li)`
	width:16rem;
	height:50vh;
	background-color:${props=>props.theme.text};
	padding:1.5rem 2rem;
	margin-right:6rem;
	color:${props=>props.theme.body};
	border-radius:0 50px 0 50px;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:flex-start;
	font-family:'Karla',sans-serif;
	transition:all 0.3s ease;

	&:hover{
		background-color:${props=>props.theme.body};
		color:${props=>props.theme.text};
		border:1px solid ${props=>props.theme.text};
	}
`

const Title=styled.h2`
	font-size:4vh;
`

const Description=styled.p`
	font-size:2.9vh;
`

const TagsContainer=styled.div`
	border-top:2px solid ${props=>props.theme.body};
	width:100%;

	${CardItem}:hover &{
		border-top:2px solid ${props=>props.theme.text};
	}
`

const Tags=styled.div`
	padding-top:0.5rem;
	display:flex;
	flex-wrap:wrap;
`

const Tag=styled.span`
	font-size:2.5vh;
	margin-right:1rem;

	&>*:first-child{
		padding-top:0.5rem;
	}
`

const LinksContainer=styled.div`
	width:100%;
	display:flex;
	justify-content:space-between;
`

const DemoLink=styled.a`
	background-color:${props=>props.theme.body};
	color:${props=>props.theme.text};
	padding:0.5rem 3rem;
	border-radius:0 0 0 25px;
	cursor:pointer;

	${CardItem}:hover &{
		background-color:${props=>props.theme.text};
		color:${props=>props.theme.body};
	}
`

const GithubLink=styled.a`
	color:${props=>props.theme.body};

	${CardItem}:hover &{
		color:${props=>props.theme.text};
	}
`

const container={
	initial:{ scale:0 },
	animate:{
		scale:1,

		transition:{
			type:'spring',
			duration:0.5
		}
	}
}


export default function WorkCard({data}){
	return(
		<CardItem variants={container} initial='initial' animate='animate' >
			
			<Title>{data.name}</Title>

			<Description>
				{data.description}
			</Description>

			<TagsContainer>
				<Tags>
					{ data.tags.map((tag,index)=>(
						<Tag key={index}>#{tag}</Tag>
					))}
				</Tags>
			</TagsContainer>

			<LinksContainer>
				{ data.visit && (
					<DemoLink href={data.visit} target='_blank'>
						Visit
					</DemoLink>
				)}

				<GithubLink href={data.github}>
					<Github width={25} height={25} fill="currentColor"/>
				</GithubLink>
			</LinksContainer>

		</CardItem>
	)
}