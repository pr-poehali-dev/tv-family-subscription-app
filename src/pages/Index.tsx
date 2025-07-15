import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProfile, setSelectedProfile] = useState('Папа');
  
  const profiles = [
    { name: 'Папа', age: 'Взрослый', color: 'bg-blue-500' },
    { name: 'Мама', age: 'Взрослый', color: 'bg-pink-500' },
    { name: 'Дочка', age: '12+', color: 'bg-purple-500' },
    { name: 'Сын', age: '6+', color: 'bg-green-500' },
  ];

  const menuItems = [
    { name: 'Главная', icon: 'Home', active: true },
    { name: 'Фильмы', icon: 'Film' },
    { name: 'Сериалы', icon: 'Tv' },
    { name: 'Буду смотреть', icon: 'Bookmark' },
    { name: 'ТВ', icon: 'Radio' },
    { name: 'Кино на ТВ', icon: 'Monitor' },
    { name: 'Игры', icon: 'Gamepad2' },
    { name: 'Настройки', icon: 'Settings' },
  ];

  const categories = [
    {
      title: 'Для всей семьи',
      subtitle: 'Фильмы, которые понравятся всем',
      movies: ['Семейная комедия', 'Приключения', 'Мультфильм', 'Детектив', 'Фэнтези']
    },
    {
      title: 'Детские (6+)',
      subtitle: 'Безопасный контент для малышей',
      movies: ['Мультики', 'Сказки', 'Обучающие', 'Песенки', 'Игры']
    },
    {
      title: 'Подростковые (12+)',
      subtitle: 'Интересно для школьников',
      movies: ['Приключения', 'Комедии', 'Фантастика', 'Мюзиклы', 'Спорт']
    },
    {
      title: 'Взрослые (18+)',
      subtitle: 'Для родителей после 22:00',
      movies: ['Драма', 'Триллер', 'Боевик', 'Романтика', 'Документальное']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-slate-700">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-primary">FamilyTVㅤ🎬</h1>
          <nav className="flex space-x-6">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                variant={item.active ? "default" : "ghost"}
                size="sm"
                className="text-sm"
              >
                <Icon name={item.icon} size={16} className="mr-2" />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Icon name="Crown" size={16} className="mr-2" />
            Подписка
          </Button>
          <Button variant="ghost" size="sm">
            <Icon name="User" size={16} className="mr-2" />
            Аккаунт
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar with profiles */}
        <aside className="w-64 p-6 border-r border-slate-700">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Семейные профили</h3>
            <div className="space-y-3">
              {profiles.map((profile) => (
                <div
                  key={profile.name}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedProfile === profile.name 
                      ? 'bg-primary/20 border border-primary' 
                      : 'hover:bg-slate-800'
                  }`}
                  onClick={() => setSelectedProfile(profile.name)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className={`${profile.color} text-white`}>
                      {profile.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{profile.name}</p>
                    <Badge variant="secondary" className="text-xs">
                      {profile.age}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Семейная подписка</h3>
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-none">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="Crown" size={20} className="text-yellow-400" />
                  <span className="text-sm font-medium">Premium</span>
                </div>
                <p className="text-sm text-white/80 mb-3">
                  4 профиля • HD качество • Без рекламы
                </p>
                <div className="text-lg font-bold">599₽/мес</div>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Hero section */}
          <div className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-2">
                Привет, {selectedProfile}! 👋
              </h2>
              <p className="text-lg text-white/90 mb-4">
                Продолжить просмотр или выбрать что-то новое?
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Продолжить
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Icon name="Info" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </div>
            </div>
          </div>

          {/* Content categories */}
          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-slate-400">{category.subtitle}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Все <Icon name="ChevronRight" size={16} className="ml-1" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-5 gap-4">
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
                        <div className="p-3">
                          <h4 className="font-medium text-sm mb-1">{movie}</h4>
                          <p className="text-xs text-muted-foreground">2024 • HD</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Family recommendations */}
          <div className="mt-12 bg-slate-800/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              <Icon name="Users" size={24} className="inline mr-2 text-primary" />
              Рекомендации для семьи
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-green-600/20 border-green-600/50">
                <CardContent className="p-4">
                  <Icon name="Shield" size={20} className="text-green-400 mb-2" />
                  <h4 className="font-medium mb-1">Безопасный просмотр</h4>
                  <p className="text-sm text-slate-400">Родительский контроль активен</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-600/20 border-blue-600/50">
                <CardContent className="p-4">
                  <Icon name="Clock" size={20} className="text-blue-400 mb-2" />
                  <h4 className="font-medium mb-1">Время просмотра</h4>
                  <p className="text-sm text-slate-400">Ограничения по возрасту</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-600/20 border-purple-600/50">
                <CardContent className="p-4">
                  <Icon name="Star" size={20} className="text-purple-400 mb-2" />
                  <h4 className="font-medium mb-1">Семейные оценки</h4>
                  <p className="text-sm text-slate-400">Лучшее для всех возрастов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;