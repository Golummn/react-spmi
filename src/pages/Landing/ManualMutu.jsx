import React from "react";
import styled from "styled-components";
import {Table} from "./StyledTable";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

const Title = styled.h2`
	width: 80%;
	font-size: 2rem;
	font-weight: 500;
	margin: 2rem auto;
`;

const TableManualMutu = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Title>Dokumen Manual Mutu</Title>
			<Table>
				<thead>
					<tr>
						<th>No</th>
						<th>Nama File</th>
						<th>Tahun</th>
						<th>File</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>content</td>
						<td>content</td>
						<td>content</td>
						<td>content</td>
					</tr>
					<tr>
						<td>content</td>
						<td>content</td>
						<td>content</td>
						<td>content</td>
					</tr>
				</tbody>
			</Table>
			<Footer />
		</>
	);
};

export default TableManualMutu;
