import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-creative-purple/20 rounded-full blur-xl floating-element"></div>
      <div
        className="absolute bottom-40 right-20 w-40 h-40 bg-creative-magenta/20 rounded-full blur-xl floating-element"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-creative-orange/20 rounded-full blur-xl floating-element"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Алексей Дизайнер
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Мультидисциплинарный дизайнер, создающий впечатляющие решения от
            веб-интерфейсов до интерьерных пространств
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-creative hover:scale-105 transition-transform duration-300 text-white border-0 px-8 py-4 text-lg font-semibold"
            >
              Посмотреть проекты
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Связаться со мной
              <Icon name="MessageCircle" className="ml-2" size={20} />
            </Button>
          </div>
        </div>

        {/* Skills preview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto animate-slide-up">
          {[
            {
              icon: "Monitor",
              label: "Веб-дизайн",
              color: "text-creative-blue",
            },
            {
              icon: "Palette",
              label: "Графический",
              color: "text-creative-purple",
            },
            { icon: "Play", label: "Моушн", color: "text-creative-magenta" },
            {
              icon: "Package",
              label: "Продукты",
              color: "text-creative-orange",
            },
            { icon: "Home", label: "Интерьеры", color: "text-creative-green" },
          ].map((skill, index) => (
            <div
              key={skill.label}
              className="creative-card p-4 hover:scale-105 transition-all duration-300 hover:animate-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon
                name={skill.icon}
                className={`${skill.color} mb-2 mx-auto`}
                size={32}
              />
              <p className="text-white/90 text-sm font-medium">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
