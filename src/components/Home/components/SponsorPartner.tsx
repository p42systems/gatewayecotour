import { useAtomValue } from "jotai";
import {
  HomeSubHeader,
  SponsorPartnerContainer,
  SponsorPartnerImg,
  SponsorLink,
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
        <SponsorLink
          href="https://www.publicboard.ca/en/pass/index.aspx"
          target="_blank"
        >
          <SponsorPartnerImg
            wide={false}
            src="/main_logo.png"
            alt="Gateway Park Walking Eco-Tour logo"
          />
        </SponsorLink>
        <SponsorLink
          href="https://wwf.ca/take-action/apply-for-funding/go-wild-school-grants/"
          target="_blank"
        >
          <SponsorPartnerImg
            wide={false}
            src="/logos/wwf-go-wild-school-grants.png"
            alt="WWF Go Wild School Grants logo"
          />
        </SponsorLink>
        <SponsorLink href="https://www.citywindsor.ca/" target="_blank">
          <SponsorPartnerImg
            wide={true}
            src="/logos/windsor_logo.png"
            alt="City of Windsor logo"
          />
        </SponsorLink>
      </SponsorPartnerContainer>
    </>
  );
}

export default SponsorPartner;
