import React, { Fragment } from "react";
import { DataItem, delFav } from "../../redux/features/dataSlice";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import "./styles.scss";

function Favourites() {
  const { fav } = useReduxSelector((state) => state.wikipedia);
  const dispatch = useReduxDispatch();

  return (
    <div className={fav.length === 0 ? "wrapp--fav--empty" : "wrapp--fav"}>
      {fav.length === 0 ? (
        <h2>Nothing to show</h2>
      ) : (
        fav.map((item: DataItem | any, index: number) => (
          <div className="list--container" key={index}>
            <span>
              <a
                href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                target="_blank"
                className="list--container--link"
              >
                {item.title.substring(0, 20) + "..."}
              </a>
              <a
                href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                target="_blank"
                className="list--container--link--id"
              >
                https://en.wikipedia.org/?curid={item.pageid}
              </a>
            </span>
            <i
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => dispatch(delFav(item))}
              className="fas fa-star"
            ></i>
            {/*       <p>{item.snippet}</p>
             */}{" "}
          </div>
        ))
      )}
    </div>
  );
}

export default Favourites;
