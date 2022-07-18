import React, { useEffect, useState } from "react";

import ExperimentForm from "./components/ExperimentForm";
import ExperimentTable from "./components/ExperimentTable";
import Search from "./components/Search";
import Title from "./components/Title";

import fetchExperiments from "./api/fetchExperiments";

const App = () => {
  
  const [experiments, setExperiments] = useState();
  
  useEffect(() => {
    fetchExperiments((data) => setExperiments(data));
  }, []);

  const handleSearchSubmit = (data) => console.log(data);
  
  return (
    <div className="container-fluid py-1" id="experiments-portal">
      <Title>Experiments Search</Title>
      <div className="d-flex">
        <Search onSubmitSearch={handleSearchSubmit}/>
        <ExperimentForm/>
      </div>
      {experiments === undefined ? null : <ExperimentTable experiments={experiments}/>}
    </div>
  );
};

export default App;