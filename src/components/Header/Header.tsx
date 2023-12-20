import { useState, type FC } from "react";

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
				<a className={s.headerLogo} href="/">
					Kitchen Gnome
				</a>

				<button
					className={isMenuOpen ? s.burgerMenu : s.isBurgerMenuOpen}
					type="button"
					onClick={onBurgerMenClick}
				></button>
			</header>

			<MobileMenu isMenuOpen={isMenuOpen} />
		</>
	);
};

export default Header;
