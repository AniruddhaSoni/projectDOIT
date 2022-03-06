import { createContext, useReducer } from "react";

export const LocalContext = createContext();

const initialState = {
  familyDetail: {
    districtName: "",
    blockName: "",
    gramPanchayat: "",
    villageName: "",
    familyNumber: "",
    hof: "",
    caste: "",
    totalMembers: "",
    childZeroToSix: "",
    childSixToEighteen: "",
    aboveEighteen: "",
    totalMarried: "",
    totalUnmarried: "",
    primaryEdu: "",
    secondaryEducation: "",
    higherEdcuation: "",
    bpl: false,
    foodSecurity: false,
    migration: false,
    migrationDetails: [""],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "handleStepOne":
      return {
        ...state,
        familyDetail: action.payload,
      };
    default:
      return state;
  }
};

export default function LocalContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LocalContext.Provider value={[state, dispatch]}>
      {props.children}
    </LocalContext.Provider>
  );
}
