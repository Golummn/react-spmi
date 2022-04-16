import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Dokumen from "./Dokumen";
import Footer from "./Footer";
import ManualMutu from "./ManualMutu";

const Landing = () => {
	return (
		<>
			<Navbar />
			<Hero />
			{/* <Dokumen /> */}
			<ManualMutu />
			<Footer />
		</>
	);
};

export default Landing;
