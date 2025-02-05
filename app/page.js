"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink, Mail, Linkedin, Twitter, Instagram, Youtube, Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
    { icon: <Youtube className="w-4 h-4" />, href: "#" },
  ];

  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ];

  const projects = [
    {
      title: "AIA Employment Opportunities",
      description: "A comprehensive job portal platform built with Next.js and TailwindCSS.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "ECoin Generator",
      description: "Cryptocurrency tracking and portfolio management application.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio 24 News",
      description: "Real-time news aggregation platform with personalized feeds.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  const experiences = [
    {
      title: "Frontend Web Developer @ LabTech",
      period: "Dec 2022 - Present",
      description: "Developing large-scale B2C SaaS apps with Vue.js/Nuxt.js framework and leading frontend team.",
      skills: ["Vue.js", "Nuxt.js", "TailwindCSS", "Node.js", "REST"]
    },
    {
      title: "Full Stack Web Developer @ Freelance",
      period: "Jun 2020 - Present",
      description: "Building custom web applications and e-commerce solutions for clients worldwide.",
      skills: ["React", "Node.js", "MongoDB", "Express", "AWS"]
    },
    {
      title: "UI/UX Designer @ Freelance",
      period: "Nov 2021 - Present",
      description: "Creating user-centered designs and interactive prototypes for web and mobile applications.",
      skills: ["Figma", "Adobe XD", "Sketch", "UI/UX", "Prototyping"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#111] text-black dark:text-white">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-green-400">
            <Code2 className="inline-block mr-2" />
            <span>Rayan</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#about" className="hover:text-green-400 transition-colors">About me</Link>
            <Link href="#skills" className="hover:text-green-400 transition-colors">Skills</Link>
            <Link href="#work" className="hover:text-green-400 transition-colors">Work</Link>
            <Link href="#experience" className="hover:text-green-400 transition-colors">Experience</Link>
            <ThemeToggle />
            <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black dark:hover:text-white">
              Contact Us
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm<br />
            <span className="text-green-400">Rayan Ramazan,</span>
          </h1>
          <p className="text-xl mb-6">
            A Passionate <span className="text-green-400">Frontend Web Development</span> with 4 years
            experience creating user-friendly websites.
          </p>
          <Button className="w-fit bg-green-400 hover:bg-green-500 text-black dark:text-white">
            Book a Call
          </Button>
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1635107510862-53886e926b74?w=500&h=500&fit=crop"
            alt="Robot Assistant"
            width={500}
            height={500}
            className="rounded-2xl"
          />
          <div className="absolute top-4 right-4 bg-green-400/20 backdrop-blur-sm rounded-full px-4 py-2">
            Best Quality
          </div>
          <div className="absolute bottom-4 left-4 bg-green-400/20 backdrop-blur-sm rounded-full px-4 py-2">
            Responsive
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-[200px_1fr] gap-8">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div className="flex justify-center gap-2 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="p-2 hover:text-green-400 transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-400">
              Transforming visions into<br />exceptional portfolios
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate web developer with a keen eye for design and a commitment to creating 
              seamless user experiences. Specialized in building responsive, scalable web applications 
              using modern technologies and best practices. Constantly learning and adapting to new 
              technologies while maintaining a strong foundation in core web development principles.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <h2 className="text-center text-3xl font-bold mb-2 text-green-400">
          The skills, tools and technologies
        </h2>
        <p className="text-center mb-12 text-gray-600 dark:text-gray-300">I am really good at:</p>
        <div className="grid grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 bg-gray-100 dark:bg-[#222] border-none flex flex-col items-center">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="mb-4"
              />
              <span className="text-sm">{skill.name}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="container mx-auto px-4 py-20">
        <h2 className="text-center text-3xl font-bold mb-12 text-green-400">
          Things I've built so far
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-100 dark:bg-[#222] border-none overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github}>
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.demo}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-20">
        <h2 className="text-center text-3xl font-bold mb-12 text-green-400">
          Here is a quick summary of<br />my most recent experiences
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-100 dark:bg-[#222] border-none p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <Badge variant="outline">{exp.period}</Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
              <div className="flex gap-2 flex-wrap">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gray-100 dark:bg-[#222] border-none p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Start a project</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in working together? We should queue up a time to chat.
            </p>
            <Button className="bg-green-400 hover:bg-green-500 text-black dark:text-white">
              <Mail className="w-4 h-4 mr-2" />
              Let's do this
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-green-400">
            <Code2 className="inline-block mr-2" />
            <span>Rayan</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 dark:text-gray-300">+123 456 7890</span>
            <span className="text-gray-600 dark:text-gray-300">youremail@example.com</span>
            <div className="flex gap-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="p-2 hover:text-green-400 transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}