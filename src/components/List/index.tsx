import { Tooltip } from "@mui/material";
import React, { ReactElement, useState } from "react";
import { addFav, DataItem, IData } from "../../redux/features/dataSlice";
import { useReduxDispatch } from "../../redux/hooks";
import "./styles.scss";

interface IList {
  item: DataItem | any;
}

function List({ item }: IList): ReactElement {
  const dispatch = useReduxDispatch();
  const [favColor, setFavColor] = useState<string>("rgb(183 183 184)");
  const [removeColor, setRemoveColor] = useState<boolean>(false);

  const handleAddFav = () => {
    dispatch(addFav(item));
    setFavColor("#ffba24");
    setRemoveColor(!removeColor);
  };

  return (
    <div className="list--container">
      <span>
        <a href={`https://en.wikipedia.org/?curid=${item.pageid}`} target="_blank" className="list--container--link">
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

      <Tooltip title="Add To Fav" arrow sx={{zIndex  : 99999}}>
        <i
          style={{ cursor: "pointer", color: removeColor ? favColor : "rgb(183 183 184)" }}
          onClick={handleAddFav}
          className="fas fa-star"
        />
      </Tooltip>
    </div>
  );
}

export default List;
