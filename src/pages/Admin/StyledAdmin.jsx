import styled from "styled-components";

export const Container = styled.div`
	margin-top: 1rem;
	max-height: 95vh;
	min-width: 80%;
	border: 1px solid black;
	@media screen and (max-width: 768px) {
		margin-left: 3rem;
	}
`;
export const Title = styled.h1`
	font-weight: 500;
	font-size: 2rem;
	border: 1px solid black;
`;
