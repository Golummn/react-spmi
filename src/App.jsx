import Sidebar from "./components/Sidebar/index";
import {Route, Routes} from "react-router-dom";
import ManualMutu from "./pages/Admin/ManualMutu";
import Sop from "./pages/Admin/Sop";
import InstruksiKerja from "./pages/Admin/InstruksiKerja";
import ManejemenPengguna from "./pages/Admin/ManajemenPengguna";
// import Login from "./pages/Login";
import Landing from "./pages/Landing/index";

//
import TableManualMutu from "./pages/Landing/ManualMutu";
import "./App.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Landing />}>
					<Route path="manual-mutu" element={<TableManualMutu />} />
				</Route>
				<Route path="/admin" element={<Sidebar />}>
					<Route path="beranda" element={<>Hello World</>} />
					<Route path="manual-mutu" element={<ManualMutu />} />
					<Route path="sop" element={<Sop />} />
					<Route path="instruksi-kerja" element={<InstruksiKerja />} />
					<Route path="manajemen-pengguna" element={<ManejemenPengguna />}>
						<Route path="tambah" element={<>Helo</>}></Route>
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
