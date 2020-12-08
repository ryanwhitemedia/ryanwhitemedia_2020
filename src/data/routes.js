// @flow

export type RouteType = {
  path: string,
  title: string
};

export type RoutesType = Array<{
  path: string,
  title: string
}>;

export default ([
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/about/',
    title: 'About'
  }
]: RoutesType);
