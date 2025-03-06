import { Code, Server, Figma, Github } from "lucide-react"
import { userDetails } from "@/config/user-details"

export default function Skills() {
  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-slate-600 dark:text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <h2 className="heading mb-4">My Skills</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Here are the technologies and tools I've been working with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm slide-up">
            <div className="flex items-center mb-6">
              <Code className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-bold">Frontend Development</h3>
            </div>
            {userDetails.skills.frontend.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm slide-up">
            <div className="flex items-center mb-6">
              <Server className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-bold">Backend Development</h3>
            </div>
            {userDetails.skills.backend.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm slide-up">
            <div className="flex items-center mb-6">
              <Figma className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-bold">Design</h3>
            </div>
            {userDetails.skills.design.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm slide-up">
            <div className="flex items-center mb-6">
              <Github className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-bold">Tools</h3>
            </div>
            {userDetails.skills.tools.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

