import React from "react";
import {Title, Input, Label, Container} from "../StyledAdmin";

const TambahPengguna = () => {
	return (
		<>
			<Container>
				<Title>Tambah Pengguna</Title>

				<Label for="nidn">Nidn</Label>
				<Input type="text" id="fname" name="nidn"></Input>
				<Label for="nama">Nama</Label>
				<Input type="text" id="lname" name="nama"></Input>
				<Label for="alamat">Alamat</Label>
				<Input type="text" id="lname" name="alamat"></Input>
				<Label for="alamat">Jenis Kelamin</Label>
				<Input type="text" id="lname" name="alamat"></Input>
				<Label for="alamat">NomerHp</Label>
				<Input type="text" id="lname" name="alamat"></Input>
				<Label for="alamat">Tanggal Lahir</Label>
				<Input type="text" id="lname" name="alamat"></Input>
				<Label for="alamat">Jabatan</Label>
				<Input type="text" id="lname" name="alamat"></Input>
				<Label for="alamat">Prodi</Label>
				<Input type="text" id="lname" name="alamat"></Input>
			</Container>
		</>
	);
};

export default TambahPengguna;
