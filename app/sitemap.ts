import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rithikamandiv.me",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

