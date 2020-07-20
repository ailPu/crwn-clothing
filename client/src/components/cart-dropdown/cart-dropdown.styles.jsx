import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
	margin-top: auto;
`;

export const CartItemsContainer = styled.div`
	overflow-y: scroll;
	height: 240px;
	display: flex;
   flex-direction: column;
   
   &::-webkit-scrollbar {
      background-color: transparent;
      width: 6px;
   }
   &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: transparent;
   }

   &:hover {
      &::-webkit-scrollbar-thumb {
         background: black;
      }
`;

export const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;
