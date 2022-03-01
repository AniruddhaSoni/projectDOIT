import { Container } from "react-bootstrap";
import Multistep from "react-multistep";
import StepEight from "./components/StepEight";
import StepFive from "./components/StepFive";
import StepFour from "./components/StepFour";
import StepNine from "./components/StepNine";
import StepOne from "./components/StepOne";
import StepSeven from "./components/StepSeven";
import StepSix from "./components/StepSix";
import StepTen from "./components/StepTen";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";

function App() {
  const steps = [
    { name: "StepOne", component: <StepOne /> },
    { name: "StepTwo", component: <StepTwo /> },
    { name: "StepThree", component: <StepThree /> },
    { name: "StepFour", component: <StepFour /> },
    { name: "StepFive", component: <StepFive /> },
    { name: "StepSix", component: <StepSix /> },
    { name: "StepSeven", component: <StepSeven /> },
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
        activeStep={0}
        showNavigation={true}
        steps={steps}
        prevStyle={prevStyle}
        nextStyle={nextStyle}
      />
    </Container>
  );
}

export default App;
