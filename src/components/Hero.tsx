""

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { GodRays, MeshGradient } from "@paper-design/shaders-react"

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        {/* GodRays Background */}
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
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-white/30" />

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#1A2B4A]/20 rounded-full bg-white/50 backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#1A2B4A]/70">
              Result-Driven Business
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[90%] tracking-[-0.03em] text-[#0D1B2E] max-w-3xl">
            Формула маркетинга RDB
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-[160%] text-[#1A2B4A]/70 max-w-xl px-4">
            Практическое руководство по анализу конверсии. Системный подход к росту бизнеса — от гипотезы до измеримого результата.
          </p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-block relative">
                <motion.div
                  style={{
                    borderRadius: "100px",
                  }}
                  layout
                  layoutId="cta-card"
                  className="absolute inset-0 bg-[#0D1B2E] items-center justify-center transform-gpu will-change-transform"
                ></motion.div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="h-15 px-6 sm:px-8 py-3 text-lg sm:text-xl font-medium text-white tracking-[-0.01em] relative"
                >
                  Получить руководство
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-4 pt-4 border-t border-[#0D1B2E]/10">
            <div className="text-center">
              <p className="text-2xl font-semibold text-[#0D1B2E]">+38%</p>
              <p className="text-xs text-[#1A2B4A]/60 uppercase tracking-wide mt-1">рост конверсии</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-[#0D1B2E]">1 200+</p>
              <p className="text-xs text-[#1A2B4A]/60 uppercase tracking-wide mt-1">компаний</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-[#0D1B2E]">7 методик</p>
              <p className="text-xs text-[#1A2B4A]/60 uppercase tracking-wide mt-1">анализа</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
            <motion.div
              layoutId="cta-card"
              transition={{ duration: 0.3 }}
              style={{
                borderRadius: "24px",
              }}
              layout
              className="relative flex h-full w-full overflow-y-auto bg-[#0D1B2E] transform-gpu will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                layout={false}
                transition={{ duration: 0.15, delay: 0.05 }}
                className="absolute h-full inset-0 overflow-hidden pointer-events-none"
                style={{
                  borderRadius: "24px",
                }}
              >
                <MeshGradient
                  speed={0.5}
                  colors={["#152238", "#0A1628", "#1C3354", "#091222"]}
                  distortion={0.8}
                  swirl={0.1}
                  grainMixer={0}
                  grainOverlay={0}
                  className="inset-0 sticky top-0"
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16"
              >
                <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/50">
                      RDB Methodology
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-none tracking-[-0.03em]">
                    Получить руководство по анализу конверсии
                  </h2>

                  <div className="space-y-4 sm:space-y-6 pt-4">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-white/80 leading-[150%]">
                          7 методик анализа воронки продаж с пошаговыми инструкциями и шаблонами для немедленного применения.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-white/80 leading-[150%]">
                          Реальные кейсы: как 1 200+ компаний увеличили конверсию в среднем на 38% за первые 90 дней.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10">
                    <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-[150%] mb-4 font-light italic">
                      «RDB дал нам единый язык для всей команды — от аналитиков до директора по маркетингу.»
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">АС</span>
                      </div>
                      <div>
                        <p className="text-base sm:text-lg text-white">Алексей Соколов</p>
                        <p className="text-sm text-white/50">CMO, TechVision Group</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <form className="space-y-4 sm:space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-mono font-normal text-white/60 mb-2 tracking-[0.5px] uppercase"
                      >
                        ПОЛНОЕ ИМЯ *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-mono font-normal text-white/60 mb-2 tracking-[0.5px] uppercase"
                      >
                        РАБОЧИЙ EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label
                          htmlFor="company"
                          className="block text-[10px] font-mono font-normal text-white/60 mb-2 tracking-[0.5px] uppercase"
                        >
                          КОМПАНИЯ
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"
                        />
                      </div>
                      <div className="sm:w-36 w-full">
                        <label
                          htmlFor="role"
                          className="block text-[10px] font-mono font-normal text-white/60 mb-2 tracking-[0.5px] uppercase"
                        >
                          ДОЛЖНОСТЬ
                        </label>
                        <select
                          id="role"
                          name="role"
                          className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none cursor-pointer text-sm h-10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 0.75rem center",
                            backgroundSize: "1rem",
                          }}
                        >
                          <option value="cmo">CMO</option>
                          <option value="director">Директор</option>
                          <option value="manager">Менеджер</option>
                          <option value="analyst">Аналитик</option>
                          <option value="other">Другое</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="goal"
                        className="block text-[10px] font-mono font-normal text-white/60 mb-2 tracking-[0.5px] uppercase"
                      >
                        КЛЮЧЕВАЯ ЗАДАЧА
                      </label>
                      <textarea
                        id="goal"
                        name="goal"
                        rows={3}
                        placeholder="Опишите текущую задачу по конверсии..."
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-2.5 rounded-full bg-white text-[#0D1B2E] font-semibold hover:bg-white/90 transition-colors tracking-[-0.01em] h-10 text-sm"
                    >
                      Получить руководство
                    </button>

                    <p className="text-[11px] text-white/30 text-center">
                      Без спама. Данные защищены и не передаются третьим лицам.
                    </p>
                  </form>
                </div>
              </motion.div>

              <motion.button
                onClick={handleClose}
                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-white bg-transparent transition-colors hover:bg-white/10 rounded-full"
                aria-label="Закрыть"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
