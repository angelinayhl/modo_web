"use client"

import { Card, CardContent } from "@/components/ui/card"

const mentors = [
  {
    name: "Johnny Chang",
    title: "Computer Science Graduate Student",
    institution: "Stanford University",
    bio: "Johnny Chang is a Computer Science graduate student at Stanford University, where he received full funding as one of the most competitive applicants. He serves as Head TA and Project Lead for Stanford's flagship graduate-level AI courses in Deep Learning, Natural Language Processing, Computer Vision, and Big Data Systems, working with professors like Andrew Ng and Christopher Manning.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yEo3wJLx1dAidYgtKequHKsh7iNFio.png",
    email: "cjohnny@stanford.edu",
    phone: "217-848-4902",
    avatar: "JC",
  },
  {
    name: "Angelina You",
    title: "Management Science and Engineering Graduate Student",
    institution: "Stanford University",
    bio: "Angelina You is a Management Science and Engineering graduate student and Accel fellow at Stanford University. She has five years of experience in Data Science and Analytics at Meta and two other growth-stage startups. As a project manager at Statistics Without Borders, she leads cross-functional teams on machine learning and data visualization initiatives.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%281%29-kR5f4VWwD24k5AGcw4TLTYZEcyMIFY.png",
    email: "hyou9@stanford.edu",
    phone: "470-985-8625",
    avatar: "AY",
  },
  {
    name: "Cameron Hilman",
    title: "Aerospace Engineering Graduate Student",
    institution: "Stanford University",
    bio: "Cameron Hilman is a graduate student in Aerospace Engineering at Stanford University, where his research focuses on cutting-edge applications in spacecraft design and fluid dynamics. Prior to Stanford, he earned his undergraduate degree from MIT, where he contributed to advanced aerospace research and worked as a research assistant at multiple labs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1715809930834.jpeg-nmer5pQmubuNTC8Sqn1W5GsG6Eny0J.png",
    email: "",
    avatar: "CH",
  },
  {
    name: "Chinat Yu",
    title: "Stanford Graduate, MLH Top 50 Honoree",
    institution: "Stanford University",
    bio: "Chinat Yu is a Stanford graduate, MLH Top 50 honoree, and seasoned hackathon organizer and learning designer, with experience in over 20 hackathons as a participant, mentor, judge, and lead organizer. With a background in Computer Science and a Master's from Stanford's Learning, Design, and Technology (LDT) program.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1712897889049.jpeg-VVaglBfqwsEYA70UVFufLbiX6UO21z.png",
    email: "chinat@stanford.edu",
    phone: "443-722-4218",
    avatar: "CY",
  },
  {
    name: "Aditri",
    title: "Computer Science Master's Student",
    institution: "Stanford University",
    bio: "Aditri is a Computer Science master's student at Stanford University, where her work focuses on the intersection of AI, education, and interdisciplinary learning tools. She currently researches AI-powered tutoring systems under Professor Chris Gregg, designing intelligent tools that bridge STEM and humanities learning.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1741758171791.jpeg-80GhuOIW80mML3mZVlCybvEpU9CVN9.png",
    email: "",
    avatar: "AD",
  },
  {
    name: "Anushikha",
    title: "MS&E Graduate Student",
    institution: "Stanford University",
    bio: "Anushikha is a Master's student in the MS&E department at Stanford University, specializing in Technology and Engineering Management. She has taught numerous courses in entrepreneurship and product management, including the flagship startup course Lean Launchpad.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-28%20at%205.07.10%20PM.jpeg-YhxKfR2dFRw1iIAovqork0M1pgfS23.png",
    email: "",
    avatar: "AN",
  },
]

export default function MentorTeam() {
  return (
    <section id="mentors" className="py-20 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-secondary">
            Our <span className="text-primary">Stanford</span> Mentor Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from top graduate students and researchers from Stanford University
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <Card key={index} className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
              <div className="aspect-square relative overflow-hidden">
                {mentor.image && mentor.image.startsWith("https://") ? (
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl font-bold text-primary">
                          {mentor.avatar || mentor.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary">{mentor.name}</h3>
                <p className="text-primary font-medium">{mentor.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{mentor.institution}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{mentor.bio}</p>
                </div>
                {mentor.email && (
                  <div className="mt-4 pt-4 border-t border-primary/10">
                    <p className="text-sm">
                      <span className="font-medium">Contact: </span>
                      {mentor.email} {mentor.phone && `| ${mentor.phone}`}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
