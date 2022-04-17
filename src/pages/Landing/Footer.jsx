import React from "react";
import styled from "styled-components";

const Foot = styled.div`
	position: absolute;
	margin-top: 8rem;
	width: 100%;
	height: 170px;
	background-color: #f1f1f1;
	text-align: center;
`;

const Footer = () => {
	return (
		<>
			<Foot>Copyright FKSP</Foot>
		</>
	);
};

export default Footer;
