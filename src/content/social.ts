export const social = [
  { url: "mailto:aryanpandey52355@gmail.com", name: "mail" },
  { url: "https://github.com/aryanpyx", name: "github" },
  { url: "https://www.linkedin.com/in/aryan-pandey-pyx/", name: "linkedin" },
  //{ url: "https://x.com/DavidHckh", name: "x" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
