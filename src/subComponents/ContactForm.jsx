import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {DarkTheme} from '../components/Themes';

const Contact=styled.button`
	color:${props=>props=>props.theme==='dark' ? DarkTheme.text : DarkTheme.body};
	position:absolute;
	top:2rem;
	right:6vh;
	text-decoration:none;
	z-index:10;
	border:none;
	background:none;
	outline:none;
	cursor:pointer;
`

const Modal=styled(motion.div)`
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	width:50vw;
	height:100vh;
	border:1px solid ${props=>props.theme.body};
	background-color:${props=>props.theme.text};
	color:${props=>props.theme.body};
	z-index:25;
	display:flex;
	flex-direction:column;
	align-items:center;
	font-family:'Urbanist' !important;
	border-radius:20px;	

	@media (max-width:1024px){
		height:75vh;
		width:70vw;
	}

	@media (max-width:600px){
		overflow:auto;
		padding-bottom:2rem;
	}
`

const ModalTop=styled.div`
	width:90%;
	height:10%;
	padding:0.5rem 1rem;
	border-bottom:1px solid ${props=>props.theme.body};
	display:flex;
	justify-content:space-between;
	align-items:center;

	.bi{
		font-size:5vh;
		font-weight:700;
		cursor:pointer;
	}

	@media (max-width:1024px){
		padding:2rem;
	}

	@media (max-width:600px){
		padding:1rem;
	}
`

const Title=styled.h1`
	font-size:5vh;
	font-weight:700;
	font-family:'Urbanist' !important;	

	@media (max-width:1024px){
		padding-right:1rem;
	}	
`

const Form=styled.form`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	width:100%;
	height:100%;
	position:relative;
`

const FormGroup=styled.div`
	margin-bottom:2rem;
	width:50%;
	display:flex;
	flex-direction:column;
	font-size:1rem;

	@media (max-width:1024px){
		width:75%;
		font-size:1.5rem;
	}

	@media (max-width:600px){
		width:75%;
		font-size:1rem;
		margin-bottom:0;
		margin-top:1.5rem;
	}
`

const FormLabel=styled.label`
	padding-bottom:0.5rem;
`

const FormInput=styled.input`
	border:none;
	outline:none;
	padding:7px 15px;
	border-bottom:1px solid ${props=>props.theme.body};
	background-color:${props=>props.theme.text};
	color:${props=>props.theme.body};
`

const TextInput=styled.textarea`
	border:none;
	outline:none;
	padding:7px 15px;
	border-bottom:1px solid ${props=>props.theme.body};
	color:${props=>props.theme.text};
`

const SubmitButton=styled.button`
	border-radius:10px;
	padding:1rem 1.5rem;
	background-color:${props=>props.theme.body};
	color:${props=>props.theme.text};
	width:25%;
	cursor:pointer;
	text-align:center;
	outline:none;
	border:none;

	@media (max-width:600px){
		width:50%;
		padding:0.5rem 1rem;
		margin-top:1rem;
	}
`

const Alert=styled.div`
	background-color:${props=>props.error ? '#e96e6e' : '#6ede83'};
	width:25vh;
	height:0;
	padding:1rem 0;
	color:${props=>props.error ? 'red' : 'green'};
	position:relative;
	bottom:0;
	left:0;
	margin-bottom:0.5rem;
	display:flex;
	align-items:center;
	justify-content:center;
	border-radius:10px;
	font-size:0.8rem;

	@media (max-width:1024px){
		font-size:1.5rem;
	}

	@media (max-width:600px){
		font-size:0.75rem;
		top:${props=>props.error ? '0' : '20px'};
	}
`

export default function ContactForm({canOpen,theme}){
	const [openModal,setOpen]=useState(false);
	const { register,handleSubmit,formState:{errors}}=useForm();
	const [ submited,setSubmited]=useState(false);

	const handleModal=()=>{
		setOpen(!openModal);
	}

	const sendMessage=(data)=>{
		emailjs.send("service_ycma7gt","template_at5928n",data,'JBiWeGofp9OTThc97');

		setSubmited(true);

		setTimeout(()=>{
			setSubmited(false);
		},3000)
	}

	return(
		<>	
			<Contact onClick={handleModal} theme={theme}>
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

				> Say hi...</motion.h3>
			</Contact>
			
			{ openModal && canOpen==='yes' ? (
				<Modal
					initial={{
						top:'100%',
					}}
					animate={{
						top:'50%',
						transition:{ type:'spring',duration:1.5}
					}}						
					exit={{
						top:'100%',
						transition:{type:'spring',duration:1.5}
					}}					
				>
					<ModalTop>
						<Title>Contact me</Title>
						<motion.i 
							whileHover={{scale:1.1}}
							whileTap={{scale:0.9}}
							className="bi bi-x-octagon" 
							onClick={handleModal}
						></motion.i>
					</ModalTop>

					<Form onSubmit={handleSubmit(sendMessage)}>
						{ submited && <Alert>Email succesfully send</Alert>}

						<FormGroup>
							{ errors.name && <Alert error>Name field is required</Alert> }
							<FormLabel htmlFor="name">Name</FormLabel>
							<FormInput type="text" id="name" placeholder="Name" {...register('name',{required:true})} />							
						</FormGroup>
						
						<FormGroup>
							{ errors.email && <Alert error>Email field is required</Alert> }
							<FormLabel htmlFor="Email">Email</FormLabel>
							<FormInput type="email" id="Email" placeholder="Email" {...register('email',{required:true})} />
						</FormGroup>

						<FormGroup>
							{ errors.message && <Alert error>Message field is required</Alert> }
							<FormLabel htmlFor="message">Message</FormLabel>
							<TextInput id="message" rows={5} {...register('message',{required:true})} ></TextInput>
						</FormGroup>

						<SubmitButton type="submit">Send Message</SubmitButton>
					</Form>
				</Modal>
				
			) : null }

		</>
	)
}