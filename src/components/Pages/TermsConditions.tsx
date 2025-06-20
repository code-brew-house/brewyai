import { Typography } from "@mui/material";
import { Section } from "../Section";
import { ContactUsBanner } from "../CTA /ContactUsBanner";

export const TermsConditions = () => {
  return (
    <Section
      title="Terms and Conditions"
      description="Last Updated 18 June 2025"
      withoutTopMargin
    >
      <Typography sx={{}}>
        These Terms and Conditions constitute a legally binding agreement made
        between you, whether personally or on behalf of an entity (“you”) and
        <strong>CodeBrewHouse</strong> (“we,” “us” or “our”), concerning your
        access to and use of the <strong>brewy.ai</strong> website as well as
        any other media form, media channel, mobile website or mobile
        application related, linked, or otherwise connected thereto
        (collectively, the “Site”).
      </Typography>

      <Typography sx={{ fontWeight: "bold", marginTop: "2rem" }}>
        Agreement To Terms
      </Typography>

      <Typography sx={{}}>
        You agree that by accessing the Site, you have read, understood, and
        agree to be bound by all of these Terms and Conditions. If you do not
        agree with all of these Terms and Conditions, then you are expressly
        prohibited from using the Site and you must discontinue use immediately.
      </Typography>

      <Typography sx={{}}>
        Supplemental terms and conditions or documents that may be posted on the
        Site from time to time are hereby expressly incorporated herein by
        reference. We reserve the right, in our sole discretion, to make changes
        or modifications to these Terms and Conditions at any time and for any
        reason.
      </Typography>

      <Typography sx={{}}>
        We will alert you about any changes by updating the “Last updated” date
        of these Terms and Conditions, and you waive any right to receive
        specific notice of each such change.
      </Typography>

      <Typography sx={{}}>
        It is your responsibility to periodically review these Terms and
        Conditions to stay informed of updates. You will be subject to, and will
        be deemed to have been made aware of and to have accepted, the changes
        in any revised Terms and Conditions by your continued use of the Site
        after the date such revised Terms and Conditions are posted.
      </Typography>

      <Typography sx={{}}>
        The information provided on the Site is not intended for distribution to
        or use by any person or entity in any jurisdiction or country where such
        distribution or use would be contrary to law or regulation or which
        would subject us to any registration requirement within such
        jurisdiction or country.
      </Typography>

      <Typography sx={{}}>
        Accordingly, those persons who choose to access the Site from other
        locations do so on their own initiative and are solely responsible for
        compliance with local laws, if and to the extent local laws are
        applicable.
      </Typography>

      <Typography sx={{ fontWeight: "bold", marginTop: "2rem" }}>
        Intellectual Property Rights
      </Typography>

      <Typography sx={{}}>
        Unless otherwise indicated, the Site is our property and all source
        code, database, database rights, website design, audio, video, text,
        photographs, and graphics on the Site (collectively, the “Content”) and
        all intellectual property rights therein are and will remain our
        property.
      </Typography>

      <Typography sx={{}}>
        The Content and the Marks are provided on the Site “AS IS” for your
        information and personal use only. Except as expressly provided in these
        Terms and Conditions, no part of the Site and no Content or Marks may be
        copied, reproduced, aggregated, republished, uploaded, posted, publicly
        displayed, encoded, translated, transmitted, distributed, sold,
        licensed, or otherwise exploited for any commercial purpose whatsoever,
        without our express prior written permission.
      </Typography>

      <Typography sx={{}}>
        Provided that you are eligible to use the Site, you are granted a
        limited license to access and use the Site and to download or print a
        copy of any portion of the Content to which you have properly gained
        access solely for your personal, non-commercial use. We reserve all
        rights not expressly granted to you in and to the Site, the Content and
        the Marks.
      </Typography>

      <Typography sx={{ fontWeight: "bold", marginTop: "2rem" }}>
        Copyright Infringements
      </Typography>

      <Typography sx={{}}>
        We respect the intellectual property rights of others. If you believe
        that any material available on or through the Site infringes upon any
        copyright you own or control, please immediately notify us using the
        contact information provided below (a “Notification”). A copy of your
        Notification will be sent to the person who posted or stored the
        material addressed in the Notification.
      </Typography>

      <Typography sx={{}}>
        Please be advised that pursuant to federal law you may be held liable
        for damages if you make material misrepresentations in a Notification.
        Thus, if you are not sure that material located on or linked to by the
        Site infringes your copyright, you should consider first contacting an
        attorney.
      </Typography>

      <Typography sx={{ fontWeight: "bold", marginTop: "2rem" }}>
        In order to resolve a complaint regarding the Site or to receive further
        information regarding use of the Site, please contact us at:
      </Typography>

      <Typography sx={{}}>brewyai@codebrewhouse.com</Typography>

      <ContactUsBanner />
    </Section>
  );
};
