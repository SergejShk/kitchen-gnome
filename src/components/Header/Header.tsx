import { useState, type FC } from "react";

import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

import s from "./header.module.css";

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const onBurgerMenClick = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<>
			<header className={s.header}>	
				<div className={s.logoWrapper}>
					<img className={s.logo} src='/icons/logo-black.svg' alt="logo"/>
					<a className={s.headerLogo} href="/">
						Kitchen Gnome
					</a>
				</div>

				<Navigation />

				<button
					className={isMenuOpen ? s.isBurgerMenuOpen : s.burgerMenu}
					type="button"
					onClick={onBurgerMenClick}
				></button>
			</header>

			<MobileMenu isMenuOpen={isMenuOpen} />
		</>
	);
};

export default Header;
