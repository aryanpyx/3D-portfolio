import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn छोटे समूहों को साझा स्ट्रीक्स और दैनिक आदतों पर सरल चेक-इन के माध्यम से ट्रैक पर बने रहने में मदद करता है।<br/><br/>ऐप को कम इंटरैक्शन बाधाओं, मोबाइल उपयोग और हल्के सामाजिक सुविधाओं पर ध्यान केंद्रित करके विकसित किया गया था – Next.js, Node.js, PostgreSQL और Redis के साथ।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "एकल और समूह स्ट्रीक्स",
        caption: "एकल और समूह स्ट्रीक्स",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "स्ट्रीक प्रगति",
        caption: "स्ट्रीक प्रगति",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "दोस्तों को प्रोत्साहित करें",
        caption: "दोस्तों को प्रोत्साहित करें",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "निमंत्रण प्रवाह",
        caption: "निमंत्रण प्रवाह",
      },
    },
  ],
} as const satisfies ProjectContent;
