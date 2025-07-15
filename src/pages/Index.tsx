import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const menuItems = [
    { name: "Главная", icon: "Home", active: true },
    { name: "Фильмы", icon: "Film" },
    { name: "Сериалы", icon: "Tv" },
    { name: "Буду смотреть", icon: "Clock" },
    { name: "ТВ", icon: "Radio" },
    { name: "Кино на ТВ", icon: "Monitor" },
    { name: "Игры", icon: "Gamepad2" },
    { name: "Настройки", icon: "Settings" },
  ];

  const movieCategories = [
    { title: "Популярные фильмы", movies: ["Фильм 1", "Фильм 2", "Фильм 3", "Фильм 4"] },
    { title: "Детские фильмы", movies: ["Мультик 1", "Мультик 2", "Мультик 3", "Мультик 4"] },
    { title: "Семейные фильмы", movies: ["Семейный 1", "Семейный 2", "Семейный 3", "Семейный 4"] },
    { title: "Новинки", movies: ["Новинка 1", "Новинка 2", "Новинка 3", "Новинка 4"] },
  ];

  const ageGroups = [
    { name: "Дети", age: "0-12", color: "bg-green-500" },
    { name: "Подростки", age: "13-17", color: "bg-yellow-500" },
    { name: "Взрослые", age: "18+", color: "bg-red-500" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-card border-b border-border">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold font-roboto">СемейныйТВ</h1>
          <nav className="flex space-x-6">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                variant={item.active ? "default" : "ghost"}
                className="flex items-center space-x-2"
              >
                <Icon name={item.icon} size={18} />
                <span className="font-open-sans">{item.name}</span>
              </Button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Icon name="Search" size={16} />
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="User" size={16} />
            <span className="ml-2 font-open-sans">Аккаунт</span>
          </Button>
          <Button variant="secondary" size="sm">
            <Icon name="Crown" size={16} />
            <span className="ml-2 font-open-sans">Подписки</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-6">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="relative bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 mb-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 font-roboto">
                Семейный контент для всех возрастов
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-open-sans">
                Система рекомендаций адаптированная для детей, подростков и взрослых
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="font-medium">
                  <Icon name="Play" size={20} />
                  <span className="ml-2">Смотреть сейчас</span>
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Plus" size={20} />
                  <span className="ml-2">В список</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Age Groups */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 font-roboto">Выберите возрастную группу</h3>
          <div className="grid grid-cols-3 gap-4">
            {ageGroups.map((group) => (
              <Card key={group.name} className="cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${group.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold font-roboto">{group.name}</h4>
                  <p className="text-sm text-muted-foreground font-open-sans">{group.age}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Movie Categories */}
        {movieCategories.map((category) => (
          <section key={category.title} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold font-roboto">{category.title}</h3>
              <Button variant="ghost" size="sm">
                Все <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {category.movies.map((movie, index) => (
                <Card key={index} className="cursor-pointer hover:scale-105 transition-transform">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted rounded-t-lg mb-3 relative overflow-hidden">
                      <img 
                        src={`/img/${index === 0 ? 'a92f7885-21c7-475b-932d-686b5013b455.jpg' : index === 1 ? 'c8f6bdaa-ab5d-4b85-942c-e9965430f83c.jpg' : '2b70e51c-0009-49ab-8b51-3e360a0a5eb7.jpg'}`}
                        alt={movie}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Icon name="PlayCircle" size={32} className="text-white" />
                      </div>
                    </div>
                    <div className="px-4 pb-4">
                      <h4 className="font-medium font-roboto">{movie}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="secondary" className="text-xs">HD</Badge>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={12} className="text-yellow-500" />
                          <span className="text-xs text-muted-foreground">4.5</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Family Profiles */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 font-roboto">Семейные профили</h3>
          <div className="flex space-x-4">
            {["Мама", "Папа", "Дочь", "Сын"].map((profile) => (
              <div key={profile} className="text-center cursor-pointer hover:scale-105 transition-transform">
                <Avatar className="w-16 h-16 mx-auto mb-2">
                  <AvatarFallback className="text-lg font-medium">
                    {profile.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm font-open-sans">{profile}</p>
              </div>
            ))}
            <div className="text-center cursor-pointer hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-2">
                <Icon name="Plus" size={24} className="text-muted-foreground" />
              </div>
              <p className="text-sm font-open-sans">Добавить</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;