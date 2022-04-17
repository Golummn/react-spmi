import React from "react";
import {Container, Title, Table, Tambah, WrapperTable} from "./../StyledAdmin";

const ManejemenPengguna = () => {
	return (
		<>
			<Container>
				<Title>Manajemen Pengguna</Title>
				<Tambah>Tambah</Tambah>
				<WrapperTable>
					<Table>
						<thead>
							<tr>
								<th>No</th>
								<th>Nama</th>
								<th>No Handphone</th>
								<th>Email</th>
								<th>Prodi</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>content</td>
								<td>content</td>
								<td>content</td>
								<td>content</td>
								<td>content</td>
							</tr>
						</tbody>
					</Table>
				</WrapperTable>
			</Container>
		</>
	);
};

export default ManejemenPengguna;
