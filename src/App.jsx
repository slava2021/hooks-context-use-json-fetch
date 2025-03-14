import useFetch from "./useFetch";
import "./App.css";

export function Home() {
  // const url = "http://localhost:7070/data";
  const url = "http://localhost:7070/error";
  // const url = "http://localhost:7070/loading";
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
  return (
    <>
      <Home />
    </>
  );
}

export default App;
