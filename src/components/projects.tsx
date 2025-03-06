import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { userDetails } from "@/config/user-details"

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-100 dark:bg-slate-800/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading mb-4">My Projects</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
           {"Here are some of the projects I've been working on. More coming soon!"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userDetails.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

