import Icon from "@/components/ui/icon";

const Skills = () => {
  const skillCategories = [
    {
      title: "Дизайн инструменты",
      icon: "Palette",
      skills: [
        { name: "Figma", level: 95, color: "bg-bold-red" },
        {
          name: "Adobe Creative Suite",
          level: 90,
          color: "bg-bold-yellow",
        },
        { name: "Sketch", level: 85, color: "bg-bold-red-light" },
        { name: "Blender", level: 80, color: "bg-bold-yellow-dark" },
      ],
    },
    {
      title: "Разработка",
      icon: "Code",
      skills: [
        { name: "HTML/CSS", level: 90, color: "bg-bold-yellow" },
        { name: "JavaScript", level: 85, color: "bg-bold-red" },
        { name: "React", level: 80, color: "bg-bold-yellow-light" },
        { name: "Three.js", level: 75, color: "bg-bold-red-dark" },
      ],
    },
    {
      title: "Специализации",
      icon: "Target",
      skills: [
        { name: "UI/UX Дизайн", level: 95, color: "bg-bold-red" },
        { name: "Брендинг", level: 90, color: "bg-bold-yellow" },
        { name: "Моушн дизайн", level: 85, color: "bg-bold-red-light" },
        { name: "3D Моделирование", level: 80, color: "bg-bold-yellow-dark" },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Навыки</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Инструменты и технологии, которыми я владею
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="creative-card p-6 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-bold rounded-lg mr-4">
                  <Icon name={category.icon} className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "150+", label: "Проектов", icon: "Briefcase" },
            { number: "50+", label: "Клиентов", icon: "Users" },
            { number: "5", label: "Лет опыта", icon: "Calendar" },
            { number: "25", label: "Наград", icon: "Award" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="creative-card p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon
                name={stat.icon}
                className="text-bold-red mb-4 mx-auto"
                size={32}
              />
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
