const mongoose = require("mongoose");

const typeString = {
    type: String
}
const typeBoolean = {
    type: Boolean
}

const userSchema = new mongoose.Schema({

    //family Detail -- StepOne
    familyDetail: {
        districtName: typeString,
        blockName: typeString,
        gramPanchayat: typeString,
        villageName: typeString,
        familyString: typeString,
        hof: typeString,
        caste: typeString,
        totalMembers: typeString,
        childZeroToSix: typeString,
        childSixToEighteen: typeString,
        aboveEighteen: typeString,
        totalMarried: typeString,
        totalUnmarried: typeString,
        primaryEdu: typeString,
        secondaryEducation: typeString,
        higherEdcuation: typeString,
        bpl: typeBoolean,
        foodSecurity: typeBoolean,
        migration: typeBoolean,
        migrationDetails: [{
            memberName: typeString
        }]
    },

    // Medical Department -- StepSeven

    medicalDepartment: {
        totalInJananiSurkshaScheme: typeString,
        totalInFreeMedicine: typeString,
        totalinCmChiranjeeviScheme: typeString,
        totalOutCmChiranjeeviScheme: typeString,
        totalAffectedByTuberculosis: typeString,
        totalAffectedByRegularDotus: typeString,
        totalDrugAddicts: typeString,
        familyPlanning: typeString,
        specialDetails: typeString,
    },

    // Agriculture Department-- StepEight

    agricultureDepartment: {
        totalMinikits: typeString,
        fasalInsuranceAdvantage: typeBoolean,
        dripEquipmentGrant: typeBoolean,
        krishakSathiYojana: typeString,
        subsidyOnAgricultureMachinery: typeBoolean,
        plantProtectionGrant: typeBoolean,
        krishiVigyanScholarship: typeBoolean,
        pmSammanNidhiYojana: typeBoolean,
        specialDetails: typeString,
    },

    // Animal Husbandry Department -- StepNine

    animalHusbandryDepartment: {
        totalAnimals: typeString,
        MilchAnimals: typeString,
        NonMilchAnimals: typeString,
        artificalInseminationAnimals: typeString,
        underVaccinationPlanAnimals: typeString,
        specialDetails: typeString,
    },

    // Education Department -- StepTen

    educationDepartment: {
        inPrimary: typeString,
        inHigherPrimary: typeString,
        inSecondary: typeString,
        inHigherSecondary: typeString,
        inPMTOrIIT: typeString,
        inGraduation: typeString,
        scholar: typeString,
        inGovtJob: [{
            memberName: typeString,
            serviceName: typeString
        }],
        inOtherYojana: typeString,
    },

    // Revenue Department --StepEleven
    revenueDepartment: {
        totalLand: [{
            landDetails: typeString
        }],
        isIrrigatedLand: [{
            landDetails: typeString,
            isIrrigated: typeString
        }],
        irrigationSystem: [{
            equipment: typeString
        }],
        nominationLeft: [{
            nominationDetail: typeString
        }],
        isKhatedariLand: [{
            landDetails: typeString,
            isKhatedari: typeString
        }],
        landDispute: [{
            disputeDetail: typeString
        }],
        cmReliefFundPending: [{
            pendingDetails: typeString
        }],
        specialDetails: typeString,
    },

    // Banking Service -- StepTwelve
    bankingService: {
        familyAccount: typeBoolean,
        kccScheme: typeBoolean,
        mudraLoanScheme: typeBoolean,
        pmSurakshaInsuranceScheme: typeBoolean,
        pmJeevanJyotiInsuranceScheme: typeBoolean,
        atalPensionScheme: typeBoolean,
        specialDetails: typeString,
    },

    // Skill Developement -- StepThirteen
    skillDevelopment: {
        rscitMembers: [{
            memberName: typeString
        }],
        techMembers: [{
            memberName: typeString,
            memberDetails: typeString
        }],
        jobMembers: [{
            memberName: typeString,
            memberDetails: typeString
        }],
        selfEmployeed: typeBoolean,
        businessTrainingInterest: typeBoolean,
        traineeDetails: [{
            memberName: typeString,
            memberDetails: typeString
        }],
    }

})

const userModel = mongoose.model("user", userSchema)