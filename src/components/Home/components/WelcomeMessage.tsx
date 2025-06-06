import { useAtomValue } from "jotai";
import { welcomeMessageCopyQueryAtom } from "../../../atoms";
import { HomeSubHeader } from "../../styled_components";
import BodyParagraphs from "../../General/BodyParagraphs";

function WelcomeMessage() {
  const { header, body, links } = useAtomValue(welcomeMessageCopyQueryAtom);

  return (
    <>
      <HomeSubHeader id="welcome-message">{header}</HomeSubHeader>
      <BodyParagraphs body={body} view={"home"} links={links} />
    </>
  );
}

export default WelcomeMessage;
