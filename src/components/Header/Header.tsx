import { useState, useEffect, type FC } from "react";

import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

import s from "./header.module.css";

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const onBurgerMenuClick = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const onLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();

		setIsMenuOpen(false);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const body = document.querySelector("body");

		isMenuOpen ? body?.classList.add("no-scroll") : body?.classList.remove("no-scroll");
	}, [isMenuOpen]);

	return (
		<>
			<header className={s.header}>
				<div className={s.headerContainer}>
					<a className={s.headerLogo} href="#" onClick={onLogoClick}>
						<img className={s.logo} src="/icons/logo-black.svg" alt="logo" />
						Kitchen Gnome
					</a>

					<Navigation />

					<button
						className={isMenuOpen ? s.isBurgerMenuOpen : s.burgerMenu}
						type="button"
						onClick={onBurgerMenuClick}
					></button>
				</div>
				<MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			</header>
		</>
	);
};

export default Header;
