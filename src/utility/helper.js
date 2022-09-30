import { APP_ROUTE_PREFIX } from "../constants";

export const buildRoute = (route) => {
    return `${APP_ROUTE_PREFIX}/${route}`;
};
