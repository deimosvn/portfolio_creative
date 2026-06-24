export const social = [
  { url: "mailto:diego.martinez.dev@gmail.com", name: "mail" },
  { url: "https://github.com/deimosvn", name: "github" },
  { url: "https://www.linkedin.com/in/diego-martinez-dev/", name: "linkedin" },
  { url: "https://x.com/DiegoMartinez_Dev", name: "x" },
  //{ url: "https://www.instagram.com/diego.martinez.dev/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
