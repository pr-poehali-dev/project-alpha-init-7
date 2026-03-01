import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Древний Рим, I век н.э.",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Первые известные экземпляры квадрата SATOR обнаружены в Помпеях — городе, погребённом под пеплом Везувия
            в 79 году н.э. Это делает артефакт одним из древнейших магических символов западного мира.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Найден на стенах жилых домов и терм Помпей
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Использовался как защитный амулет легионерами
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Свидетельство существования ранних христианских общин
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Средневековье, V–XV века",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            В Средние века квадрат SATOR распространился по всей Европе. Его вырезали на церковных стенах,
            вписывали в рукописи, носили как оберег от огня и болезней. Монахи считали его священным знаком.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Обнаружен в соборах Англии, Франции и Германии
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Применялся в ритуалах экзорцизма и исцеления
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Записан в алхимических трактатах эпохи
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Наши дни — глобальный феномен",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Сегодня квадрат SATOR привлекает учёных, лингвистов, криптографов и любителей тайн по всему миру.
            Его смысл по-прежнему не разгадан — что делает его вечным объектом исследования и восхищения.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Изучается в ведущих университетах мира
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Вдохновляет художников, писателей и режиссёров
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Тайна остаётся нераскрытой спустя 2000 лет
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">История сквозь века</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Квадрат SATOR прошёл путь от стен античных Помпей до современных исследовательских центров —
            и каждую эпоху он обретал новый смысл.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
