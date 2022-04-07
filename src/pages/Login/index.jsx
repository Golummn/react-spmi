import React from "react";
import styled from "styled-components";
import logo from "./../../assets/fksp.png";
import "./../../App.css";

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	background-color: white;
`;

const LayoutFirst = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #009457;
	width: 50%;
`;
const Logo = styled.img`
	width: 10rem;
	height: 10rem;
`;

const Title = styled.h1`
	margin-top: 1rem;
	font-size: 3rem;
	color: #fff;
	font-weight: 700;
	font-style: italic;
`;
const Subtitle = styled.h2`
	margin-top: 0.5rem;
	font-size: 2rem;
	color: #fff;
	font-weight: 600;
`;
const Text = styled.div``;

const LayoutForm = styled.div`
	background-color: white;
`;

const Login = () => {
	return (
		<Wrapper>
			<LayoutFirst>
				<Logo src={logo} />
				<Title>E-SPMI</Title>
				<Subtitle>FKSP UNSIQ</Subtitle>
				<Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ea, corrupti, aut laboriosam voluptates quod assumenda mollitia consequatur at beatae velit cupiditate laborum culpa repellat quis. Vero at tenetur soluta.</Text>
			</LayoutFirst>
			<LayoutForm>asdas</LayoutForm>
		</Wrapper>
	);
};

export default Login;
