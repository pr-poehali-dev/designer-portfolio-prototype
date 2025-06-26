import Hero from "@/components/Hero";
import ProjectsGallery from "@/components/ProjectsGallery";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsGallery />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
