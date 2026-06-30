import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Quibbo",
  theme: "light",
  tags: ["three", "node", "kubernetes", "redis", "postgresql"],
  videoBorder: true,
  description:
    "Quibbo तेज़, टर्न-आधारित मल्टीप्लेयर गेम के लिए एक प्लेटफ़ॉर्म है। यह ELO-आधारित रैंकिंग प्रणाली के साथ मैचमेकिंग, अनुकूलन योग्य 3D अवतार और खाता एकीकरण को जोड़ता है।<br/><br/>प्रोजेक्ट एक तकनीकी प्रयोग के रूप में शुरू हुआ और नए गेम विचारों को आज़माने के लिए एक स्केलेबल सिस्टम के रूप में विकसित हुआ।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "यूज़र इंटरफ़ेस",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "अवतार निर्माता",
        caption: "अवतार निर्माता",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "मल्टीप्लेयर टिक-टैक-टो",
        caption: "मल्टीप्लेयर टिक-टैक-टो",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "विभिन्न मिनीगेम्स",
        caption: "विभिन्न मिनीगेम्स",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "अवतार विविधताएं",
        caption: "अवतार विविधताएं",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo4,
        alt: "रिस्पॉन्सिव डिज़ाइन",
        caption: "रिस्पॉन्सिव डिज़ाइन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo5,
        alt: "डार्क मोड",
        caption: "डार्क मोड",
      },
    },
  ],
} as const satisfies ProjectContent;
