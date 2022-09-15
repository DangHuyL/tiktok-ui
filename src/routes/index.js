// Layouts
import { HeaderOnly } from '~/combonents/Layout';
import routes from '~/config/routes';

import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Upload from '~/Page/Upload';
import Search from '~/Page/Search';

const puplicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
    { path: routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { puplicRoutes, privateRoutes };
