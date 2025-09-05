import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

export default function AboutPage() {
  return (
    <main className="pt-32 px-12 md:px-16 lg:px-20 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div className="relative aspect-[3/4] max-w-md">
              <Image
                src="/images/joan-lee-about.jpeg"
                alt="Joan Lee"
                fill
                className="object-cover"
                style={{ objectPosition: "center bottom" }}
              />
            </div>
          </ScrollReveal>
          <div className="space-y-12 flex flex-col justify-center min-h-[600px]">
            <ScrollReveal delay={200}>
              <h1 className="text-5xl font-light tracking-wide">Get to know me!</h1>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="relative w-4 h-4">
                    <Image
                      src="/images/new-logo.svg"
                      alt=""
                      fill
                      className="object-contain opacity-100"
                      style={{ imageRendering: "crisp-edges" }}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <div className="space-y-12 text-gray-300 leading-relaxed flex-1 flex flex-col justify-center">
              <ScrollReveal delay={400}>
                <div className="space-y-8 text-lg">
                  <p className="leading-loose">
                    Hello, again :)) I'm a designer who believes that{" "}
                    <strong className="text-white font-semibold">
                      meaningful concepts + satisfying, playful interactions = the most impactful experiences
                    </strong>
                    . Previously, I worked under Phantasma, LLC. for a project with{" "}
                    <Link
                      href="https://www.samsung.com/us/about-us/our-business/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic text-white hover:text-gray-300 transition-colors underline decoration-gray-500 hover:decoration-white"
                    >
                      Samsung Electronics
                    </Link>
                    , and I just graduated from{" "}
                    <Link
                      href="https://www.design.cmu.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic text-white hover:text-gray-300 transition-colors underline decoration-gray-500 hover:decoration-white"
                    >
                      CMU Design
                    </Link>{" "}
                    with the loveliest cohort. {"<3"}
                  </p>

                  <p className="leading-loose">
                    Outside of the studio, my favorite things are baking and eating sweets, Tetris, my guitar, LSAT
                    Demon, Mashimaro, NFL, and my Bible.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
