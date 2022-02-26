import { Container } from "react-bootstrap";
import Multistep from "react-multistep";
import StepEight from "./components/StepEight";
import StepNine from "./components/StepNine";
import StepOne from "./components/StepOne";
import StepTen from "./components/StepTen";
import StepTwo from "./components/StepTwo";

function App() {
  const steps = [
    { name: "StepOne", component: <StepOne /> },
    { name: "StepTwo", component: <StepTwo /> },
    { name: "StepThree", component: <h1>Hello3</h1> },
    { name: "StepFour", component: <h1>Hello4</h1> },
    { name: "StepFive", component: <h1>Hello4</h1> },
    { name: "StepSix", component: <h1>Hello4</h1> },
    { name: "StepSeven", component: <h1>Hello4</h1> },
    { name: "StepEight", component: <StepEight /> },
    { name: "StepNine", component: <StepNine /> },
    { name: "StepTen", component: <StepTen /> },
    { name: "StepEleven", component: <h1>Hello4</h1> },
    { name: "StepTwelve", component: <h1>Hello4</h1> },
  ];

  const prevStyle = {
    border: "1px solid black",
    padding: "8px 1rem",
    borderRadius: "6px",
  };
  const nextStyle = {
    border: "1px solid black",
    padding: "8px 1rem",
    borderRadius: "6px",
    margin: "0 8px",
  };

  return (
    <Container className="pt-4 pb-4">
      <Multistep
        activeStep={1}
        showNavigation={true}
        steps={steps}
        prevStyle={prevStyle}
        nextStyle={nextStyle}
      />
    </Container>
  );
}

export default App;
