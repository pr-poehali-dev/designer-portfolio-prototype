import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Все проекты", icon: "Grid3X3" },
    { id: "web", label: "Веб-дизайн", icon: "Monitor" },
    { id: "graphic", label: "Графический", icon: "Palette" },
    { id: "motion", label: "Моушн", icon: "Play" },
    { id: "product", label: "Продукты", icon: "Package" },
    { id: "interior", label: "Интерьеры", icon: "Home" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce платформа",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "Современный интернет-магазин с уникальным UX",
      tags: ["React", "UI/UX", "E-commerce"],
    },
    {
      id: 2,
      title: "Брендинг технологической компании",
      category: "graphic",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      description: "Полный ребрендинг IT-стартапа",
      tags: ["Логотип", "Фирменный стиль", "Брендбук"],
    },
    {
      id: 3,
      title: "Анимированный промо-ролик",
      category: "motion",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      description: "2D анимация для продуктовой линейки",
      tags: ["After Effects", "2D анимация", "Реклама"],
    },
    {
      id: 4,
      title: "Дизайн умных часов",
      category: "product",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop",
      description: "Концепт носимого устройства",
      tags: ["Продуктовый дизайн", "3D моделирование", "UX"],
    },
    {
      id: 5,
      title: "Современная квартира",
      category: "interior",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      description: "Минималистичный интерьер в скандинавском стиле",
      tags: ["Интерьер", "Минимализм", "3D визуализация"],
    },
    {
      id: 6,
      title: "Мобильное приложение для фитнеса",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      description: "Дизайн iOS/Android приложения",
      tags: ["Мобильный дизайн", "iOS", "Android"],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Портфолио</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Избранные проекты из разных областей дизайна
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-creative text-white"
                  : "hover:border-creative-purple hover:text-creative-purple"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon name={category.icon} className="mr-2" size={16} />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="creative-card overflow-hidden hover:scale-105 transition-all duration-500 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-creative opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ExternalLink" className="text-white" size={32} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-creative text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-creative hover:scale-105 transition-transform duration-300 text-white"
          >
            Посмотреть все проекты
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
