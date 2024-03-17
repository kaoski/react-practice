import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import Result from "./components/Result"
import { calculateInvestmentResults } from "./util/investment";

function App() {

  const [results, setResults] = useState([]);

  function updateResults (investmentDetail) {
    console.log(investmentDetail);
    const newResults = calculateInvestmentResults(investmentDetail);
    setResults(newResults);
  }

  return (
    <>
      <Header/>
      <Form updateResults={updateResults}/>
      <Result results={results}/>
    </>

  )
}

export default App
