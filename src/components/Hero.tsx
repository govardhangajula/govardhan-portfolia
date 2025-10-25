import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground">
          Hi, I'm <span className="text-primary">Gajula Govardhan</span>
        </h1>
        
        <div className="h-20 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              "Java Full Stack Developer",
              2000,
              "Building scalable and elegant web apps",
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-2xl text-muted-foreground"
            repeat={Infinity}
          />
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          B.Tech CSE Student at Mohan Babu University | Passionate about creating 
          innovative solutions with modern technologies
        </p>

        <div className="flex gap-4 justify-center items-center flex-wrap pt-4">
          <Button size="lg" asChild className="gap-2">
            <a href="/Govardhan_Gajula_Resume.pdf" download>
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/govardhangajula" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/gajula-govardhan-603100253/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:gajulagovardhan06@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
