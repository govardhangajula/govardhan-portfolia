import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently pursuing my <span className="text-primary font-semibold">B.Tech in Computer Science</span> 
              {" "}(3rd year) at <span className="font-semibold">Mohan Babu University</span>, where I'm building 
              a strong foundation in software development and system design.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in <span className="text-primary font-semibold">Java Full Stack Development</span>, 
              and I love crafting scalable web applications that solve real-world problems. I'm constantly 
              learning new technologies and best practices to enhance my development skills.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects, 
              and staying updated with the latest trends in web development and system architecture.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Backend Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Building robust APIs with Java, Node.js, and Express
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Frontend Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Creating responsive UIs with React and modern CSS
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Database & System Design</h3>
                  <p className="text-muted-foreground text-sm">
                    Designing efficient schemas with MongoDB and SQL
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
