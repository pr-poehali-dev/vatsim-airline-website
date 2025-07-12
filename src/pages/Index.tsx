import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeStats, setActiveStats] = useState({
    pilots: 1247,
    flights: 15623,
    hours: 98542,
    airports: 456,
  });

  const [animatedStats, setAnimatedStats] = useState({
    pilots: 0,
    flights: 0,
    hours: 0,
    airports: 0,
  });

  // Анимация счетчиков
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const counters = Object.keys(activeStats).map((key) => {
      const target = activeStats[key as keyof typeof activeStats];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        if (step < steps) {
          current += increment;
          step++;
          setAnimatedStats((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }
      }, stepTime);
    });

    return () => counters.forEach(clearInterval);
  }, []);

  const fleetData = [
    { model: "Boeing 737-800", count: 15, range: "5,765 км", seats: 189 },
    { model: "Airbus A320", count: 12, range: "6,150 км", seats: 180 },
    { model: "Boeing 777-300ER", count: 8, range: "13,649 км", seats: 396 },
    { model: "Airbus A350-900", count: 6, range: "15,000 км", seats: 325 },
  ];

  const routes = [
    {
      from: "UUDD",
      to: "EGLL",
      distance: "2,500 км",
      duration: "3ч 45м",
      status: "active",
    },
    {
      from: "KJFK",
      to: "EDDF",
      distance: "6,200 км",
      duration: "8ч 15м",
      status: "scheduled",
    },
    {
      from: "YSSY",
      to: "OMDB",
      distance: "11,900 км",
      duration: "14ч 30м",
      status: "active",
    },
    {
      from: "ZBAA",
      to: "RJTT",
      distance: "2,100 км",
      duration: "3ч 20м",
      status: "completed",
    },
  ];

  const ranks = [
    { title: "Student Pilot", hours: 0, color: "bg-gray-400", current: true },
    { title: "Private Pilot", hours: 40, color: "bg-blue-500", current: false },
    {
      title: "Commercial Pilot",
      hours: 250,
      color: "bg-aviation-orange",
      current: false,
    },
    {
      title: "Airline Transport Pilot",
      hours: 1500,
      color: "bg-yellow-500",
      current: false,
    },
    {
      title: "Senior Captain",
      hours: 5000,
      color: "bg-purple-600",
      current: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-aviation-blue via-blue-600 to-aviation-dark font-open-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(/img/825bf28e-6c58-43bd-ba35-598071d8d89a.jpg)",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-aviation-blue/90 via-aviation-blue/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 leading-tight">
              VATSIM
              <span className="block text-aviation-orange">AIRLINES</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Присоединяйтесь к ведущей виртуальной авиакомпании и испытайте
              реалистичные полеты в сети VATSIM
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-aviation-orange hover:bg-aviation-orange/90 text-white px-8 py-4 text-lg font-semibold animate-pulse-glow"
              >
                <Icon name="Plane" className="mr-2" />
                Начать карьеру
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-aviation-blue px-8 py-4 text-lg"
              >
                <Icon name="Play" className="mr-2" />
                Посмотреть видео
              </Button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-aviation-orange">
                  {animatedStats.pilots.toLocaleString()}
                </div>
                <div className="text-sm">Активных пилотов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-aviation-orange">
                  {animatedStats.flights.toLocaleString()}
                </div>
                <div className="text-sm">Выполнено рейсов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-aviation-orange">
                  {animatedStats.hours.toLocaleString()}
                </div>
                <div className="text-sm">Налетанных часов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-aviation-orange">
                  {animatedStats.airports.toLocaleString()}
                </div>
                <div className="text-sm">Аэропортов</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating airplane */}
        <div className="absolute bottom-10 right-10 animate-float">
          <Icon
            name="Plane"
            size={60}
            className="text-aviation-orange opacity-30"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="fleet" className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="fleet" className="flex items-center gap-2">
                <Icon name="Plane" size={16} />
                Флот
              </TabsTrigger>
              <TabsTrigger value="routes" className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Маршруты
              </TabsTrigger>
              <TabsTrigger value="ranks" className="flex items-center gap-2">
                <Icon name="Medal" size={16} />
                Ранги
              </TabsTrigger>
              <TabsTrigger value="training" className="flex items-center gap-2">
                <Icon name="GraduationCap" size={16} />
                Обучение
              </TabsTrigger>
              <TabsTrigger
                value="dashboard"
                className="flex items-center gap-2"
              >
                <Icon name="BarChart3" size={16} />
                Статистика
              </TabsTrigger>
            </TabsList>

            {/* Fleet */}
            <TabsContent value="fleet" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-montserrat font-bold text-aviation-dark mb-4">
                  Наш флот
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Современные воздушные суда от ведущих производителей для
                  безопасных и комфортных полетов
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fleetData.map((aircraft, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in border-l-4 border-l-aviation-blue"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-montserrat">
                        {aircraft.model}
                      </CardTitle>
                      <Badge variant="secondary" className="w-fit">
                        {aircraft.count} самолетов
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Дальность:</span>
                        <span className="font-semibold">{aircraft.range}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Мест:</span>
                        <span className="font-semibold">{aircraft.seats}</span>
                      </div>
                      <Button className="w-full mt-4 bg-aviation-blue hover:bg-aviation-blue/90">
                        <Icon name="Eye" className="mr-2" size={16} />
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Routes */}
            <TabsContent value="routes" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-montserrat font-bold text-aviation-dark mb-4">
                  Активные маршруты
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Летайте по всему миру с нашей обширной сетью маршрутов
                </p>
              </div>

              <div className="space-y-4">
                {routes.map((route, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-xl font-bold text-aviation-blue">
                              {route.from}
                            </div>
                            <div className="text-sm text-gray-500">Вылет</div>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <div className="w-8 h-px bg-gray-300"></div>
                            <Icon
                              name="Plane"
                              size={20}
                              className="text-aviation-orange"
                            />
                            <div className="w-8 h-px bg-gray-300"></div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-aviation-blue">
                              {route.to}
                            </div>
                            <div className="text-sm text-gray-500">Прилет</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-8">
                          <div className="text-center">
                            <div className="font-semibold">
                              {route.distance}
                            </div>
                            <div className="text-sm text-gray-500">
                              Расстояние
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">
                              {route.duration}
                            </div>
                            <div className="text-sm text-gray-500">Время</div>
                          </div>
                          <Badge
                            variant={
                              route.status === "active"
                                ? "default"
                                : route.status === "scheduled"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              route.status === "active" ? "bg-green-500" : ""
                            }
                          >
                            {route.status === "active"
                              ? "В полете"
                              : route.status === "scheduled"
                                ? "Запланирован"
                                : "Завершен"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Ranks */}
            <TabsContent value="ranks" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-montserrat font-bold text-aviation-dark mb-4">
                  Система рангов
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Развивайтесь от курсанта до командира воздушного судна
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {ranks.map((rank, index) => (
                    <Card
                      key={index}
                      className={`transition-all duration-300 hover:shadow-lg ${rank.current ? "ring-2 ring-aviation-orange" : ""}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-4 h-4 rounded-full ${rank.color}`}
                            ></div>
                            <div>
                              <h3 className="text-xl font-montserrat font-semibold">
                                {rank.title}
                              </h3>
                              <p className="text-gray-600">
                                Минимум {rank.hours} часов налета
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            {rank.current && (
                              <Badge className="bg-aviation-orange">
                                Текущий ранг
                              </Badge>
                            )}
                            <Progress
                              value={rank.current ? 65 : 0}
                              className="w-32"
                            />
                            <Button variant="outline" size="sm">
                              <Icon name="Info" size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Training */}
            <TabsContent value="training" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-montserrat font-bold text-aviation-dark mb-4">
                  Программы обучения
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Профессиональное обучение от сертифицированных инструкторов
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <Icon
                      name="BookOpen"
                      size={32}
                      className="text-aviation-blue mb-2"
                    />
                    <CardTitle className="font-montserrat">
                      Теоретическая подготовка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Изучите основы авиации, правила полетов и процедуры VATSIM
                    </p>
                    <Button className="w-full bg-aviation-blue hover:bg-aviation-blue/90">
                      Начать курс
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <Icon
                      name="Monitor"
                      size={32}
                      className="text-aviation-orange mb-2"
                    />
                    <CardTitle className="font-montserrat">
                      Практические тренажеры
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Отработайте навыки пилотирования на реалистичных
                      симуляторах
                    </p>
                    <Button className="w-full bg-aviation-orange hover:bg-aviation-orange/90">
                      Тренировка
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <Icon
                      name="Users"
                      size={32}
                      className="text-green-600 mb-2"
                    />
                    <CardTitle className="font-montserrat">
                      Менторская программа
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Персональное сопровождение опытными пилотами
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-600/90">
                      Найти ментора
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Dashboard */}
            <TabsContent value="dashboard" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-montserrat font-bold text-aviation-dark mb-4">
                  Панель управления
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Отслеживайте свой прогресс и статистику полетов
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-aviation-blue to-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100">Ваши полеты</p>
                        <p className="text-3xl font-bold">142</p>
                      </div>
                      <Icon name="Plane" size={32} className="text-blue-100" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-aviation-orange to-orange-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100">Часов налета</p>
                        <p className="text-3xl font-bold">847</p>
                      </div>
                      <Icon
                        name="Clock"
                        size={32}
                        className="text-orange-100"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100">Рейтинг</p>
                        <p className="text-3xl font-bold">4.8</p>
                      </div>
                      <Icon name="Star" size={32} className="text-green-100" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100">Достижения</p>
                        <p className="text-3xl font-bold">23</p>
                      </div>
                      <Icon
                        name="Trophy"
                        size={32}
                        className="text-purple-100"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat">
                    Прогресс к следующему рангу
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Private Pilot</span>
                      <span>65 / 100 часов</span>
                    </div>
                    <Progress value={65} className="h-3" />
                    <p className="text-sm text-gray-600">
                      Осталось 35 часов до получения ранга Private Pilot
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Index;
