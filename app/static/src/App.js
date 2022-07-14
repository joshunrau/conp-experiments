import React, { useEffect, useState } from "react";

import ExperimentForm from "./components/ExperimentForm";
import ExperimentTable from "./components/ExperimentTable";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";

import fetchSimulatedExperiments from "./api/fetchSimulatedExperiments";

const App = () => {
  
  const [experiments, setExperiments] = useState();
  
  useEffect(() => {
    fetchSimulatedExperiments((data) => setExperiments(data));
  }, []);

  console.log(experiments)
  
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