import Image from "next/image"
import { GraduationCap, User } from "lucide-react"
import { userDetails } from "@/config/user-details"

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-100 dark:bg-slate-800/50">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <h2 className="heading mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Get to know more about me, my background, and what drives my passion for web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 slide-up">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">{userDetails.bio}</p>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              {`I'm always looking for new opportunities to learn and grow. Currently, I'm expanding my knowledge by
              learning Node.js and MongoDB to enhance my backend development skills.`}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                <User className="text-primary mb-2" size={24} />
                <h4 className="font-semibold mb-1">Personal Info</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400">
                  <li>Nationality: Nigerian</li>
                  <li>Languages: English</li>
                  <li>Gender: Male</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                <GraduationCap className="text-primary mb-2" size={24} />
                <h4 className="font-semibold mb-1">Education</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {userDetails.education.degree}
                  <br />
                  {userDetails.education.school}
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center scale-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/placeholder.svg?height=320&width=320" alt={userDetails.name} fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16 fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">My Hobbies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userDetails.hobbies.map((hobby, index) => (
              <div key={index} className="p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-center">
                <p className="font-medium">{hobby}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

