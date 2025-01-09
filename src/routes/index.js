import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/user/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
