export default function ArtsCulture() {
  const scholarsPoints = [
    {
      letter: "S",
      badgeBg: "bg-sky-50",
      badgeBorder: "border-sky-100",
      title: "Smart, tech-enabled learning",
      description:
        "Smart classes and digital boards that make concepts visual, interactive and easier to retain.",
    },
    {
      letter: "C",
      badgeBg: "bg-rose-50",
      badgeBorder: "border-rose-100",
      title: "Communication & confidence",
      description:
        "Communication and personality development sessions that help students become confident presenters and leaders.",
    },
    {
      letter: "H",
      badgeBg: "bg-violet-50",
      badgeBorder: "border-violet-100",
      title: "Hobbies, art & expression",
      description:
        "Dedicated space for music, dance, art and martial arts so students can explore their creative selves.",
    },
    {
      letter: "O",
      badgeBg: "bg-amber-50",
      badgeBorder: "border-amber-100",
      title: "Outdoor & real-world exposure",
      description:
        "Field trips, nature-based learning and real-world activities expand understanding beyond textbooks.",
    },
    {
      letter: "L",
      badgeBg: "bg-emerald-50",
      badgeBorder: "border-emerald-100",
      title: "Learning from best practices",
      description:
        "A blend of Indian traditional values and international learning approaches.",
    },
    {
      letter: "A",
      badgeBg: "bg-orange-50",
      badgeBorder: "border-orange-100",
      title: "Advancing social skills",
      description:
        "Collaborative activities and group games that build empathy and teamwork.",
    },
    {
      letter: "R",
      badgeBg: "bg-slate-50",
      badgeBorder: "border-slate-100",
      title: "Review, reflection & support",
      description:
        "Progress tracking and personalised guidance for every learner.",
    },
    {
      letter: "S",
      badgeBg: "bg-yellow-50",
      badgeBorder: "border-yellow-100",
      title: "Special care & guidance",
      description:
        "Counsellors and special educators ensure children get the right support.",
    },
  ];

  return (
    <section
      id="arts-culture"
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative"
      style={{
        backgroundImage: "url('logo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] items-start relative z-10">
          {/* LEFT TEXT SIDE */}
          <div className="bg-white px-6 py-8 rounded-lg shadow-lg">
            <p className="text-sm font-semibold tracking-[0.22em] text-purple-600 uppercase mb-3">
              Arts • Culture • Expression
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Beyond Academics: Dance, Music & Culture
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              Creativity is not an extra — it's a core part of childhood. Arts
              and cultural activities help students explore rhythm, imagination
              and identity.
            </p>

            <p className="text-slate-700 leading-relaxed">
              From classical and folk dance to vocal and instrumental training,
              students learn to express themselves with confidence and joy.
            </p>
          </div>

          {/* RIGHT SCHOLARS COLUMN */}
          <div className="space-y-4">
            {scholarsPoints.map((item, index) => (
              <div
                key={index}
                className={`flex items-stretch rounded-2xl border ${item.badgeBorder} ${item.badgeBg} shadow-sm overflow-hidden`}
              >
                {/* LETTER */}
                <div className="flex items-center justify-center px-6 py-6 bg-white/70 border-r border-slate-100">
                  <span className="text-3xl font-semibold text-slate-800 tracking-[0.25em]">
                    {item.letter}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex-1 px-6 py-4">
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
