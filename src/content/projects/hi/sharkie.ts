import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";
import sharkie3 from "../../../assets/images/projects/sharkie/sharkie-3.webp";
import sharkie4 from "../../../assets/images/projects/sharkie/sharkie-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Sharkie",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://sharkie.david-hckh.com/",
  source: "https://github.com/davidhckh/sharkie-game",
  description:
    "शार्की (Sharkie) एक 2D अंडरवाटर एडवेंचर गेम है, जिसे वैनिला जावास्क्रिप्ट और HTML5 कैनवस का उपयोग करके विकसित किया गया है।<br/><br/>प्रोजेक्ट ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग सिद्धांतों पर आधारित है और इसमें पात्रों, दुश्मनों और गेम सिस्टम के लिए कस्टम कक्षाओं का उपयोग किया गया है, जो सहज एनिमेशन, कॉम्बैट सिस्टम और बहु-स्तरीय लंबन (parallax) पृष्ठभूमि के साथ पूरा होता है।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "गेमप्ले",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "चरित्र और मानचित्र डिज़ाइन",
        caption: "चरित्र और मानचित्र डिज़ाइन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "बॉस की लड़ाई",
        caption: "बॉस की लड़ाई",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "मिशन",
        caption: "मिशन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie3,
        alt: "जीत की स्क्रीन",
        caption: "जीत की स्क्रीन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie4,
        alt: "मृत्यु स्क्रीन",
        caption: "मृत्यु स्क्रीन",
      },
    },
  ],
} as const satisfies ProjectContent;
