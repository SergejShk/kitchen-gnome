import { useState, useEffect, type FC } from "react";

import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

import s from "./header.module.css";

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const onBurgerMenClick = () => {
		setIsMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		const body = document.querySelector('body');

		isMenuOpen ? body.classList.add('no-scroll') : body.classList.remove('no-scroll');
	},[isMenuOpen])

	return (
		<>
			<header className={s.header}>
				<div className={s.headerWrapper}>
					<a className={s.headerLogo} href="/">
						<img className={s.logo} src='/icons/logo-black.svg' alt="logo"/>
						Kitchen Gnome
					</a>

					<Navigation />

					<button
						className={isMenuOpen ? s.isBurgerMenuOpen : s.burgerMenu}
						type="button"
						onClick={onBurgerMenClick}
					></button>
				</div>
				<MobileMenu isMenuOpen={isMenuOpen} />
			</header>
		</>
	);
};

export default Header;
