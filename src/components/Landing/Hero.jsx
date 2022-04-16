import React from "react";
import styled from "styled-components";
import bannerSPMI from "./../../assets/bannerspmi.png";

const HeroImage = styled.img`
	width: 100%;
`;

const Hero = () => {
	return (
		<>
			<HeroImage src={bannerSPMI} />
		</>
	);
};

export default Hero;
