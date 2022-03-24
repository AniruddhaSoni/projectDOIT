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
    migrationDetails: [],
  },

  //StepThree
  developmentDepartment: {
    manaregaJobsinDays: "",
    isProfitTakerOfPradhanmantriAavasYojna: false,
    hasJobCard: false,
    hasRashanCard: false,
    isProfitTakerOfotherAgricultureYojna: false,
  },

  //stepFour
  rasadDepartment: {
    isSelectedUnderNationalFoodSecrity: false,
    reasonNotSelectedUnderNationalFoodSecrity: "",
    isGettingRegularFood: false,
    reasonNotGettingRegularFood: "",
    isGettingTADSahariyaKit: false,
  },
  //stepFive
  LadiesAndChildrenDepartment: {
    noOfChildrenBelowSix: "",
    childrenInAnganbadi: "",
    noOfUnderNourished: "",
    NameOfUnderNourishedChildren: "",
    MTCAdmittedUnderNourishedChildren: "",
    reasonNotAdmittedinMTC: "",
    noOfChildrenGettingNourishFood: "",
    noOfLadies: "",
    noOfLadiesGettingFoodFromIndraGandhiYojna: "",
    areLadiesUsingSanatary: false,
  },

  //StepEight
  agricultureDepartment: {
    totalMinikits: "",
    fasalInsuranceAdvantage: false,
    dripEquipmentGrant: false,
    krishakSathiYojana: "",
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

  // StepEleven
  revenueDepartment: {
    totalLand: [],
    isIrrigatedLand: [],
    irrigationSystem: [],
    nominationLeft: [],
    isKhatedariLand: [],
    landDispute: [],
    cmReliefFundPending: [],
    specialDetails: "",
  },

  // StepTwelve
  bankingService: {
    familyAccount: false,
    kccScheme: false,
    mudraLoanScheme: false,
    pmSurakshaInsuranceScheme: false,
    pmJeevanJyotiInsuranceScheme: false,
    atalPensionScheme: false,
    specialDetails: "",
  },

  // StepThirteen
  skillDevelopment: {
    rscitMembers: [],
    techMembers: [],
    jobMembers: [],
    selfEmployeed: false,
    businessTrainingInterest: false,
    traineeDetails: [],
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
    case "handleStepThree":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, developmentDepartment: action.payload })
      );
      return {
        ...state,
        developmentDepartment: action.payload,
      };
    case "handleStepFour":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, rasadDepartment: action.payload })
      );
      return {
        ...state,
        rasadDepartment: action.payload,
      };
    case "handleStepFive":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({
          ...state,
          LadiesAndChildrenDepartment: action.payload,
        })
      );
      return {
        ...state,
        LadiesAndChildrenDepartment: action.payload,
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
    case "handleStepEleven":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, revenueDepartment: action.payload })
      );
      return {
        ...state,
        revenueDepartment: action.payload,
      };

    case "handleStepTwelve":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, bankingService: action.payload })
      );
      return {
        ...state,
        bankingService: action.payload,
      };

    case "handleStepThirteen":
      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...state, skillDevelopment: action.payload })
      );
      return {
        ...state,
        skillDevelopment: action.payload,
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
