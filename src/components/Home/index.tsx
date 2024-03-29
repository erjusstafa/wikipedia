import React, { ChangeEvent, Fragment, ReactElement, useCallback, useEffect, useState } from "react";
import "./styles.scss";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { DataItem, fetchWekipediaApi } from "../../redux/features/dataSlice";
import List from "../List";
import Loading from "../Loading";

function Home(): ReactElement {
  const dispatch = useReduxDispatch();
  const { data, loading } = useReduxSelector((state) => state.wikipedia);

  const [val, setVal] = useState<string>("");
  const [showData, setShowData] = useState<boolean>(false);
  const [historySearch, setHistorySearch] = useState<any>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;

    //call API from redux-toolkit
    setVal(search);
    if (search.length > 3) {
      setShowData(true);
      dispatch(fetchWekipediaApi(search));
    } else {
      setShowData(false);
    }
    const newHis = [...historySearch, val];
    setHistorySearch(newHis);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVal("");
  };

  return (
    <Fragment>
      <div className="home--wrapper">
        <div className="home--wrapper--container--two">
          <form onSubmit={() => handleSubmit}>
            <input
              type="text"
              className="input--search"
              placeholder="Type something..."
              value={val}
              onChange={handleChange}
            />
            <div className="search"></div>
          </form>

          {loading ? (
            <Loading />
          ) : (
            showData && (
              <div className={val.length > 3 ? "box--list active" : "box--list"}>
                <img  className="logo--box" src="https://pngimg.com/uploads/wikipedia/wikipedia_PNG40.png" alt="" />
                {data?.query?.search.length > 0 ? (
                  Object.values(data?.query?.search || {})
                    .filter((item: DataItem | any) =>
                      (item?.snippet.toLowerCase() || item?.title.toLowerCase()).includes(val.toLowerCase())
                    )
                    .map((item: DataItem | any, index: number) => {
                      return (
                        <div key={index}>
                          <List item={item} />
                        </div>
                      );
                    })
                ) : (
                  <h2>The word " {val} " not exist in API!</h2>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
