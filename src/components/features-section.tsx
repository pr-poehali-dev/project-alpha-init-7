import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Симметрия во всех направлениях",
    description: "Квадрат SATOR читается одинаково слева направо, справа налево, сверху вниз и снизу вверх — идеальная математическая симметрия.",
    icon: "target",
    badge: "Уникальность",
  },
  {
    title: "Возраст более 2000 лет",
    description: "Первые находки датируются I веком н.э. — Помпеи, Рим. Квадрат пережил империи и цивилизации.",
    icon: "globe",
    badge: "История",
  },
  {
    title: "Универсальный символ",
    description: "Найден на всех континентах: в храмах Европы, рукописях Азии, артефактах Америки. Говорит на языке всех культур.",
    icon: "link",
    badge: "Культура",
  },
  {
    title: "Зашифрованное послание",
    description: "Пять слов — SATOR, AREPO, TENET, OPERA, ROTAS — складываются в таинственную фразу, смысл которой не раскрыт до сих пор.",
    icon: "zap",
    badge: "Тайна",
  },
  {
    title: "Магическая защита",
    description: "Веками использовался как оберег: против огня, болезней, злых духов. Носили на теле, вырезали на стенах домов.",
    icon: "lock",
    badge: "Сила",
  },
  {
    title: "Анаграмма PATERNOSTER",
    description: "Буквы квадрата содержат скрытый крест из слов PATERNOSTER — «Отче наш» — важнейшая религиозная загадка древности.",
    icon: "brain",
    badge: "Код",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему SATOR уникален</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Артефакт, который 2000 лет не перестаёт удивлять учёных, мистиков и исследователей по всему миру
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
