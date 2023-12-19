import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const onBurgerClick = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<HeaderStyled>
			<Logo to="/">Kitchen Gnome</Logo>
			<Burger isMenuOpen={isMenuOpen} onClick={onBurgerClick} />
		</HeaderStyled>
	);
};

export default Header;

const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	height: calc(70px - 34px);
	width: calc(375px - 43px);
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 17px 23px 17px 20px;
`;

const Logo = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 145px;
	height: 36px;
	background-image: url("/icons/logo-black.svg");
	background-size: auto;
	background-position: left center;
	background-repeat: no-repeat;
	color: #040404;
	font-family: Avenir;
	font-size: 20px;
	font-style: normal;
	font-weight: 800;
	line-height: 135%;
	padding: 0 0 0 48px;
`;

const Burger = styled.button<{ isMenuOpen: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	background-image: ${({ isMenuOpen }) =>
		isMenuOpen ? `url("/icons/cross.svg")` : `url("/icons/burger.svg")`};
	background-size: auto;
	background-position: left center;
	background-repeat: no-repeat;
	margin-left: auto;
`;
