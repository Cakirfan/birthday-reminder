import React, { useState } from "react";
import data from "./helper/data";
import List from "./components/List";
import Button from "@mui/material/Button";

function App() {
  const [people, setPeople] = useState(data);
  const [show, setShow] = useState(false);

  const toggleClearAll = () => {
    setShow(!show);
    if (show) {
      setPeople(data);
    } else {
      setPeople([]);
    }
  };

  return (
    <main>
      <div className="container">
        <h2 className="text-center mb-4">{people.length} birthdays today</h2>
        <List people={people} />
        <Button variant="contained" onClick={toggleClearAll}>
          {show ? "Show All" : "Clear All"}
        </Button>
      </div>
    </main>
  );
}

export default App;
