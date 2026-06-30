import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebGL Particles",
  theme: "dark",
  tags: ["ogl", "javascript", "glsl"],
  live: "https://particles.david-hckh.com/",
  videoBorder: false,
  description:
    "OGL.js के साथ एक प्रायोगिक WebGL प्रोजेक्ट जो गणितीय सूत्रों और शोर कार्यों का उपयोग करके कणों को एनिमेट करता है।<br/><br/>कण एक-दूसरे में विलीन होने वाले विभिन्न 3D आकारों के बीच सुचारू रूप से चलते हैं।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoParticles,
        caption: "एनिमेटेड कण प्रणाली",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "नोड आकार",
        caption: "नोड आकार",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "डोनट आकार",
        caption: "डोनट आकार",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles2,
        alt: "गोलाकार आकार",
        caption: "गोलाकार आकार",
      },
    },
  ],
} as const satisfies ProjectContent;
