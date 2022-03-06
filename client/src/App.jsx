import { Container } from "react-bootstrap";
import Multistep from "react-multistep";
import LocalContextProvider from "./Contexts/provider";
import StepEight from "./components/StepEight";
import StepEleven from "./components/StepEleven";
import StepFive from "./components/StepFive";
import StepFour from "./components/StepFour";
import StepNine from "./components/StepNine";
import StepOne from "./components/StepOne";
import StepSeven from "./components/StepSeven";
import StepSix from "./components/StepSix";
import StepTen from "./components/StepTen";
import StepThirteen from "./components/StepThirteen";
import StepThree from "./components/StepThree";
import StepTwelve from "./components/StepTwelve";
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
    { name: "StepEleven", component: <StepEleven /> },
    { name: "StepTwelve", component: <StepTwelve /> },
    { name: "StepThirteen", component: <StepThirteen /> },
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
    <LocalContextProvider>
      <Container className="pt-4 pb-4">
        <Multistep
          activeStep={0}
          showNavigation={true}
          steps={steps}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
        />
      </Container>
    </LocalContextProvider>
  );
}

export default App;
