import React from "react";
import styled from "styled-components";
import {FiArchive} from "react-icons/fi";
import {FiFile} from "react-icons/fi";

const Title = styled.h1`
	text-align: center;
	font-size: 2rem;
	font-weight: 500;
	margin: 2rem auto;
`;

const Contents = styled.p`
	text-align: center;
	font-size: 0.9rem;
	width: 70%;
	margin: 1rem auto;
	text-align: justify;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	margin: auto;
`;
const Card = styled.div`
	background-color: #ddd;
	width: 200px;
	height: 220px;
	margin: 1rem auto;
	border-radius: 20px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:hover {
		box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
	}
`;
const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	height: 90px;
	width: 90px;
	color: #949191;
	background-color: #f1f1f1;
`;

const CardTitle = styled.h2`
	margin: 1rem;
	color: #2b2a2a;
	font-weight: 400;
`;

const IconTitle = styled.div`
	margin: 2rem auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	height: 120px;
	width: 120px;
	color: #949191;
	background-color: #f1f1f1;
	border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Dokumen = () => {
	return (
		<>
			<Title>Tentang SPMI</Title>
			<Contents>
				Sistem Penjaminan Mutu Internal adalah sistem penjaminan mutu yang berjalan di dalam satuan pendidikan dan dijalankan oleh seluruh komponen dalam satuan pendidikan yang mencakup seluruh aspek penyelenggaraan pendidikan dengan
				memanfaatkan berbagai sumberdaya untuk mencapai SNP Sistem Penjaminan Mutu Internal adalah sistem penjaminan mutu yang berjalan di dalam satuan pendidikan dan dijalankan oleh seluruh komponen dalam satuan pendidikan yang mencakup
				seluruh aspek penyelenggaraan pendidikan dengan memanfaatkan berbagai sumberdaya untuk mencapai SNP Sistem Penjaminan Mutu Internal adalah sistem penjaminan mutu yang berjalan di dalam satuan pendidikan dan dijalankan oleh seluruh
			</Contents>
			<IconTitle>
				<FiFile size={80} />
			</IconTitle>
			<Title>Dokumen SPMI</Title>
			<Container>
				<Card>
					<Icon>
						<FiArchive size={50} />
					</Icon>
					<CardTitle>Manual Mutu</CardTitle>
				</Card>
				<Card>
					<Icon>
						<FiArchive size={50} />
					</Icon>
					<CardTitle>SOP</CardTitle>
				</Card>
				<Card>
					<Icon>
						<FiArchive size={50} />
					</Icon>
					<CardTitle>Instruksi Kerja</CardTitle>
				</Card>
				<Card>
					<Icon>
						<FiArchive size={50} />
					</Icon>
					<CardTitle>Lembar Formulir</CardTitle>
				</Card>
			</Container>
		</>
	);
};

export default Dokumen;
