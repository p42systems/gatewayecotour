import { useAtomValue } from "jotai";
import Header from "../General/Header";
import Footer from "../General/Footer";

import { MainContainer, SelectionsContainer } from "../styled_components";
import SelectCard from "./SelectCard";
import { markersQueryAtom } from "../../atoms";

function Select() {
  const { markers } = useAtomValue(markersQueryAtom);
  const entrances = [];
  entrances.push(markers["5"], markers["25"], markers["40"]);

  return (
    <>
      <Header />
      <MainContainer>
        <h2>Select your entrance</h2>
        <SelectionsContainer>
          {entrances.map((marker) => (
            <SelectCard key={marker.id} marker={marker} />
            ))}
        </SelectionsContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Select;
