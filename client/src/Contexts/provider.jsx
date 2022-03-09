import { createContext, useReducer } from "react";

export const LocalContext = createContext();

const localStorageData = JSON.parse(
  localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
);

const initialData = {
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

const initialState = localStorageData ? localStorageData : initialData;

const reducer = (state, action) => {
  switch (action.type) {
    case "handleStepOne":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, familyDetail: action.payload })
      );
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
