import styled from "styled-components";

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  border-radius: 4px;
  width: 200px;
  height: 30px;
	cursor: pointer;
`;

export const SelectButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
  padding: 4px;
	width: 100%;
`;

export const SelectOptionList = styled.ul`
  display: flex;
	flex-direction: column;
	align-items: center;
  min-width: 200px;
	padding: 0;
	background-color: #efefef;
`;

export const SelectOption = styled.li<{isSelected: boolean}>`
	cursor: pointer;
	width: 100%;
	height: 25px;
	list-style: none;
	text-align: center;

	${({ isSelected }) => isSelected && `
		background-color: blue;
		color: white;
	`}

	:hover {
		background-color: blue;
		color: white;
	}
`;

