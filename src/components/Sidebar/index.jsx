import {NavLink, Outlet} from "react-router-dom";
import {FaBars, FaHome, FaLock, FaMoneyBill, FaUser} from "react-icons/fa";
import {BiCog} from "react-icons/bi";
import {AiFillHeart, AiTwotoneFileExclamation} from "react-icons/ai";
import {BsCartCheck} from "react-icons/bs";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import logofksp from "./../../assets/fksp.png";
import styled from "styled-components";

const routes = [
	{
		path: "beranda",
		name: "Beranda",
		icon: <FaHome />,
	},
	{
		path: "file-manager",
		name: "Penjaminan Mutu",
		icon: <AiTwotoneFileExclamation />,
		subRoutes: [
			{
				path: "manual-mutu",
				name: "Manual Mutu ",
				icon: <FaUser />,
			},
			{
				path: "sop",
				name: "SOP",
				icon: <FaLock />,
			},
			{
				path: "instruksi-kerja",
				name: "Instruksi Kerja",
				icon: <FaMoneyBill />,
			},
		],
	},
	{
		path: "penelitian",
		name: "Penelitian",
		icon: <BsCartCheck />,
	},
	{
		path: "pengabdian",
		name: "Pengabdian",
		icon: <BiCog />,
	},
	{
		path: "manajemen-pengguna",
		name: "Manajemen Pengguna",
		icon: <FaUser />,
	},
];

const SideBar = ({children}) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const showAnimation = {
		hidden: {
			width: 0,
			opacity: 0,
			transition: {
				duration: 0.1,
			},
		},
		show: {
			opacity: 1,
			width: "auto",
			transition: {
				duration: 0.1,
			},
		},
	};

	const MainContainer = styled.div`
		display: flex;
	`;
	const Sidebar = styled(motion.div)`
		background: #00824c;
		color: white;
		height: 100vh;
		position: fixed;
		overflow-y: auto;
		z-index: 10;
		@media screen and (max-width: 768px) {
			position: absolute;
		}
	`;
	const Logo = styled(motion.h1)`
		font-weight: 600;
		font-size: 18px;
		line-height: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	`;
	// const Link = styled.div``;

	const Icon = styled.div`
		width: 20px;
	`;

	const LinkText = styled(motion.div)`
		white-space: nowrap;
		font-size: 15px;
	`;

	const TopSection = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px 10px;
	`;

	const Main = styled.main`
		padding: 30px;
		width: 100%;
		@media screen and (max-width: 768px) {
			margin-left: 2rem;
			overflow-x: hidden;
		}
	`;
	const Bars = styled.div`
		width: 30px;
		cursor: pointer;
		&:hover {
			color: antiquewhite;
		}
	`;

	const Routes = styled.div`
		margin-top: 15px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	`;

	const Topbar = styled.div`
		position: fixed;
		width: 100%;
		height: 70px;
		background-color: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	`;
	const TopbarWrapper = styled.div`
		height: 100%;
		padding: 0px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;
	const TopLeft = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
	`;
	const Title = styled.h1`
		margin-left: 1rem;
		font-weight: 600;
		font-size: 30px;
		color: #155e3f;
		cursor: pointer;
	`;
	const TopRight = styled.div`
		display: flex;
		align-items: center;
	`;
	const TopAvatar = styled.img`
		width: 40px;
		height: 40px;
		border-radius: 50%;
		cursor: pointer;
	`;
	const Dash = styled.span`
		margin-left: 0.3rem;
	`;

	return (
		<>
			<Sidebar
				animate={{
					width: isOpen ? "300px" : "40px",
					transition: {
						duration: 0.1,
						type: "spring",
						damping: 10,
					},
				}}
			>
				<TopSection>
					<AnimatePresence>
						{isOpen && (
							<Logo variants={showAnimation} initial="hidden" animate="show" exit="hidden">
								<FaHome />
								<Dash>Dashboard</Dash>
							</Logo>
						)}
					</AnimatePresence>

					<Bars>
						<FaBars onClick={toggle} />
					</Bars>
				</TopSection>

				<Routes>
					{routes.map((route, index) => {
						if (route.subRoutes) {
							return <SidebarMenu setIsOpen={setIsOpen} route={route} showAnimation={showAnimation} isOpen={isOpen} />;
						}

						return (
							<NavLink to={route.path} key={index} className="link" activeClassName="active">
								<Icon>{route.icon}</Icon>
								<AnimatePresence>
									{isOpen && (
										<LinkText variants={showAnimation} initial="hidden" animate="show" exit="hidden">
											{route.name}
										</LinkText>
									)}
								</AnimatePresence>
							</NavLink>
						);
					})}
				</Routes>
			</Sidebar>
			<Topbar>
				<TopbarWrapper>
					<TopLeft>
						<TopAvatar src={logofksp} />
						<Title>E-SPMI FKSP</Title>
					</TopLeft>
					<TopRight>
						<TopAvatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
					</TopRight>
				</TopbarWrapper>
			</Topbar>
			<MainContainer>
				<Main>
					<Outlet />
				</Main>
			</MainContainer>
		</>
	);
};

export default SideBar;
