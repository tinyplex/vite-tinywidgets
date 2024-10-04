import React from 'react';
import {
  App as AppBase,
  Button,
  Collapsible,
  Image,
  useRoute,
  useSetRouteCallback,
} from 'tinywidgets';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { article, title } from './App.css.ts';
import { Home } from './Home.tsx';
import { Page1 } from './Page1.tsx';
import { Page2 } from './Page2.tsx';

const ROUTES = {
  home: ['Home', Home],
  page1: ['Page 1', Page1],
  page2: ['Page 2', Page2],
} as const;
type Route = keyof typeof ROUTES;

const useCurrentRoute = (): [Route, (route: Route) => void] => {
  const currentRoute = useRoute();
  const setCurrentRoute = useSetRouteCallback();
  return [
    (currentRoute in ROUTES ? currentRoute : 'home') as Route,
    setCurrentRoute,
  ];
};

export const App = () => (
  <AppBase
    title={Title}
    topNavRight={
      <Button
        title='GitHub'
        icon={SiGithub}
        href='https://github.com/tinyplex/tinywidgets'
      />
    }
    sideNav={SideNav}
    main={Main}
  />
);

const Title = () => {
  const [, setCurrentRoute] = useCurrentRoute();
  return (
    <h1 className={title} onClick={() => setCurrentRoute('home')}>
      <Image src='/favicon.svg' variant='logo' alt='TinyWidgets' />
      My New App
    </h1>
  );
};

const SideNav = () => {
  const [currentRoute, setCurrentRoute] = useCurrentRoute();
  return (
    <Collapsible title='Pages' startOpen>
      {Object.entries(ROUTES).map(([route, [title]]) => (
        <Button
          title={title}
          onClick={() => setCurrentRoute(route as Route)}
          variant='item'
          current={route == currentRoute}
          key={route}
        />
      ))}
    </Collapsible>
  );
};

const Main = () => {
  const [currentRoute] = useCurrentRoute();
  const Component = ROUTES[currentRoute]?.[1] ?? Home;
  return (
    <article className={article}>
      <Component />
    </article>
  );
};
