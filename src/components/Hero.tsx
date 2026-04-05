""

import { GodRays } from "@paper-design/shaders-react"
import Icon from "@/components/ui/icon"

const methods = [
  {
    number: "01",
    title: "Карта точек потери",
    description:
      "Выявите, на каком этапе воронки уходит большинство клиентов. Методика позволяет визуализировать каждый шаг пути и найти узкие места до начала любых изменений.",
    tags: ["Воронка", "Аналитика"],
  },
  {
    number: "02",
    title: "RDB-матрица гипотез",
    description:
      "Приоритизация гипотез по трём осям: потенциал роста, стоимость внедрения, скорость проверки. Фокусируйте усилия команды только на тех задачах, которые дадут результат быстро.",
    tags: ["Приоритизация", "Команда"],
  },
  {
    number: "03",
    title: "Анализ ценностного предложения",
    description:
      "Проверка соответствия оффера реальным болям аудитории. Структурированный фреймворк для оценки и переработки УТП без субъективных суждений.",
    tags: ["Позиционирование", "УТП"],
  },
  {
    number: "04",
    title: "Тест на доверие",
    description:
      "7 критериев оценки доверия к странице: социальные доказательства, экспертность, прозрачность условий. Чек-лист с конкретными рекомендациями по каждому пункту.",
    tags: ["Доверие", "Конверсия"],
  },
  {
    number: "05",
    title: "Метод контрастного A/B",
    description:
      "Не стандартное A/B-тестирование, а радикальные изменения с измерением значимости. Протокол запуска, остановки и интерпретации результатов без статистических ошибок.",
    tags: ["A/B тест", "Данные"],
  },
  {
    number: "06",
    title: "Сегментационный аудит",
    description:
      "Анализ поведения разных сегментов внутри одной воронки. Часто лучший оффер для одной аудитории разрушает конверсию другой — методика помогает это обнаружить.",
    tags: ["Сегменты", "Аудитория"],
  },
  {
    number: "07",
    title: "Цикл итерации RDB",
    description:
      "Замкнутый процесс: гипотеза → эксперимент → результат → масштабирование. Система регулярных ретроспектив и накопления знаний внутри команды.",
    tags: ["Процесс", "Рост"],
  },
]

export default function Hero() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-20">
        <div className="absolute inset-0">
          <GodRays
            colorBack="#00000000"
            colors={["#C8D4E8A0", "#E8EDF5F0", "#8A9BB5", "#6B7D96"]}
            colorBloom="#D4E0F0"
            offsetX={0.85}
            offsetY={-1}
            intensity={1}
            spotty={0.45}
            midSize={10}
            midIntensity={0}
            density={0.12}
            bloom={0.15}
            speed={0.6}
            scale={1.6}
            frame={3332042.8159981333}
            style={{ height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}
          />
        </div>
        <div className="absolute inset-0 bg-white/30" />

        <div className="relative z-10 flex flex-col items-center gap-5 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#1A2B4A]/20 rounded-full bg-white/60 backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#1A2B4A]/70">
              Result-Driven Business
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[90%] tracking-[-0.03em] text-[#0D1B2E]">
            Формула маркетинга RDB
          </h1>

          <p className="text-lg sm:text-xl leading-[160%] text-[#1A2B4A]/70 max-w-xl">
            Практическое руководство по анализу конверсии. Системный подход к росту бизнеса — от гипотезы до измеримого результата.
          </p>

          <div className="flex flex-wrap justify-center gap-10 mt-2 pt-6 border-t border-[#0D1B2E]/10 w-full">
            <div className="text-center">
              <p className="text-3xl font-semibold text-[#0D1B2E]">+38%</p>
              <p className="text-xs text-[#1A2B4A]/50 uppercase tracking-widest mt-1">рост конверсии</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-[#0D1B2E]">1 200+</p>
              <p className="text-xs text-[#1A2B4A]/50 uppercase tracking-widest mt-1">компаний</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-[#0D1B2E]">7 методик</p>
              <p className="text-xs text-[#1A2B4A]/50 uppercase tracking-widest mt-1">анализа</p>
            </div>
          </div>

          <a
            href="#guide"
            className="inline-flex items-center gap-2 text-[#0D1B2E]/50 text-sm mt-4 hover:text-[#0D1B2E] transition-colors"
          >
            <span>Читать руководство</span>
            <Icon name="ChevronDown" size={16} />
          </a>
        </div>
      </div>

      {/* Guide Content */}
      <div id="guide" className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        {/* Intro */}
        <div className="mb-16 pb-16 border-b border-[#0D1B2E]/10">
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#1A2B4A]/40">Введение</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0D1B2E] tracking-[-0.03em] mt-3 mb-5">
            Почему стандартный маркетинг перестаёт работать
          </h2>
          <div className="space-y-4 text-[#1A2B4A]/70 leading-[170%] text-lg">
            <p>
              Большинство компаний тратят бюджет на трафик, не понимая, где именно теряются клиенты. Конверсия воспринимается как магия: то работает, то нет. RDB меняет это — превращает маркетинг в управляемый процесс с чёткими метриками и точками воздействия.
            </p>
            <p>
              Методология Result-Driven Business построена на одном принципе: каждое действие должно быть проверяемым и измеримым. Никаких интуитивных решений без данных. Никаких изменений без гипотезы.
            </p>
          </div>
        </div>

        {/* 7 Methods */}
        <div className="mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#1A2B4A]/40">7 методик анализа</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0D1B2E] tracking-[-0.03em] mt-3 mb-12">
            Полное руководство
          </h2>

          <div className="space-y-0">
            {methods.map((method, i) => (
              <div
                key={i}
                className="flex gap-8 py-10 border-b border-[#0D1B2E]/8 group"
              >
                <div className="flex-shrink-0 w-12">
                  <span className="text-[#0D1B2E]/15 font-mono text-2xl font-semibold">{method.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0D1B2E] tracking-[-0.02em] mb-3">
                    {method.title}
                  </h3>
                  <p className="text-[#1A2B4A]/65 leading-[170%] mb-4">{method.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {method.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-[0.1em] px-3 py-1 bg-[#0D1B2E]/5 text-[#0D1B2E]/50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mb-16 pb-16 border-b border-[#0D1B2E]/10">
          <blockquote className="text-2xl sm:text-3xl font-light text-[#0D1B2E] leading-[140%] tracking-[-0.02em] italic border-l-2 border-[#0D1B2E]/20 pl-8">
            «RDB дал нашей команде единый язык — от аналитиков до директора по маркетингу. Первые результаты появились уже через три недели.»
          </blockquote>
          <div className="flex items-center gap-4 mt-6 pl-8">
            <div className="w-10 h-10 rounded-full bg-[#0D1B2E]/10 flex items-center justify-center">
              <span className="text-[#0D1B2E] font-semibold text-xs">АС</span>
            </div>
            <div>
              <p className="font-medium text-[#0D1B2E]">Алексей Соколов</p>
              <p className="text-sm text-[#1A2B4A]/50">CMO, TechVision Group</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#0D1B2E] rounded-2xl p-8 sm:p-12 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40">
            Result-Driven Business
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-[-0.03em] mt-3 mb-4">
            Готовы внедрить методологию?
          </h2>
          <p className="text-white/50 max-w-md mx-auto leading-[160%] mb-8">
            Свяжитесь с нами — разберём вашу воронку по методике RDB и найдём точки роста конверсии.
          </p>
          <a
            href="mailto:hello@rdb.ru"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#0D1B2E] font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            <Icon name="Mail" size={16} />
            Написать нам
          </a>
        </div>
      </div>
    </div>
  )
}