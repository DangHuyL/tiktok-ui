import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Proptypes from 'prop-types';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            to={to}
            className={(nav) => cx('menu-item', { active: nav.isActive })}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>

            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: Proptypes.string.isRequired,
    to: Proptypes.string.isRequired,
    icon: Proptypes.node,
};

export default MenuItem;
