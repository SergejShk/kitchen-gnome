import { navItems } from '../../utils/constants';

import s from "./navigation.module.css";

const Navigation = () => {
  return (
    <ul className={s.navList}>
        {
          navItems.map((item) => (
            <li>
              <a className={s.navLink} href={item.link}>
                {item.name}
              </a>
            </li>
          ))
        }
    </ul>
  );
}

export default Navigation;