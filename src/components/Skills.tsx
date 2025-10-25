import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "DSA", "System Design"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive set of technologies I work with to build modern web applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="space-y-4 p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary"
                    className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
