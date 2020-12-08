// @flow

import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import styles from './Nav.module.scss';

import SvgThreeLogo from '../../assets/svgs/svg-three-logo.svg';

import routes from '../../data/routes';
import type { RouteType, RoutesType } from '../../data/routes';

function Nav(): React$MixedElement {
  const items = Object.values((routes: RoutesType)).map(
    ((route: RouteType) => (
      <li key={route.path}>
        <Link href={route.path}>
          <a aria-label="Home">
            {route.path === '/' ? <SvgThreeLogo className={styles.threeLogo} /> : <>{route.title}</>}
          </a>
        </Link>
      </li>
    ): any)
  );
  return (
    <nav className={classnames(styles.Nav)}>
      <div className={styles.wrapper}>
        <ul className={styles.routes}>{items}</ul>
      </div>
    </nav>
  );
}

export default Nav;
