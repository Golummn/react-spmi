import Sidebar from "./components/Sidebar/index";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ManualMutu from "./pages/Admin/ManualMutu";
import Sop from "./pages/Admin/Sop";
import InstruksiKerja from "./pages/Admin/InstruksiKerja";
// import Login from "./pages/Login";
import "./App.css";

function App() {
	return (
		<Router>
			<Sidebar>
				<Routes>
					<Route path="/" element={<>Hello World</>} />
					<Route path="*" element={<> not found</>} />
					<Route path="manual-mutu" element={<ManualMutu> </ManualMutu>} />
					<Route path="sop" element={<Sop> </Sop>} />
					<Route path="instruksi-kerja" element={<InstruksiKerja> </InstruksiKerja>} />
				</Routes>
			</Sidebar>
		</Router>
	);
}

export default App;
