import React, {
  ChangeEvent,
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from "react";
import "./styles.scss";
import axios from "axios";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import {
  DataItem,
  fetchWekipediaApi,
  IData,
} from "../../redux/features/dataSlice";
import { queryByTitle } from "@testing-library/react";
import List from "../List";
import Loading from "../Loading";

function Home(): ReactElement {
  const dispatch = useReduxDispatch();
  const { data, loading } = useReduxSelector((state) => state.wikipedia);

  const [val, setVal] = useState<string>("");
  const [showData, setShowData] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setVal(search);
    if (search.length > 3) {
      setShowData(true);
    } else {
      setShowData(false);
    }
  };

  const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVal("");
  };

  useEffect(() => {
    dispatch(fetchWekipediaApi(val));
  }, [dispatch]);

  const filteredOptions = data?.query?.search.filter((item: any) => {
    {
      console.log("fil", item);
    }
    return (item?.snippet.toLowerCase() || item?.title.toLowerCase()).includes(
      val.toLowerCase() || !val
    );
  });

  return (
    <Fragment>
      <div className="home--wrapper">
        <div className="home--wrapper--container">
          <form onSubmit={() => hanldeSubmit}>
            <input
              type="text"
              className="input--search"
              placeholder="Type something..."
              value={val}
              onChange={handleChange}
            />
          </form>

          {loading ? (
            <Loading />
          ) : (
            showData && (
              <div
                style={{
                  backgroundColor:
                    data?.query?.search.length < 0 ? "red" : "blue",
                }}
                className="box--list"
              >
                {filteredOptions.length < 0 ? (
                  <h1>hello</h1>
                ) : (
                  Object.values(data?.query?.search || {})
                    .filter((item: any) =>
                      (
                        item?.snippet.toLowerCase() || item?.title.toLowerCase()
                      ).includes(val.toLowerCase())
                    )
                    .map((item: DataItem | any, index: number) => {
                      console.log(
                        "data?.query?.search.length ",
                        data?.query?.search.length
                      );

                      return (
                        <div key={index}>
                          <List item={item} />
                        </div>
                      );
                    })
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
