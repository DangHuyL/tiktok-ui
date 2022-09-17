// Layouts
import { HeaderOnly } from '~/layouts';
import config from '~/config';

import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Upload from '~/Page/Upload';
import Search from '~/Page/Search';

const puplicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { puplicRoutes, privateRoutes };
