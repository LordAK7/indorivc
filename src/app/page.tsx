"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "AI & B2B SaaS",
    body: "Vertical SaaS, AI-native apps, dev tools, infrastructure\nWe back what we understand and have built in",
  },
  {
    title: "Early & Decisive",
    body: "No committees, no dragging feet\nPitch to decision in 2 weeks\nWire within 7 days of commitment",
  },
  {
    title: "Beyond Capital",
    body: "Capital is the easiest part\nWe spend our time on what actually kills early startups — distribution, hiring, and early execution",
  },
  {
    title: "Community-Led",
    body: "Hackathons, founder meetups, working sessions\nAccess to operators, not just investors",
  },
];

const postInvestment = [
  {
    index: "01",
    title: "Distribution & Content Strategy",
    body: "We help founders figure out positioning, build content engines, and get in front of the right audience early. Not theory — we sit with you and ship.",
  },
  {
    index: "02",
    title: "Hiring Early Team",
    body: "Your first 5 hires define your company. We help source, evaluate, and close founding engineers, early sales hires, and key operators.",
  },
  {
    index: "03",
    title: "Customer Support Setup",
    body: "Once revenue starts, we help set up lightweight support workflows so you're not drowning in tickets while trying to build.",
  },
];

const mono = { fontFamily: "var(--font-jetbrains-mono)" };
const accent = "#B5803A";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#F7F7F7", minHeight: "75vh" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/indore.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%) contrast(2.2) brightness(0.75)",
            }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="grain z-10" />
          <motion.h1
            className="relative z-10"
            style={{ ...mono, fontWeight: 700, fontSize: "clamp(1.8rem, 5vw, 2.7rem)" }}
            initial={{ opacity: 0, y: 20, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Indori.vc
          </motion.h1>
        </section>

        {/* Pillars */}
        <section className="flex min-h-screen flex-col items-center justify-center gap-12 bg-white px-5 py-20 md:gap-16 md:px-10 md:py-24">
          <p
            className="max-w-3xl text-center text-xs tracking-widest md:text-sm"
            style={{ ...mono, fontWeight: 700 }}
          >
            AN ANGEL SYNDICATE BACKING{" "}
            <span style={{ color: accent }}>INDIAN FOUNDERS</span>{" "}
            BUILDING FOR THE WORLD.
          </p>

          <div className="grid w-full max-w-7xl grid-cols-1 gap-px bg-black sm:grid-cols-2">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className="flex flex-col gap-4 bg-white p-8 md:gap-5 md:p-16"
                whileHover={{ backgroundColor: "#F7F7F7" }}
                transition={{ duration: 0.25 }}
              >
                <h2
                  className="text-sm tracking-widest md:text-base"
                  style={{ ...mono, fontWeight: 700, color: accent }}
                >
                  {pillar.title}
                </h2>
                <p className="text-xs leading-loose text-zinc-500 md:text-sm" style={mono}>
                  {pillar.body.split("\n").map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Post-investment */}
        <section
          className="flex min-h-screen flex-col items-center justify-center px-5 py-20 md:px-10 md:py-24"
          style={{ backgroundColor: "#F7F7F7" }}
        >
          <div className="w-full max-w-7xl">
            <p
              className="mb-12 text-xs tracking-widest md:mb-16"
              style={{ ...mono, fontWeight: 700, color: accent }}
            >
              WHAT WE ACTUALLY DO AFTER WE INVEST
            </p>

            <div className="flex flex-col">
              {postInvestment.map((item) => (
                <motion.div
                  key={item.index}
                  className="flex flex-col gap-3 border-t border-black py-8 md:grid md:grid-cols-[4rem_1fr_2fr] md:items-start md:gap-10 md:py-12"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <span
                    className="text-xs"
                    style={{ ...mono, color: accent }}
                  >
                    {item.index}
                  </span>
                  <h3
                    className="text-sm tracking-wide"
                    style={{ ...mono, fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs leading-loose text-zinc-500 md:text-sm" style={mono}>
                    {item.body}
                  </p>
                </motion.div>
              ))}
              <div className="border-t border-black" />
            </div>
          </div>
        </section>

        {/* For Founders */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-white px-5 py-20 md:px-10 md:py-24">
          <div className="w-full max-w-7xl">
            <p
              className="mb-10 text-xs tracking-widest md:mb-12"
              style={{ ...mono, fontWeight: 700, color: accent }}
            >
              FOR FOUNDERS
            </p>

            <h2
              className="mb-6 max-w-3xl text-2xl leading-tight md:mb-8 md:text-3xl"
              style={{ ...mono, fontWeight: 700 }}
            >
              We're not building a 200-company portfolio. We back a small number of founders each year and go deep.
            </h2>

            <p
              className="mb-12 max-w-2xl text-xs leading-loose text-zinc-500 md:mb-16 md:text-sm"
              style={mono}
            >
              If you're an Indian founder building in AI or B2B SaaS with global ambition — we want to hear from you.
            </p>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <motion.a
                href="https://form.typeform.com/to/KnWO6S7T"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-black px-8 py-4 text-center text-xs tracking-widest"
                style={{ ...mono, fontWeight: 700 }}
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                SUBMIT YOUR PITCH DECK
              </motion.a>
              <motion.a
                href="https://form.typeform.com/to/Pji2icTT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest text-zinc-400 underline underline-offset-4"
                style={{ ...mono, fontWeight: 700 }}
                whileHover={{ color: "#000" }}
                transition={{ duration: 0.2 }}
              >
                JOIN THE SYNDICATE
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#F7F7F7" }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <span className="text-xs" style={{ ...mono, fontWeight: 700 }}>
            Indori.vc
          </span>
          <p className="text-xs text-zinc-400" style={mono}>
            Indori VC is based in India.
          </p>
          <p className="text-xs text-zinc-400" style={mono}>
            Led by{" "}
            <a
              href="https://www.linkedin.com/in/vipinpharkya/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
              style={{ color: accent, textDecoration: "none" }}
            >
              Vipin Pharkya
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
