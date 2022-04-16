import React from "react";
import styled from "styled-components";
import {Table} from "./StyledTable";

const Title = styled.h2`
	width: 80%;
	font-size: 2rem;
	font-weight: 500;
	margin: 2rem auto;
`;

const ManualMutu = () => {
	return (
		<>
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
		</>
	);
};

export default ManualMutu;
