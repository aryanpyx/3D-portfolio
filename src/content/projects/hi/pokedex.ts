import videoPokedex from "../../../assets/videos/pokedex.mp4";

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Pokédex",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://pokedex.david-hckh.com/",
  source: "https://github.com/davidhckh/pokedex",
  videoBorder: true,
  description:
    "वेब डेवलपमेंट की मुख्य अवधारणाओं का अभ्यास करने के लिए मेरी पहली वेब परियोजनाओं में से एक। पोकेडेक्स ओपन-सोर्स है ताकि अन्य डेवलपर्स उसी तरह सीख सकें जैसे मैंने किया था।<br/><br/>यह अतिरिक्त अनुभव प्राप्त करने के लिए एक सार्वजनिक API के साथ भी इंटरैक्ट करता है।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "पोकेडेक्स एप्लिकेशन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "डिफ़ॉल्ट दृश्य",
        caption: "डिफ़ॉल्ट दृश्य",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "खोज सुविधा",
        caption: "खोज सुविधा",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "रिस्पॉन्सिव डिज़ाइन",
        caption: "रिस्पॉन्सिव डिज़ाइन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "लेज़ी-लोडिंग",
        caption: "लेज़ी-लोडिंग",
      },
    },
  ],
} as const satisfies ProjectContent;
