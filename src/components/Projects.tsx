import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Hackathon Platform",
    description: "A comprehensive platform for organizing and participating in hackathons with real-time updates, team management, and project submissions.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    link: "#"
  },
  {
    title: "Banking System",
    description: "Full-stack banking application with secure authentication, transaction management, and account operations using Java technologies.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    link: "#"
  },
  {
    title: "Infosys Prep Dashboard",
    description: "Interactive learning dashboard for Infosys certification preparation with progress tracking, quizzes, and study materials.",
    tech: ["React", "Firebase", "Tailwind CSS", "Authentication"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in full-stack development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <a 
                    href={project.link}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </a>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
