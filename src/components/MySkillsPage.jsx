import styled,{ ThemeProvider }  from 'styled-components';

import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import NavLinks from '../subComponents/NavLinks';
import { LightTheme } from './Themes';
import { Develope } from '../data/AllSvg';

const Box=styled.div`
	backgroud-color:${props=>props.theme.body};
	width:100vw;
	height:100vh;
	position:relative;

	display:flex;
	justify-content:space-evenly;
	align-items:center;
`

const Main=styled.div`
	background-color:${props=>props.theme.body};
	color:${props=>props.theme.text};
	border:2px solid ${props=>props.theme.text};
	width:30vw;
	height:65vh;
	padding:2rem;
	line-height:1.5;

	display:flex;
	flex-direction:column;
	justify-content:space-between;
	transition:all 0.3s ease;

	font-family:'Ubuntu Mono', monospace;

	&:hover{
		background-color:${props=>props.theme.text};
		color:${props=>props.theme.body};
	}
`

const TitleMain=styled.h2`
	font-weight:600;
	font-size:1.5rem;
	display:flex;
	align-items:center;
	justify-content:center;
	padding-bottom:1rem;
`

const TextMain=styled.span`
	font-size:20px;
	padding-bottom:2rem;
`

const SubTitle=styled.h3`
	font-weight:600;
	font-size:25px;
`

const ListsContainer=styled.div`
	display:grid;
	grid-template-columns:repeat(3,1fr);
`

const List=styled.span`
	display:flex;
	flex-direction:column;
	word-spacing:5px;
	padding-bottom:1rem;
	align-items:center;
`

export default function MySkills(){
	return(
		<ThemeProvider theme={LightTheme}>
			<Box>
				<LogoComponent theme='light' />
				<NavLinks theme='light' />
				<PowerButton/>

				<Main>
					
					<TitleMain>Backend Development</TitleMain>
						

					<TextMain>
						I like to create apis because i see them 
						as the logic part of a Stack and i get fun
						trying to think how to solve a problem

					</TextMain>

					<SubTitle>SKILLS</SubTitle>
					<ListsContainer>							
						<List> PHP <p>(Basic)</p> </List>
						<List> Laravel <p>(Basic)</p> </List>
						<List> NodeJS <p>(Intermediate)</p> </List>
						<List> Express <p>(Intermediate)</p> </List>
						<List> MongoDB <p>(Intermediate)</p> </List>
						<List> MySQL <p>(Basic)</p> </List>

					</ListsContainer>
				</Main>

				<Main>
					
					<TitleMain>
						<Develope width={25} height={25} fill='currentColor' style={{paddingRight:'10px'}} />Frontend Development
					</TitleMain>
				

					<TextMain>
						I like to create well-regarded applications,intuitives,
						and with a good design, even im not creative.
					</TextMain>

					<SubTitle>SKILLS</SubTitle>
					<ListsContainer>						
						<List> HTML <p>(Intermediate)</p></List>
						<List> JavaScript <p>(Intermediate)</p> </List>
						<List> React <p>(Intermediate)</p> </List>
						<List> Redux <p>(Basic) </p> </List>
						<List> Angular <p>(Basic)</p> </List>
						<List> CSS <p>(Intermediate)</p> </List>
						<List> SCSS <p>(Basic)</p> </List>
						<List> Bootstrap <p>(Basic/Intermediate)</p> </List>
					</ListsContainer>
				</Main>
			</Box>
		</ThemeProvider>
	)
}