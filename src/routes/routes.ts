
import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
/* import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
 */

type JSXComponent = () => JSX.Element;

interface Route {
  to: string,
  path: string,
  name: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const LazyLayout = lazy(
  () => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout')
);


export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    name: 'Layout',
    Component: LazyLayout 
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    name: 'No lazyload',
    Component: NoLazy
  }
]
