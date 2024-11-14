import { useState } from "react";
import { India } from "../../Assets/Images/India";
import { USA } from "../../Assets/Images/USA";
import { France } from "../../Assets/Images/France";
import { Canada } from "../../Assets/Images/Canada";
const useSignUpScreenVM = ({ navigation }: SignUpScreenProps) => {
  const [activeProfile, setActiveProfile] = useState("User");
  const professionData: string[] = [
    "Doctor",
    "Engineer",
    "Worker",
    "Sportsman",
  ];
  const countryData: String[] = ["Spain", "India", "China", "Russia"];

  const specialityData: string[] = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
  ];
  const flagData = [
    {
      name: "IN",
      code: "+91",
      flagAssetPath: India,
    },
    {
      name: "US",
      code: "+732",
      flagAssetPath: USA,
    },
    {
      name: "FR",
      code: "+33",
      flagAssetPath: France,
    },
    {
      name: "CN",
      code: "+1",
      flagAssetPath: Canada,
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState(flagData[3]);
  const userInputFields = [
    "First Name",
    "Middle Name",
    "Last Name",
    "Email ID",
  ];
  const practiceInputFields = [
    "Practice Name",
    "Business Address",
    "Country",
    "City",
    "Province",
    "Postal Code",
  ];
  const updateActiveProfile = (profileName: string) => {
    try {
      setActiveProfile(profileName);
    } catch (e) {
      console.log("Error", e);
    }
  };
  const navigateToSuccessScreen = (): void => {
    try {
      navigation.navigate("SuccessScreen");
    } catch (e) {
      console.log(e);
    }
  };
  const navigateToSignInScreen = () => {
    try {
      navigation.navigate("SignInScreen");
    } catch (e) {
      console.log("Error", e);
    }
  };

  return {
    activeProfile,
    updateActiveProfile,
    navigateToSignInScreen,
    navigateToSuccessScreen,
    professionData,
    countryData,
    specialityData,
    flagData,
    selectedCountry,
    practiceInputFields,
    userInputFields,
  };
};

export default useSignUpScreenVM;
