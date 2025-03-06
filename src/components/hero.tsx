import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { userDetails } from "@/config/user-details"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading mb-6 fade-in">
            {"Hi, I'm "}
            <span className="text-primary">{userDetails.name}</span>
          </h1>
          <p className="subheading mb-8 slide-up">{userDetails.title}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 scale-in">
            <Link
              href="#projects"
              className="px-6 py-3 bg-primary text-white dark:text-slate-900 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-transparent border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

