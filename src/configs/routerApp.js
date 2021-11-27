import { ROUTES } from '../configs';
import Home from '../pages/home';
import DetailMovie from '../pages/detail-movie';

export const routerApp = [
    {
        path: ROUTES.HOME(),
        compt: Home,
        exact: true,
    },

    {
        path: ROUTES.DETAIL_MOVIE(),
        compt: DetailMovie,
    },
];