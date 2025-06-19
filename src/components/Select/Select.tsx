import { useAtomValue } from "jotai";
import Header from "../General/Header";
import Footer from "../General/Footer";

import { MainContainer, SelectionsContainer } from "../styled_components";
import SelectCard from "./SelectCard";
import { allMarkersQueryAtom } from "../../atoms";

function Select() {
  const { markers } = useAtomValue(allMarkersQueryAtom);

  console.log(markers);

  const entrances = [];
  const riverside = { ...markers["5"], start: "riverside" };
  const mason = { ...markers["25"], start: "mason" };
  const university = { ...markers["40"], start: "university" };

  entrances.push(riverside, mason, university);

  return (
    <>
      <Header />
      <MainContainer>
        <h2>Select your entrance</h2>
        <SelectionsContainer>
          {entrances.map((marker) => (
            <SelectCard
              key={marker.id}
              marker={marker}
              sequence={marker.start}
            />
          ))}
        </SelectionsContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Select;
