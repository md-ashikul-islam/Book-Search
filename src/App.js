import React, { useState } from "react";
import useBookSearch from "./useBookSearch";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setpageNumber] = useState(1);

  function handleSearch(e) {
    setQuery(e.target.value);
    setpageNumber(1);
  }

  useBookSearch(query, pageNumber);
  return (
    <>
      <input type="text" onChange={handleSearch}></input>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Loading...</div>
      <div>Error</div>
    </>
  );
}

export default App;
