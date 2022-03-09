import { createContext, useReducer } from "react";

export const LocalContext = createContext();

const localStorageData = JSON.parse(
  localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
);

const initialData = {
  // StepOne
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

  //StepEight
  agricultureDepartment: {
    totalMinikits: "",
    fasalInsuranceAdvantage: false,
    dripEquipmentGrant: false,
    krishakSathiYojana: false,
    subsidyOnAgricultureMachinery: false,
    plantProtectionGrant: false,
    krishiVigyanScholarship: false,
    pmSammanNidhiYojana: false,
    specialDetails: "",
  },

  // StepNine
  animalHusbandryDepartment: {
    totalAnimals: "",
    MilchAnimals: "",
    NonMilchAnimals: "",
    artificalInseminationAnimals: "",
    underVaccinationPlanAnimals: "",
    specialDetails: "",
  },

  // StepTen
  educationDepartment: {
    inPrimary: "",
    inHigherPrimary: "",
    inSecondary: "",
    inHigherSecondary: "",
    inPMTOrIIT: "",
    inGraduation: "",
    scholar: "",
    inGovtJob: [],
    inOtherYojana: "",
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
    case "handleStepEight":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, agricultureDepartment: action.payload })
      );
      return {
        ...state,
        agricultureDepartment: action.payload,
      };
    case "handleStepNine":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, animalHusbandryDepartment: action.payload })
      );
      return {
        ...state,
        animalHusbandryDepartment: action.payload,
      };
    case "handleStepTen":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, educationDepartment: action.payload })
      );
      return {
        ...state,
        educationDepartment: action.payload,
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
