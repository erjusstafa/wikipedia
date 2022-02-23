import React, {
  ChangeEvent,
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from "react";
import "./styles.scss";
import axios from "axios";
function Home(): ReactElement {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://en.wikipedia.org/w/api.php"
        );
        setData(response);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  });

  console.log("data", data);

  return (
    <Fragment>
      <div className="home--wrapper">
        <div className="home--wrapper--container">
          <input
            type="text"
            className="input--search"
            placeholder="Type something..."
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setValue(event.target.value)
            }
          />
          <button className="button--search">Search</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
