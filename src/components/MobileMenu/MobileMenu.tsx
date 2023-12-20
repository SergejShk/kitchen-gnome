import { navItems } from '../../utils/constants';

import s from "./mobileMenu.module.css";

interface IProps {
	isMenuOpen: boolean;
}

const MobileMenu = ({ isMenuOpen }: IProps) => {
	return (
		<div className={isMenuOpen ? s.isMobileMenuOpen : s.mobileMenu}>
			<ul className={s.navList}>
				{navItems.map((item) => (
					<li>
						<a className={s.navLink} href={item.link}>
							{item.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MobileMenu;
