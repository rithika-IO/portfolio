import {
  ABOUT,
  ACHIEVEMENTS,
  EDUCATION,
  PROJECTS,
  SKILLS,
  SOCIALS,
} from "@/content/portfolio";

export const dynamic = "force-static";

export function GET() {
  const projectsSection = [
    "## Projects",
    ...PROJECTS.map((p) =>
      p.github
        ? `- [${p.title}](${p.github}): ${p.desc}`
        : `- ${p.title}: ${p.desc}`,
    ),
  ].join("\n");

  const skillsSection = [
    "## Skills",
    ...SKILLS.map((s) => `- ${s.title}: ${s.items.join(", ")}`),
  ].join("\n");

  const educationSection = [
    "## Education",
    ...EDUCATION.map((e) => `- ${e.title}, ${e.place} (${e.date})`),
  ].join("\n");

  const certificatesSection = [
    "## Certificates",
    ...ACHIEVEMENTS.map((a) => `- ${a.title}, ${a.place} (${a.status})`),
  ].join("\n");

  const linksSection = [
    "## Links",
    "- Website: https://rithikamandiv.me",
    ...SOCIALS.map(
      (s) => `- ${s.label}: ${s.href.replace(/^mailto:/, "")}`,
    ),
  ].join("\n");

  const body =
    [
      "# Rithika Mandiv",
      "> Reliable by design. Rithika Mandiv is a Software Engineering undergraduate at Informatics Institute of Technology (University of Westminster), based in Colombo, Sri Lanka. He focuses on backend development and reliable systems. His work covers full-stack web applications, enterprise applications, and machine learning.",
      ...ABOUT.paragraphs,
      projectsSection,
      skillsSection,
      educationSection,
      certificatesSection,
      linksSection,
    ].join("\n\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

