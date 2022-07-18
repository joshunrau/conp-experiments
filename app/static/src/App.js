import React, { useEffect, useState } from "react";

import ExperimentForm from "./components/ExperimentForm";
import ExperimentTable from "./components/ExperimentTable";
import Search from "./components/Search";
import Title from "./components/Title";

import fetchExperiments from "./api/fetchExperiments";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const App = () => {
  
  const [experiments, setExperiments] = useState([]);
  
  useEffect(() => {
    fetchExperiments((data) => setExperiments(data));
  }, []);

  const handleSearchSubmit = (data) => console.log(data);

  return (
    <Container fluid>
      <Row>
        <Title>Experiments Search</Title>
      </Row>
      <Row>
        <Search onSubmitSearch={handleSearchSubmit} />
        <ExperimentForm/>
      </Row>
      <Row>
        <ExperimentTable experiments={experiments} />
      </Row>
    </Container>
  );

};

export default App;