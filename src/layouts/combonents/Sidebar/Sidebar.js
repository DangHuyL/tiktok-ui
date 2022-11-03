import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import config from '~/config';
import style from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    FollowingIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    LiveActiveIcon,
} from '~/combonents/Icon';
import SuggestedAccounts from '~/combonents/SuggestedAccounts';
import * as useService from '~/services/userService';

const cx = classNames.bind(style);
const INIT_PAGE = 1;
const PER_PAGE = 5;
function Sidebar() {
    const [suggested, setSuggested] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await useService.getSuggested({
                page: INIT_PAGE,
                perPage: PER_PAGE,
            });

            setSuggested(data);
        };
        fetchApi();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            <SuggestedAccounts lable="Suggested accounts" data={suggested} />
            <SuggestedAccounts lable="Following accounts" />
        </aside>
    );
}

export default Sidebar;
