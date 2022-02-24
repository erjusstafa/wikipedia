import React, { Fragment, ReactElement } from "react";
import styles from "./styles.module.scss";
import image from "../../constants/images";
import { Link } from "react-router-dom";
function Header(): ReactElement {
  return (
    <Fragment>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/657px-Wikipedia-logo-v2.svg.png" alt="logo" />
        </div>
        <div className={styles.link}>
          <Link to="/" className={styles.linkItem}>
            Home
          </Link>
          <Link to="/favorite" className={styles.linkItem}>
            Favorite
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
