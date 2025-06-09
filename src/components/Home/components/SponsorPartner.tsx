import { useAtomValue } from "jotai";
import {
  HomeSubHeader,
  SponsorPartnerContainer,
  SponsorPartnerImg,
} from "../../styled_components";
import { sponsorsCopyQueryAtom } from "../../../atoms";
import BodyParagraphs from "../../General/BodyParagraphs";

function SponsorPartner() {
  const { header, body, links } = useAtomValue(sponsorsCopyQueryAtom);

  return (
    <>
      <HomeSubHeader id="sponsor-partners">{header}</HomeSubHeader>
      <BodyParagraphs body={body} view={"home"} links={links} />
      <SponsorPartnerContainer>
        <a href="https://www.publicboard.ca/en/pass/index.aspx" target="_blank">
          <SponsorPartnerImg
            large={false}
            src="/main_logo.png"
            alt="Gateway Park Walking Eco-Tour logo"
          />
        </a>
        <a href="https://wwf.ca/take-action/apply-for-funding/go-wild-school-grants/" target="_blank">
          <SponsorPartnerImg
            large={false}
            src="/logos/wwf-go-wild-school-grants.png"
            alt="WWF Go Wild School Grants logo"
          />
        </a>
      </SponsorPartnerContainer>
    </>
  );
}

export default SponsorPartner;
