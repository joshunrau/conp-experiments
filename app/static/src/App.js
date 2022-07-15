import React, { useEffect, useState } from "react";

import ExperimentForm from "./components/ExperimentForm";
import ExperimentTable from "./components/ExperimentTable";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";

import fetchExperiments from "./api/fetchExperiments";

const App = () => {
  
  const [experiments, setExperiments] = useState();
  
  useEffect(() => {
    fetchExperiments((data) => setExperiments(data));
  }, []);

  console.log(experiments);
  
  return (
    <div className="container-fluid py-1" id="experiments-portal">
      <Title>Experiments Search</Title>
      <SearchBar/>
      <ExperimentForm/>
      {experiments === undefined ? null : <ExperimentTable experiments={experiments}/>}
    </div>
  );
};

export default App;