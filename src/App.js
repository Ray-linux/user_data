import React, { useState } from "react";
import "./App.css";
import NAV from "./components/nav/NAV";

function App() {
  let rsu
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://reqres.in/api/users?page=1";

  const getData = async() => {
    const responce = await fetch(url);
    const result  = await responce.json();
    setData(result.data);
    setLoading(true)
  }

  const onClickHandler = () => {
    setLoading(false)
    getData();
  }
  
  return (
    <>
        <NAV data = {data} brand = {"Sabira"} click={onClickHandler} isLoading = {loading}/>    
    </>
  );
}

export default App;
