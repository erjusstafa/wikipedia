import React, { Fragment, ReactElement } from "react";
import styles from "./styles.module.scss";
import image from "../../constants/images";
import { Link } from "react-router-dom";
function Header(): ReactElement {
  return (
    <Fragment>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <img src={image.logo} alt="logo" />
        </div>
        <div className={styles.link}>
          <Link to="home"   className={styles.linkItem}>
            Home
          </Link>
          <Link to="/favorite"  className={styles.linkItem} >
          Favorite
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
