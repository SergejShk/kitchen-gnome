import { navItems } from "../../utils/constants";

import s from "./mobileMenu.module.css";

interface IProps {
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: IProps) => {
	const onNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
		e.preventDefault();
		const id = link.replace("#", "");
		const scrollTo = document.getElementById(id)?.offsetTop;
		const screenWidth = window.innerWidth;
		const headerWidth = screenWidth < 1440 ? 70 : 145;

		if (!scrollTo) return;

		window.scrollTo({
			top: scrollTo - headerWidth,
			behavior: "smooth",
		});

		setIsMenuOpen(false);
	};

	return (
		<div className={isMenuOpen ? s.isMobileMenuOpen : s.mobileMenu}>
			<ul className={s.navList}>
				{navItems.map((item) => (
					<li key={item.link}>
						<a className={s.navLink} href={item.link} onClick={(e) => onNavClick(e, item.link)}>
							{item.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MobileMenu;
