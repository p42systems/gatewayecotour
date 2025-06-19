import { useLocation } from "wouter";
import {
  NavigationSelectButton,
  NavigationButtonsContainer,
  NavigationContentButton,
} from "../../../styled_components";

// import MultipleTours from "./components/MultipleTours";
// import SingleTour from "./components/SingleTour";

function NavigationButtons() {
  const [, setLocation] = useLocation();

  return (
    <NavigationButtonsContainer>
      <NavigationContentButton
        title="Content"
        aria-label="Content"
        onClick={() => {
          setLocation("/list");
        }}
      >
        Content
      </NavigationContentButton>
      <NavigationSelectButton
        title="Select"
        aria-label="Select"
        onClick={() => {
          setLocation("/select");
        }}
      >
        Select Your Tour
      </NavigationSelectButton>
      {/* <SingleTour /> */}
    </NavigationButtonsContainer>
  );
}

export default NavigationButtons;
