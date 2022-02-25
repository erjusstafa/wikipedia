import React, { Fragment, ReactElement, useState } from "react";
import "./styles.scss";
import image from "../../constants/images";
import { Link } from "react-router-dom";
interface IActive {
  home: number;
  favourite: number;
}

function Header(): ReactElement {
  const [active, setActive] = useState<IActive>({
    home: 0,
    favourite: 1,
  });

  const handleActiveLink = (id: number) => {
    setActive({ ...active, home: id, favourite: id });
  };
  return (
    <Fragment>
      <div className="headerWrapper">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/657px-Wikipedia-logo-v2.svg.png"
            alt="logo"
          />
        </div>
        <div className="link">
          <Link
            onClick={() => handleActiveLink(0)}
            to="/"
            className={active.home == 0 ? "linkItem active" : "linkItem"}
          >
            Home
          </Link>
          <Link
            onClick={() => handleActiveLink(1)}
            to="/favorite"
            className={active.favourite == 1 ? "linkItem active" : "linkItem"}
          >
            Favorite
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
