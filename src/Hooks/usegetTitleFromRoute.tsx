import { AppKeyEnum } from "../enums/AppKey";
import { AppRoutes } from "../Routes";


export const usegetTitleFromRoute = (path:any) => {
    if (AppRoutes[path]) {
      return `${AppKeyEnum?.PROJECT_NAME} | ${AppRoutes[path]}`;
    }
}