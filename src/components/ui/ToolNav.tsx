import { useEffect } from 'react';
import Styles from '../../styles/ToolNav.module.scss';
import { useLocation } from 'react-router-dom';

export const ToolNav = () => {
  return (
    <nav className={Styles.toolNav}>
      <ul className={Styles.toolNavList}>
        <li className={Styles.toolNavItem}>
          <a href="/about" target="_blank" rel="noopener noreferrer">
            🥨
          </a>
        </li>
        <li className={Styles.toolNavItem}>
          <a href="/">
            <svg
              width="25"
              height="25"
              viewBox="0 0 48 48"
              className={Styles.toolNavIcon}
              id="home_icon"
            >
              <title>192_b_24</title>
              <rect className={Styles.a} width="48" height="48" />
              <polyline className={Styles.b} points="4 23 24 6 44 23" />
              <polyline className={Styles.b} points="9 26 9 42 39 42 39 26" />
              <polyline className={Styles.b} points="39 12 39 6 34 6" />
              <polyline className={Styles.b} points="20 42 20 30 28 30 28 42" />
            </svg>
          </a>
        </li>
        <li className={Styles.toolNavItem}>
          <a href="articles/page/1">
            <svg
              width="25"
              height="23"
              viewBox="0 0 48 48"
              className={Styles.toolNavIcon}
              id="article_icon"
            >
              <defs>
                <style
                  scoped
                >{`.cls-1,.cls-2{fill:none;}.cls-2{stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}</style>
              </defs>
              <title>note_24</title>
              <g id="レイヤー_2" data-name="Layer 2">
                <g id="Rectangle">
                  <rect className={Styles.a} width="48" height="48" />
                </g>
                <g id="icon_data">
                  <path
                    className={Styles.b}
                    d="M40,8.84V44a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2H38Z"
                  />
                  <line className={Styles.b} x1="18" y1="12" x2="30" y2="12" />
                  <line className={Styles.b} x1="18" y1="20" x2="30" y2="20" />
                  <line className={Styles.b} x1="18" y1="28" x2="24" y2="28" />
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li className={Styles.toolNavItem}>
          <a href="https://twitter.com/liliya_kamome">
            <svg
              width="20"
              height="20"
              viewBox="0 0 1200 1227"
              fill="#8f9faa"
              xmlns="http://www.w3.org/2000/svg"
              className={Styles.toolNavX}
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};
