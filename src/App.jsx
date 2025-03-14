import useFetch from "./hooks/useFetch";
import "./App.css";
import { useState } from "react";

export function Home({ url }) {
  const { data, loading, error } = useFetch(url);

  console.log("data: ", data);

  if (error) {
    console.log("error: ", error);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <p>Status: {data.status}</p>
        </div>
      )}
    </>
  );
}

function App() {
  const [url, setUrl] = useState("http://localhost:7070/data");
  const urlOk = "http://localhost:7070/data";
  const urlErr = "http://localhost:7070/error";
  const urlLoading = "http://localhost:7070/loading";

  const handleOk = () => {
    setUrl(urlOk);
  };

  const handleErr = () => {
    setUrl(urlErr);
  };

  const handleLoading = () => {
    setUrl(urlLoading);
  };

  return (
    <>
      <div>
        <button onClick={() => handleOk()}>OK</button>
        <button onClick={() => handleErr()}>Error</button>
        <button onClick={() => handleLoading()}>Loading</button>
      </div>
      <Home url={url} />
    </>
  );
}

export default App;
