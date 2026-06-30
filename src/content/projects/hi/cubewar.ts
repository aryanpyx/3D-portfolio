import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "CubeWar",
  theme: "dark",
  tags: ["three", "node", "websockets", "redis"],
  videoBorder: false,
  live: "https://cubewar.io",
  description:
    "CubeWar एक ब्राउज़र-आधारित मल्टीप्लेयर गेम है जहां खिलाड़ी तेज़, रणनीतिक लड़ाइयों में एक-दूसरे के खिलाफ प्रतिस्पर्धा करते हैं।<br/><br/>मैंने गेम इंजन, क्लाइंट टाइमलाइन सिस्टम, और Redis-आधारित मैचमेकिंग के साथ रीयल-टाइम नेटवर्किंग सहित संपूर्ण स्टैक स्वयं विकसित किया है।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubeWar,
        caption: "गेमप्ले",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "ट्यूटोरियल",
        caption: "ट्यूटोरियल",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "मानचित्र थीम्स",
        caption: "मानचित्र थीम्स",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "प्रमाणीकरण",
        caption: "प्रमाणीकरण",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar3,
        alt: "रिस्पॉन्सिव डिज़ाइन",
        caption: "रिस्पॉन्सिव डिज़ाइन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar4,
        alt: "कई गेम मोड",
        caption: "कई गेम मोड",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar5,
        alt: "पार्टी सिस्टम",
        caption: "पार्टी सिस्टम",
      },
    },
  ],
} as const satisfies ProjectContent;
