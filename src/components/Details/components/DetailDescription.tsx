import { useAtomValue } from "jotai";
import { detailsQueryAtom } from "../../../atoms";
import { DetailsContentContainer } from "../../styled_components";

function DetailDescription() {
  const detail = useAtomValue(detailsQueryAtom);
  return (
    <DetailsContentContainer>
      {typeof detail.description === "string" ? (
        <p>{detail.description}</p>
      ) : (
        detail.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))
      )}
    </DetailsContentContainer>
  );
}

export default DetailDescription;
