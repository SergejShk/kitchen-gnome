import { navItems } from "../../utils/constants";

import s from "./navigation.module.css";

const Navigation = () => {
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
	};

	return (
		<ul className={s.navList}>
			{navItems.map((item) => (
				<li>
					<a className={s.navLink} href={item.link} onClick={(e) => onNavClick(e, item.link)}>
						{item.name}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Navigation;
