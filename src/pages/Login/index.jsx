import React from "react";
import styled from "styled-components";
import logo from "./../../assets/fksp-1.png";
import "./../../App.css";

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	/* background-image: linear-gradient(to right top, #009457, #1aa04e, #32ab41, #4ab62f, #63c00b); */
	background-color: #009457;
`;

const Container = styled.div`
	width: 400px;
	margin: auto;
	height: 400px;
	border-radius: 1em;
	box-shadow: 0px 2px 39px -10px rgba(0, 0, 0, 0.59);
	-webkit-box-shadow: 0px 2px 39px -10px rgba(0, 0, 0, 0.59);
	-moz-box-shadow: 0px 2px 39px -10px rgba(0, 0, 0, 0.59);
	background-color: #f7f7f7;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem 1rem;
`;

const Logo = styled.img`
	width: 5rem;
	height: 5rem;
`;

const TitleLogin = styled.div`
	font-size: 1.5rem;
	color: #131212;
	padding: 1em;
	font-weight: 500;
`;

const Input = styled.input`
	padding: 0.8em;
	margin: 0.5rem;
	width: 70%;
	font-size: 0.9em;
	background-color: #fafafa;
	border: 1px solid #c5c5c5;
	border-radius: 5px;
	&:focus {
		outline: none !important;
		border: 1px solid #009457;
		box-shadow: 0 0 10px #719ece;
	}
`;

const Button = styled.button`
	/* background-image: linear-gradient(to right top, #009457, #1aa04e, #32ab41, #4ab62f, #63c00b); */
	background-color: #009457;
	border: none;
	color: #ebebeb;
	padding: 0.8em;
	margin: 0.5rem;
	width: 75%;
	font-size: 1em;
	font-weight: 700;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #017947;
	}
`;

const Subtext = styled.a`
	font-size: 0.8em;
	margin-top: 0.3em;
	color: #bdb9b9;
	cursor: pointer;
	&:hover {
		color: #949191;
	}
`;

const Login = () => {
	return (
		<Wrapper>
			<Container>
				<Logo src={logo} />
				<TitleLogin>Login E-SPMI</TitleLogin>
				<Input type="text" placeholder="Email or Username"></Input>
				<Input type="password" placeholder="Password"></Input>
				<Button>Login</Button>
				<Subtext>Forgot Password?</Subtext>
			</Container>
		</Wrapper>
	);
};

export default Login;
