import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type TestType = "abuse" | "codependency";

const content: Record<
  TestType,
  {
    title: string;
    intro: string;
    questions: string[];
    result: string;
  }
> = {
  abuse: {
    title: "Test breve de abuso emocional",
    intro: "Marcá las frases que se parecen a lo que vivís. Es una guia educativa, no un diagnostico.",
    questions: [
      "Cuido mis palabras para evitar una reaccion fuerte.",
      "Me hacen sentir que exagero o invento lo que paso.",
      "Pido perdon aunque no sepa exactamente que hice mal.",
      "Siento ansiedad antes de hablar de mis necesidades.",
      "He dejado de confiar en mi percepcion.",
      "Me cuesta contar lo que vivo por miedo o verguenza.",
    ],
    result:
      "Tus respuestas muestran senales que merecen ser atendidas con cuidado. La terapia puede ayudarte a recuperar claridad, seguridad interna y limites.",
  },
  codependency: {
    title: "Test breve de dependencia emocional",
    intro: "Respondé desde la honestidad, sin juzgarte. La conciencia es el primer paso para salir del ciclo.",
    questions: [
      "Me cuesta sostener limites por miedo a que se alejen.",
      "Mi estado emocional depende mucho de la otra persona.",
      "Tolero conductas que me duelen para no perder la relacion.",
      "Siento culpa cuando priorizo mis necesidades.",
      "Espero que el amor de la otra persona repare mi inseguridad.",
      "Me da miedo imaginar mi vida sin esa relacion.",
    ],
    result:
      "Hay patrones de apego, miedo y renuncia personal que pueden trabajarse. No tenes que resolverlo sola.",
  },
};

interface Props {
  type: TestType;
}

export default function SelfTest({ type }: Props) {
  const test = content[type];
  const [checked, setChecked] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const score = checked.length;
  const guidance = useMemo(() => {
    if (score <= 1) return "Pocas senales marcadas";
    if (score <= 3) return "Algunas senales importantes";
    return "Varias senales relevantes";
  }, [score]);

  function toggle(index: number) {
    setChecked((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  }

  return (
    <section className="rounded-soft border border-secondary/10 bg-white p-6 shadow-soft md:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Autoevaluacion</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">{test.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/68">{test.intro}</p>
        </div>
        <span className="rounded-full bg-primary/15 px-4 py-2 text-sm font-bold text-secondary">
          {guidance}
        </span>
      </div>

      <div className="mt-8 grid gap-3">
        {test.questions.map((question, index) => {
          const active = checked.includes(index);
          return (
            <button
              key={question}
              type="button"
              onClick={() => toggle(index)}
              className={`flex min-h-16 items-center gap-4 rounded-2xl border px-4 text-left text-sm font-semibold transition ${
                active
                  ? "border-primary bg-primary/10 text-secondary"
                  : "border-black/10 bg-soft text-ink/72 hover:border-primary/60"
              }`}
            >
              <span
                className={`grid size-6 shrink-0 place-items-center rounded-full border text-xs ${
                  active ? "border-secondary bg-secondary text-white" : "border-black/20"
                }`}
              >
                {active ? "✓" : ""}
              </span>
              {question}
            </button>
          );
        })}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => setCompleted(true)}
          className="min-h-12 rounded-full bg-secondary px-6 text-sm font-bold text-white shadow-lift transition hover:-translate-y-0.5"
        >
          Ver resultado
        </button>
        <span className="text-sm font-semibold text-ink/58">{score} de {test.questions.length} seleccionadas</span>
      </div>

      <AnimatePresence>
        {completed && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="mt-8 rounded-2xl bg-secondary p-6 text-white"
          >
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-accent">Resultado orientativo</p>
            <p className="mt-3 leading-7 text-white/90">{test.result}</p>
            <a
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-bold text-secondary"
            >
              Agendá una consulta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
