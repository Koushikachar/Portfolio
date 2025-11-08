import React, { useState } from "react";
import cn from "../lib/utils";

const Skills = [
  { name: "html/css", level: 95, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwindcss", level: 90, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },

  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "Prisma", level: 75, category: "backend" },

  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Vs Code", level: 95, category: "tools" },
];

const SkillsSection = () => {
  const [active, setActive] = useState("all");
  const filtersSkills = Skills.filter(
    (skill) => active === "all" || skill.category === active
  );

  const categories = ["all", "frontend", "backend", "tools"];
  return (
    <section id="skills" className="py-24 px-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActive(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                active === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary-/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtersSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
