"use client"

import Image from 'next/image';
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Market Fresh Food Platform",
      description: "Full-stack web application for online food ordering, PhaJay (laos payment gateway) integration",
      technologies: ["MVC Design Pattern", "Client-Server System Model", "Next.js","Tailwind CSS", "Node.js", "MongoDB", "Docker", "Rest API", "Logging", "Caching", "..."],
      image: "/supplier.png",
    },
    {
      title: "Aoser Dashboard & Backend",
      description: "Dev-Ops for admin dashboard & Application's Backend, Lao bank integration, maintenance",
      technologies: ["Monolithic Architecture", "Client-Server System Model", "TypeScript", "Node.js", "Joi", "mongoose", "MongoDB", "Next.js","Tailwind", "Rest API", "pm2","..."],
      image: "/aoser.png",
    },
    {
      title: "Carlsberg Promotion Lucky Draw",
      description: "Backend development for a carlsberg promotion lucky draw, integration with Chat GPT api and Cloud vision api",
      technologies: ["Node.js", "Express.js", "MongoDB", "Image detection logic", "Logging", "..."],
      image: "/carberg.png",
    },
  ]

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "PHP",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
  ]

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks",
      features: ["React & Next.js", "JavaScript", "TypeScript", "Responsive Design", "Performance Optimization"],
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Building scalable server-side applications and APIs",
      features: ["Node.js & Express", "Python & Django", "Database Design", "API Development", "Cloud Integration"],
    },
    {
      icon: "🎨",
      title: "System Design",
      description: "Designing efficient and scalable systems for web applications",
      features: ["Scalability", "Performance Tuning", "Load Balancing", "Security", "Caching", "Queues & Messaging", "Consistency & Availability", "Design patterns"],
    },
  ]

  const experience = [
    {
      company: "iATER",
      position: "iATER-member",
      period: "2021 - current",
      description: "Teaching computer lesson, developing web apps, Spend 10 hours to living in front of the computer every day.",
      achievements: ["Teach 6+ classes", "Implemented 3+ workshops", "Implemented 3+ projects"],
    },
    {
      company: "Appzap",
      position: "Full Stack Developer",
      period: "2024 - current",
      description: "Part-time working for Appzap, Developed and maintained complex web applications using Next.js, Node.js, and MongoDB, intergrating with Lao payment gateway.",
      achievements: ["Leader of Supplier production DEV team", "Implemented CI/CD pipeline"],
    },
    {
      company: "LAILAOLAB",
      position: "Backend Developer",
      period: "2023 - 2024",
      description: "Developed REST apis",
      achievements: ["Built 4 client projects", "Flow chat and logic designing"],
    },
    {
      company: "U-Learn",
      position: "Backend Engineering",
      period: "2023 - 2024",
      description: "Start working with real-time projects",
      achievements: ["Intern develop 2+ projects", "Implemented Real-time database"],
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Product Manager at TechCorp",
      content:
        "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the project a huge success.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      position: "CEO at StartupXYZ",
      content:
        "Working with Alex was fantastic. He not only delivered high-quality code but also provided valuable insights that improved our product.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      position: "Design Lead at Creative Agency",
      content:
        "Alex perfectly translated our designs into pixel-perfect, responsive web applications. His collaboration skills are outstanding.",
      avatar: "ER",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/5"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
              Hi, I'm <span className="text-accent">Done Yang</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Full-Stack Engineering crafting digital experiences with modern technologies
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              I will turn your complex problems to simple solutions.
            </p>
            <Button size="lg" className="animate-pulse-glow hover:scale-105 transition-transform duration-300">
              <a href="#experience">View Experiences</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Full-Stack Engineer with 2 years of experience. I focus on designing the system infrastructure and logic flow, then use AI to generate and optimize the code. I love turning complex problems into simple, scalable digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing free coding course to younger students, or
                sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform duration-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                    // src="https://pub-fe8adea94e294daf99be513d95a9cbd0.r2.dev/done-profile.jpg"
                    src="/profile.png"
                    alt="done profile"
                    width={350}
                    height={500}
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl -z-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What I Do</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              I prefer to keep it simple and focus on the core features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border-2 hover:border-accent/50 bg-background/50 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-pretty">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30" id="experience">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              My professional journey in software development
            </p>
          </div>

          {/* Timeline container */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            {/* Horizontal line connecting dots */}
            <div className="absolute top-[-5px] left-0 right-0 h-0.5 bg-accent/30 z-0"></div>
            
            {experience.map((exp, index) => (
              <div key={index} className="relative group z-10">
                {/* Dot indicator on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="mt-6 group-hover:translate-y-2 transition-transform duration-300">
                  <Card className="group-hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
                          {exp.position}
                        </CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                      <p className="text-muted-foreground text-pretty">
                        {exp.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Clients Say</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Testimonials from satisfied clients and colleagues
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-accent/50 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors duration-300">
                      <span className="text-accent font-bold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic text-pretty group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Feature Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-accent/50 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-pretty">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:animate-pulse">10+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:animate-pulse">2+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:animate-pulse">4+</div>
              <p className="text-muted-foreground">Work places</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:animate-pulse">15+</div>
              <p className="text-muted-foreground">Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">doneyang2003@gmail.com</p>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300" onClick={() => window.open("https://github.com/Done-Yang")}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">GitHub</h3>
              <p className="text-muted-foreground">Done-Yang</p>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300" onClick={() => window.open("https://www.instagram.com/yyydone") }>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/1000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground">yyydone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2026 Done Developer.</p>
        </div>
      </footer>
    </div>
  )
}
