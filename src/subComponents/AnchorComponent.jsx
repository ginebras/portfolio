import styled from 'styled-components';
import { useRef,useEffect } from 'react';

import { Link,Anchor } from '../data/AllSvg';

const Container=styled.div`
	position:relative;
`

const Slider=styled.div`
	position:fixed;
	top:0;
	right:2rem;

	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	transform:translateY(-100%);

	.chain{
		transform:rotate(135deg);
	}
`

const PreDisplay=styled.div`
	position:absolute;
	top:0;
	right:2rem;
`

export default function AnchorComponent({numbers}){
	const ref=useRef(null);
	const hiddenRef=useRef(null);

	useEffect(()=>{


		window.addEventListener('scroll',()=>{
			let scrollPosition=window.pageYOffset;
			let windowSize=window.innerHeight;
			let bodyHeight=document.body.offsetHeight;

			let diff= Math.max(bodyHeight- (scrollPosition + windowSize));

			let diffP=(diff*100) / (bodyHeight- windowSize);

			ref.current.style.transform=`translateY(${-diffP}%)`;

			if(scrollPosition>5){
				hiddenRef.current.style.display='none';
			}else{
				hiddenRef.current.style.display='block';
			}
		})

	},[])

	return(
		<Container>

			<PreDisplay ref={hiddenRef} className="hidden" >
				<Anchor width={70} height={70} fill='currentColor' />
			</PreDisplay>

			<Slider ref={ref}>
				{ 
					[...Array(numbers)].map((x,index)=>{
						return <Link key={index} width={25} height={25} fill='currentColor' className="chain" />
					})
				}
				<Anchor width={70} height={70} fill='currentColor' />
			</Slider>
		</Container>
	)
}