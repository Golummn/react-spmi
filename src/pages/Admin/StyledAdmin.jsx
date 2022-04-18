import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #f1f1f1;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
export const Container = styled.div`
	max-height: 95vh;
	width: 100%;
`;
export const Title = styled.h1`
	font-weight: 500;
	font-size: 2rem;
`;
export const Table = styled.table`
	font-size: 14px;
	border-collapse: collapse;
	width: 100%;
	thead tr {
		border-radius: 8px;
	}
	th {
		border-right: 1px solid #f1f1f1;
		text-align: center;
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: #04aa6d;
		color: #f1f1f1;
		padding: 6px;
		font-weight: 600;
		font-size: 16px;
	}
	tbody tr {
		:nth-of-type(even) {
			background-color: #ddd;
		}
		:hover {
			background-color: #d3d2d2;
		}
	}
	td {
		border-right: 1px solid #f1f1f1;
		padding: 6px;
	}
`;

export const Tambah = styled.button`
	margin: 1rem 0;
	appearance: none;
	background-color: #2ea44f;
	border: 1px solid rgba(27, 31, 35, 0.15);
	border-radius: 6px;
	box-shadow: rgba(143, 223, 140, 0.1) 0 1px 0;
	box-sizing: border-box;
	color: #f1f1f1;
	cursor: pointer;
	display: inline-block;
	font-size: 14px;
	font-weight: 600;
	line-height: 20px;
	padding: 6px 16px;
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	vertical-align: middle;
	white-space: nowrap;
	&:hover {
		background-color: #2c974b;
	}
	/* @media screen and (max-width: 768px) {
		margin-left: 3rem;
	} */
`;

export const WrapperTable = styled.div`
	width: 100%;
	overflow-x: auto;
`;

export const Input = styled.input`
	padding: 0.8em;
	width: 100%;
	font-size: 0.9em;
	background-color: #fafafa;
	border: 1px solid #c5c5c5;
	border-radius: 5px;
	&:focus {
		outline: none !important;
		border: 1px solid #009457;
		box-shadow: 0 0 10px #719ece;
	}
`;
export const Label = styled.label`
	display: inline-block;
	font-size: 1rem;
	margin-top: 0.5rem;
`;
