import React from "react";
import styled from "styled-components";
import logofksp from "./../../assets/fksp.png";

const Nav = styled.div`
	background: #fdfdfd;
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
const NavRight = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-left: 3rem;
	color: #00824c;
	cursor: pointer;
`;
const ImageLogo = styled.img`
	width: 60px;
	height: 60px;
`;
const Logo = styled.div`
	margin-left: 1rem;
`;

const Title = styled.h1`
	display: flex;
	flex-direction: column;
	font-weight: 700;
	font-size: 1.6rem;
	bottom: 0;
`;
const SubTitle = styled.span`
	font-size: 0.8rem;
	font-weight: 500;
`;

const NavLeft = styled.div`
	margin-right: 3rem;
	display: flex;
	align-items: center;
`;

const Login = styled.button`
	appearance: none;
	background-color: #2ea44f;
	border: 1px solid rgba(27, 31, 35, 0.15);
	border-radius: 6px;
	box-shadow: rgba(143, 223, 140, 0.1) 0 1px 0;
	box-sizing: border-box;
	color: #f1f1f1;
	cursor: pointer;
	display: inline-block;
	font-size: 14px;
	font-weight: 600;
	line-height: 20px;
	padding: 6px 16px;
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	vertical-align: middle;
	white-space: nowrap;
	&:hover {
		background-color: #2c974b;
	}
`;

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavRight>
					<ImageLogo src={logofksp} />
					<Logo>
						<Title>
							E-SPMI
							<SubTitle>Fakultas Komunikasi Dan Sosial Politik</SubTitle>
						</Title>
					</Logo>
				</NavRight>
				<NavLeft>
					<Login>Login</Login>
				</NavLeft>
			</Nav>
		</>
	);
};

export default Navbar;
