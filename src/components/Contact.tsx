import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Mail",
      label: "Email",
      value: "hello@designer.ru",
      href: "mailto:hello@designer.ru",
    },
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (999) 123-45-67",
      href: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      label: "Местоположение",
      value: "Москва, Россия",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: "Instagram", href: "#", color: "hover:text-bold-red" },
    { icon: "Twitter", href: "#", color: "hover:text-bold-yellow" },
    { icon: "Linkedin", href: "#", color: "hover:text-bold-red" },
    { icon: "Github", href: "#", color: "hover:text-bold-black" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Готов обсудить ваш проект и воплотить идеи в жизнь
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="creative-card p-8 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Напишите мне
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Имя
                  </label>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-white/10 border-bold-yellow/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/10 border-bold-yellow/30 text-white placeholder:text-white/60"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Тема
                </label>
                <Input
                  placeholder="Тема сообщения"
                  className="bg-white/10 border-bold-yellow/30 text-white placeholder:text-white/60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Сообщение
                </label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  className="bg-white/10 border-bold-yellow/30 text-white placeholder:text-white/60"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-bold hover:scale-105 transition-transform duration-300 text-white"
              >
                Отправить сообщение
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div
            className="space-y-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="creative-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Контактная информация
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="p-3 bg-gradient-bold rounded-lg mr-4 group-hover:animate-glow">
                      <Icon
                        name={contact.icon}
                        className="text-white"
                        size={20}
                      />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">
                        {contact.label}
                      </div>
                      <div className="text-white font-medium">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="creative-card p-8">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Социальные сети
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className={`p-3 bg-white/10 rounded-full hover:bg-bold-yellow/20 transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <Icon name={social.icon} className="text-white" size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="creative-card p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Время работы
              </h3>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Пн - Пт</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Выходные</span>
                  <span>По договоренности</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
