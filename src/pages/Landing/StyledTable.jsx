import styled from "styled-components";

export const Table = styled.table`
	font-size: 14px;
	margin: 1rem auto;
	border-collapse: collapse;
	width: 80%;
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
