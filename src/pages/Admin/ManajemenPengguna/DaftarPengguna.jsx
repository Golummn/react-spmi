import React from "react";
import {Container, Title, Table, Tambah, WrapperTable, StyledLink} from "../StyledAdmin";
import {FiPlus} from "react-icons/fi";

const DaftarPengguna = () => {
	return (
		<>
			<Container>
				<Title>Daftar Pengguna</Title>
				<Tambah>
					<StyledLink to="tambah-pengguna">
						<FiPlus size={12} />
						Tambah
					</StyledLink>
				</Tambah>
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
								<td>
									<button>hapus</button>
									<button>edit</button>
									<button>Detail</button>
								</td>
							</tr>
						</tbody>
					</Table>
				</WrapperTable>
			</Container>
		</>
	);
};

export default DaftarPengguna;
