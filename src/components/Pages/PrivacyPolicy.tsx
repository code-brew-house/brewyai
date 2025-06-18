import { Box, Typography } from "@mui/material";
import { Section } from "../Section";
import { ContactUsBanner } from "../CTA /ContactUsBanner";

const data = [
  {
    title: "What personal information do we process?",
    content:
      "We collect personal information that you voluntarily provide to us when you signup and upload audio, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us",
  },
  {
    title: "Do we process any sensitive personal information?",
    content:
      "We only process the information you provide to us - login details, any and all audio recordings you share",
  },
  {
    title: "Do you receive any information from third parties?",
    content:
      "We do not receive any information from third parties. We do not share your personal information with third parties.",
  },
  {
    title: "How do we process your information?",
    content:
      "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.",
  },
  {
    title:
      "In what situations and with which types of parties do we share personal information?",
    content:
      "We do not share any content with third parties, under any circumstances.",
  },
  {
    title: "How do we keep your information safe?",
    content:
      "We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.",
  },
  {
    title: "How long do we keep your information?",
    content:
      "We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.",
  },
  {
    title: "Do we use cookies and other tracking technologies?",
    content:
      "We may use cookies and other tracking technologies to collect and store your information.",
  },
  {
    title: "What is our stance on third-party websites?",
    content:
      "We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.",
  },
  {
    title: "Do we make updates to this notice?",
    content:
      "We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.",
  },
  {
    title: "How can you contact us about this notice?",
    content: "Contact us at brewyai@codebrewhouse.com",
  },
  {
    title: "How can you review, update or delete the data we collect from you?",
    content:
      "Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. Contact us for more details.",
  },
];

const PrivacyPolicyContent = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 10, marginTop: "5rem" }}>
        <Box
          id="privacy-table-of-contents"
          sx={{ width: "30%", marginTop: "1rem" }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Table of Contents</Typography>
          {data.map((item, index) => (
            <a href={`#${item.title}`} key={item.title}>
              <Typography variant="body1">
                {index + 1}. {item.title}
              </Typography>
            </a>
          ))}
        </Box>
        <Box id="privacy-data" sx={{ marginTop: "1.5rem", width: "70%" }}>
          {data.map((item, index) => (
            <Box key={item.title} sx={{ marginBottom: "2rem" }}>
              <Typography id={item.title} sx={{ fontWeight: "bold" }}>
                {index + 1}. {item.title}
              </Typography>
              <Typography>{item.content}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export const PrivacyPolicy = () => {
  return (
    <Section
      title="Privacy Policy"
      description="Last Updated 18 June 2025"
      withoutTopMargin
    >
      <Typography variant="body1">
        This privacy notice for <strong>CodeBrewHouse</strong> (doing business
        as <strong>brewy.ai</strong>) (“Company,” “we,” “us,” or “our“),
        describes how and why we might collect, store, use, and/or share
        (“process“) your information when you - use our services (“Services“) or
        Engage with us in other related ways ― including any sales, marketing,
        or events
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "2rem", fontWeight: "bold" }}
      >
        Questions or concerns?
      </Typography>
      <Typography variant="body1">
        Reading this privacy notice will help you understand your privacy rights
        and choices. <br /> If you do not agree with our policies and practices,
        please do not use our Services.
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "2rem" }}>
        If you still have any questions or concerns, please contact us at
        brewyai@codebrewhouse.com
      </Typography>

      <ContactUsBanner />

      <Typography
        variant="h3"
        sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: 20 }}
      >
        Summary of Key Points
      </Typography>

      <Typography variant="body1" sx={{ marginTop: "5px" }}>
        This summary provides key points from our privacy notice, but you can
        find out more details about any of these topics by using our table of
        contents below to find the section you are looking for.
      </Typography>

      {/* 1. What personal information do we process? */}
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: 18 }}
      >
        What personal information do we process?
      </Typography>
      <Typography variant="body1">
        When you visit, use, or navigate our Services, we may process personal
        information depending on how you interact with <strong>brewy.ai</strong>{" "}
        and the Services, the choices you make, and the products and features
        you use.
      </Typography>

      {/* 2.Do we process any sensitive personal information? */}
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: 18 }}
      >
        Do we process any sensitive personal information?
      </Typography>
      <Typography variant="body1">
        We do not process sensitive personal information.
      </Typography>

      {/* 3. Do you receive any information from third parties? */}
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: 18 }}
      >
        Do you receive any information from third parties?
      </Typography>
      <Typography variant="body1">
        We may receive information from public databases, marketing partners,
        social media platforms, and other outside sources.
      </Typography>

      {/* 4. How do we process your information? */}
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: 18 }}
      >
        How do we process your information?
      </Typography>
      <Typography variant="body1">
        We process your information to provide, improve, and administer our
        Services, communicate with you, for security and fraud prevention, and
        to comply with law. We may also process your information for other
        purposes with your consent. We process your information only when we
        have a valid legal reason to do so.
      </Typography>

      {/* 5. In what situations and with which types of parties do we share personal information? */}
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: 18 }}
      >
        In what situations and with which types of parties do we share personal
        information?
      </Typography>
      <Typography variant="body1">
        We do not share your personal information with third parties.
      </Typography>

      {/* 6. How do we keep your information safe? */}
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: 18 }}
      >
        How do we keep your information safe?
      </Typography>
      <Typography variant="body1">
        We have organizational and technical processes and procedures in place
        to protect your personal information. However, no electronic
        transmission over the internet or information storage technology can be
        guaranteed to be 100% secure, so we cannot promise or guarantee that
        hackers, cybercriminals, or other unauthorized third parties will not be
        able to defeat our security and improperly collect, access, steal, or
        modify your information.
      </Typography>

      {/* 7. What are your rights? */}
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: 18 }}
      >
        What are your rights?
      </Typography>
      <Typography variant="body1">
        Depending on where you are located geographically, the applicable
        privacy law may mean you have certain rights regarding your personal
        information.
      </Typography>

      {/* 8. How do you exercise your rights? */}
      <Typography
        variant="h4"
        sx={{ marginTop: "2rem", fontWeight: "bold", fontSize: 18 }}
      >
        How do you exercise your rights?
      </Typography>
      <Typography variant="body1">
        Contact us to know more about how to exercise your rights.
      </Typography>

      <PrivacyPolicyContent />
    </Section>
  );
};
