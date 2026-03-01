import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Профессор Андрей Волков",
    role: "Историк, МГУ им. Ломоносова",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "SATOR — один из редчайших артефактов, который сохраняет свою загадочность невзирая на тысячелетия изучения. Каждое новое поколение учёных открывает в нём что-то своё.",
  },
  {
    name: "Мария Фонтейн",
    role: "Лингвист, Парижский университет Сорбонна",
    avatar: "/professional-woman-scientist.png",
    content:
      "Лингвистическая структура квадрата не имеет аналогов в истории латинского языка. Это настоящее чудо — пять слов, идеально вписанных в матрицу симметрии.",
  },
  {
    name: "Карлос Мендес",
    role: "Археолог, Национальный музей Рима",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "За 30 лет работы с древними артефактами я не встречал ничего, что вызывало бы столь живой интерес и у специалистов, и у широкой публики одновременно.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят исследователи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Учёные со всего мира посвящают годы изучению феномена SATOR
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
