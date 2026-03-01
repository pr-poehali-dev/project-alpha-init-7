import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое квадрат SATOR?",
      answer:
        "SATOR — магический квадрат 5×5, составленный из пяти латинских слов: SATOR, AREPO, TENET, OPERA, ROTAS. Его уникальность в том, что он читается одинаково в любом направлении — горизонтально, вертикально, слева направо и справа налево.",
    },
    {
      question: "Где впервые был найден квадрат?",
      answer:
        "Первые экземпляры обнаружены в Помпеях (Италия), погребённых под пеплом Везувия в 79 году н.э. Это означает, что квадрат существовал ещё до знаменитого извержения — то есть ему более 2000 лет.",
    },
    {
      question: "Что означают слова квадрата?",
      answer:
        "Точный смысл по-прежнему является предметом споров. Одна из версий: «Сеятель Арепо держит колёса с трудом». Другие исследователи видят в нём зашифрованный христианский символ или алхимическую формулу.",
    },
    {
      question: "Что такое анаграмма PATERNOSTER?",
      answer:
        "Все 25 букв квадрата можно переставить так, чтобы получилось два слова PATERNOSTER («Отче наш»), расположенных крестом, с буквами A и O (Альфа и Омега) по углам. Это считается важнейшим аргументом в пользу христианского происхождения символа.",
    },
    {
      question: "Как квадрат использовали в магии?",
      answer:
        "Веками квадрат SATOR применяли как оберег: вырезали на домах для защиты от огня, носили на теле для исцеления, использовали в ритуалах изгнания злых духов. В средневековой Европе его считали одним из сильнейших защитных символов.",
    },
    {
      question: "Загадка SATOR решена?",
      answer:
        "Нет — и в этом главное очарование квадрата. Несмотря на тысячи лет изучения, лингвисты, историки и криптографы продолжают спорить о его происхождении и значении. Тайна живёт.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что вы хотели знать о магическом квадрате SATOR — собрали самые популярные вопросы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
