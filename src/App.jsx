import Sidebar from "./components/Sidebar/index";
import {Route, Routes} from "react-router-dom";
import ManualMutu from "./pages/Admin/ManualMutu";
import Sop from "./pages/Admin/Sop";
import InstruksiKerja from "./pages/Admin/InstruksiKerja";
// import Login from "./pages/Login";
import Landing from "./pages/Landing/index";

//admin
import TableManualMutu from "./pages/Landing/ManualMutu";
import DaftarPengguna from "./pages/Admin/ManajemenPengguna/DaftarPengguna";
import TambahPengguna from "./pages/Admin/ManajemenPengguna/TambahPengguna";
import "./App.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="" element={<Landing />}>
					<Route path="manual-mutu" element={<TableManualMutu />} />
					{/* <Route path="sop" element={<TableManualMutu />} />
					<Route path="instruksi-kerja" element={<TableManualMutu />} />
					<Route path="lembar-formulir" element={<TableManualMutu />} /> */}
				</Route>
				<Route path="admin" element={<Sidebar />}>
					<Route path="beranda" element={<>Hello World</>} />
					<Route path="manual-mutu" element={<ManualMutu />} />
					<Route path="sop" element={<Sop />} />
					<Route path="instruksi-kerja" element={<InstruksiKerja />} />
					<Route path="manajemen-pengguna">
						<Route path="" element={<DaftarPengguna />}></Route>
						<Route path="tambah-pengguna" element={<TambahPengguna />}></Route>
					</Route>
				</Route>
				{/* <Route path="/" element={<Index />} /> */}
				{/* <Route path="/admin" element={<Sidebar />}>
					<Route path="/" element={<>Hello World</>} />
					<Route path="*" element={<> not found</>} />
						<Route path="manual-mutu" element={<ManualMutu> </ManualMutu>} />
						<Route path="sop" element={<Sop> </Sop>} />
						<Route path="instruksi-kerja" element={<InstruksiKerja> </InstruksiKerja>} />
				</Route> */}
			</Routes>
		</>
	);
}

export default App;
