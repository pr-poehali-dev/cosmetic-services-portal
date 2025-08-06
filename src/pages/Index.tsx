import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeService, setActiveService] = useState(0);
  const [activeCategory, setActiveCategory] = useState('injection');

  const services = [
    {
      title: "Инъекции ботулотоксина",
      description: "Коррекция мимических морщин в области лба, межбровья и вокруг глаз",
      price: "от 15 000 ₽",
      duration: "30-45 мин",
      icon: "Syringe",
      category: "injection"
    },
    {
      title: "Контурная пластика",
      description: "Увеличение объема губ и коррекция овала лица филлерами",
      price: "от 25 000 ₽", 
      duration: "45-60 мин",
      icon: "Heart",
      category: "injection"
    },
    {
      title: "Мезотерапия",
      description: "Питание и увлажнение кожи, улучшение тонуса и эластичности",
      price: "от 8 000 ₽",
      duration: "60 мин",
      icon: "Droplets",
      category: "injection"
    },
    {
      title: "Лазерная терапия",
      description: "Удаление пигментации, омоложение кожи, лечение акне",
      price: "от 12 000 ₽",
      duration: "45-60 мин",
      icon: "Zap",
      category: "apparatus"
    },
    {
      title: "RF-лифтинг",
      description: "Подтяжка кожи радиочастотами, коррекция овала лица",
      price: "от 18 000 ₽",
      duration: "60-90 мин",
      icon: "Radio",
      category: "apparatus"
    },
    {
      title: "Ультразвуковая терапия",
      description: "SMAS-лифтинг, глубокое омоложение без операций",
      price: "от 22 000 ₽",
      duration: "90 мин",
      icon: "Waves",
      category: "apparatus"
    },
    {
      title: "Комбинированная чистка",
      description: "Глубокое очищение пор, удаление черных точек и комедонов",
      price: "от 4 500 ₽",
      duration: "60-90 мин",
      icon: "Sparkles",
      category: "aesthetic"
    },
    {
      title: "Химический пилинг",
      description: "Обновление кожи кислотами, выравнивание тона и рельефа",
      price: "от 6 000 ₽",
      duration: "45 мин",
      icon: "Layers",
      category: "aesthetic"
    },
    {
      title: "Комплексный уход",
      description: "Увлажняющие и питательные процедуры для всех типов кожи",
      price: "от 3 500 ₽",
      duration: "60 мин",
      icon: "Leaf",
      category: "aesthetic"
    }
  ];

  const portfolio = [
    {
      title: "Коррекция носогубных складок",
      description: "Результат через 2 недели после процедуры",
      image: "img/5d6cc386-047c-4e78-b38d-bc9e0eba5175.jpg"
    },
    {
      title: "Увеличение губ",
      description: "Естественный объем, результат сразу после процедуры",
      image: "img/5d6cc386-047c-4e78-b38d-bc9e0eba5175.jpg"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      text: "Потрясающий результат! Доктор очень профессиональный, все объяснила, процедура прошла комфортно.",
      rating: 5,
      service: "Ботокс"
    },
    {
      name: "Мария С.",
      text: "Делала увеличение губ. Результат естественный, именно то, что хотела. Буду обращаться еще!",
      rating: 5,
      service: "Филлеры"
    },
    {
      name: "Елена В.", 
      text: "Мезотерапия дала отличный эффект. Кожа стала более упругой и сияющей. Рекомендую!",
      rating: 5,
      service: "Мезотерапия"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Cross" className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Dr. Beauty</h1>
                <p className="text-sm text-muted-foreground">Инъекционная косметология</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Calendar" className="mr-2" size={16} />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Полный спектр косметологических услуг
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Естественная 
                <span className="text-primary"> красота</span> без границ
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Инъекционная, аппаратная и эстетическая косметология. 
                Современное оборудование и индивидуальный подход к каждому пациенту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Play" className="mr-2" size={20} />
                  Посмотреть работы
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Лет опыта</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Безопасность</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-3xl transform rotate-3"></div>
              <img 
                src="img/f8b81692-6b35-4b75-b186-3469b59c3a3c.jpg" 
                alt="Врач косметолог" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Услуги
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Спектр услуг
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Комплексный подход: инъекционная, аппаратная и эстетическая косметология
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="flex bg-secondary/50 rounded-full p-1">
                <button
                  onClick={() => setActiveCategory('injection')}
                  className={`px-4 py-2 rounded-full transition-all text-sm ${
                    activeCategory === 'injection'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  Инъекционная
                </button>
                <button
                  onClick={() => setActiveCategory('apparatus')}
                  className={`px-4 py-2 rounded-full transition-all text-sm ${
                    activeCategory === 'apparatus'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  Аппаратная
                </button>
                <button
                  onClick={() => setActiveCategory('aesthetic')}
                  className={`px-4 py-2 rounded-full transition-all text-sm ${
                    activeCategory === 'aesthetic'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  Эстетическая
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.filter(service => service.category === activeCategory).map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
                onClick={() => setActiveService(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name={service.icon as any} size={24} />
                    </div>
                    <Badge variant="secondary">{service.duration}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Обо мне
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Доктор с медицинским образованием
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Имею высшее медицинское образование и более 5 лет опыта в области 
                инъекционной косметологии. Регулярно повышаю квалификацию на 
                международных курсах и семинарах.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="GraduationCap" className="text-primary" size={24} />
                  <span>Высшее медицинское образование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span>Сертификат косметолога-дерматолога</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span>Более 500 довольных пациентов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <span>100% безопасность процедур</span>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90" size="lg">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Задать вопрос
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-3xl transform -rotate-3"></div>
              <img 
                src="img/f8b81692-6b35-4b75-b186-3469b59c3a3c.jpg" 
                alt="Врач косметолог за работой" 
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Портфолио
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Результаты работ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Фотографии до и после процедур. Естественные результаты без эффекта "переделанности"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((work, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-muted-foreground">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Прайс-лист
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Стоимость услуг
            </h2>
            <p className="text-xl text-muted-foreground">
              Прозрачное ценообразование без скрытых доплат
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-border/50">
                  <div>
                    <h3 className="font-semibold">Ботулинотерапия (ботокс)</h3>
                    <p className="text-sm text-muted-foreground">1 единица препарата</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 300 ₽</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border/50">
                  <div>
                    <h3 className="font-semibold">Контурная пластика губ</h3>
                    <p className="text-sm text-muted-foreground">1 мл филлера</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 25 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border/50">
                  <div>
                    <h3 className="font-semibold">Коррекция носогубных складок</h3>
                    <p className="text-sm text-muted-foreground">1 мл филлера</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 30 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border/50">
                  <div>
                    <h3 className="font-semibold">Мезотерапия лица</h3>
                    <p className="text-sm text-muted-foreground">1 процедура</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 8 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border/50">
                  <div>
                    <h3 className="font-semibold">Лазерная терапия</h3>
                    <p className="text-sm text-muted-foreground">1 процедура</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 12 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border/50">
                  <div>
                    <h3 className="font-semibold">RF-лифтинг</h3>
                    <p className="text-sm text-muted-foreground">1 процедура</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 18 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border/50">
                  <div>
                    <h3 className="font-semibold">Ультразвуковая терапия</h3>
                    <p className="text-sm text-muted-foreground">SMAS-лифтинг</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 22 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border/50">
                  <div>
                    <h3 className="font-semibold">Комбинированная чистка</h3>
                    <p className="text-sm text-muted-foreground">1 процедура</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 4 500 ₽</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border/50">
                  <div>
                    <h3 className="font-semibold">Химический пилинг</h3>
                    <p className="text-sm text-muted-foreground">1 процедура</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 6 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div>
                    <h3 className="font-semibold">Комплексный уход</h3>
                    <p className="text-sm text-muted-foreground">1 процедура</p>
                  </div>
                  <span className="text-xl font-bold text-primary">от 3 500 ₽</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Отзывы
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Что говорят пациенты
            </h2>
            <p className="text-xl text-muted-foreground">
              Честные отзывы о результатах процедур
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <Badge variant="outline" className="ml-auto">
                      {review.service}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={20} />
                    </div>
                    <span className="ml-3 font-semibold">{review.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Контакты
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Записаться на консультацию
              </h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь со мной для записи на консультацию или уточнения деталей процедур
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <span>ул. Медицинская, 123, Москва</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-primary" size={24} />
                  <span>Пн-Сб: 9:00-20:00, Вс: выходной</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Instagram" className="text-primary" size={24} />
                  <span>@dr_beauty_moscow</span>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Услуга</label>
                  <Input placeholder="Какая процедура интересует?" />
                </div>
                <div>
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Дополнительные вопросы или пожелания" rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Cross" className="text-white" size={16} />
              </div>
              <span className="font-semibold">Dr. Beauty</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 Dr. Beauty. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}