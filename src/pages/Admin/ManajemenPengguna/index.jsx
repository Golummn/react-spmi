import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 1rem;
	max-height: 95vh;
	width: 80vw;
`;
const Title = styled.h1`
	font-weight: 500;
	font-size: 2rem;
`;

const ManejemenPengguna = () => {
	return (
		<>
			<Container>
				<Title>Manajemen Pengguna</Title>
			</Container>
		</>
	);
};

export default ManejemenPengguna;
