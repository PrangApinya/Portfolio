"use client"

import { useState } from "react"
import { ExternalLink, Layers, Users, ShoppingCart, X, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const projects = [
  {
    icon: Users,
    title: "Beauty Pageant Information System",
    description:
      "A web-based system for managing beauty pageant events, including contestant registration, event management, and public information display in a centralized platform.",
    responsibilities: "Business Analyst, UI/UX Designer, System Testing",
    tags: ["Business Analysis", "UI/UX Design", "Testing"],
    fullDescription: `This project was developed to improve the user experience of beauty pageant management by transforming complex and manual workflows into a streamlined digital platform.

Key Features:
- Online Application Portal: Allows contestants to submit their applications digitally with all required documents and photos
- Admin Dashboard: Complete management interface for organizers to review applications, manage schedules, and track participant data
- News & Updates: Dynamic content management for announcements, schedules, and event details
- Sponsor Management: Dedicated section for showcasing sponsors and managing partnerships
- Verification System: Built-in tools for validating applicant information and documents`,
    highlights: [
      "Improved workflow efficiency by centralizing event management",
      "Designed intuitive UI for better user experience",
      "Reduced manual processes and data redundancy",
      "Built scalable system for managing large datasets",
    ],
    technologies: ["Figma", "visual studio", "visual studio Code", "SQL Server Management Studio"],
    figmaLink: "https://www.figma.com/design/S9qfXUizBM3G8N6sHMgDsT/Beauty-Pageant-Information-System?node-id=0-1&m=dev&t=S7h3b7TcKuCwm1Bg-1",
    images: [
      {
        src: "/images/listofall.png",
        alt: "Event listing grid view - showing upcoming beauty pageant events",
      },
      {
        src: "/images/Listofallouractivity(1).png",
        alt: "Event listing card view - detailed event cards display",
      },
      {
        src: "/images/section.png",
        alt: "Event creation form - admin interface for adding new events",
      },
    ],
  },
  {
    icon: ShoppingCart,
    title: "Cafe Management System",
    description:
      "A cafe management system that allows ordering beverages and desserts through a Touch Screen interface. Purchase data are stored in an SQLite database. The system supports employee check-in and check-out using RFID cards and displays daily sales data through a Dashboard",
    responsibilities: "UI/UX Design, Frontend Development",
    tags: ["UI/UX Design", "Frontend"],
    fullDescription: `A complete point-of-sale and management solution designed specifically for cafe operations, featuring an intuitive touch interface and comprehensive backend systems.

Key Features:
- Touch Screen POS: Intuitive ordering interface designed for quick and accurate order processing
- RFID Employee System: Secure check-in/out functionality using RFID cards for time tracking
- Real-time Dashboard: Visual representation of daily sales, popular items, and business metrics
- Inventory Tracking: Automatic stock updates based on sales data
- Report Generation: Daily, weekly, and monthly sales reports with export functionality`,
    highlights: [
      "Accurate employee attendance tracking",
      "Visual sales analytics for better decision making",
    ],
    technologies: ["Figma", "React.js", "HTML/CSS", "Node.js", "Express.js"],
    figmaLink: null,
    images: [
      {
        src: "/images/cafe-menu.png",
        alt: "POS Menu Interface - Touch screen menu with drink categories and pricing",
      },
      {
        src: "/images/cafe-cart.png",
        alt: "Shopping Cart - Order summary with quantity controls and total calculation",
      },
      {
        src: "/images/cafe-dashboard.png",
        alt: "Sales Dashboard - Top menu sales chart and daily sales pie chart analytics",
      },
      {
        src: "/images/cafe-attendance.png",
        alt: "Attendance System - Calendar view with RFID check-in and attendance records",
      },
      {
        src: "/images/cafe-staff.png",
        alt: "Staff Management - Employee list with CRUD operations and time attendance",
      },
    ],
  },
  {
    icon: Layers,
    title: "Collect Point System",
    description:
      "A food ordering system that allows customers to accumulate points. Admin can add, remove, or manage menu items and orders with full administrative controls.",
    responsibilities: "UI/UX Design, Frontend Development",
    tags: ["UI/UX Design", "Frontend"],
    fullDescription: `A loyalty-focused food ordering platform that rewards customers with points for every purchase, encouraging repeat business and customer engagement.

Key Features:
- Point Accumulation: Customers earn points based on purchase amount
- Reward Redemption: Points can be exchanged for discounts or free items
- Menu Management: Complete admin control over menu items, pricing, and availability
- Order Tracking: Real-time order status updates for customers and staff
- Customer Profiles: Track individual customer preferences and purchase history`,
    highlights: [
      "Easy-to-use admin interface for menu updates",
      "Flexible point earning and redemption rules",
    ],
    technologies: ["Figma", "React.js", "HTML/CSS", "Node.js", "Express.js"],
    figmaLink: null,
    images: [
       {
        src: "/images/Collect-1.png",
        alt: "POS Menu Interface - Touch screen menu with drink categories and pricing",
      },
      {
        src: "/images/Collect-2.png",
        alt: "Shopping Cart - Order summary with quantity controls and total calculation",
      },
      {
        src: "/images/Collect-3.png",
        alt: "Sales Dashboard - Top menu sales chart and daily sales pie chart analytics",
      },
      {
        src: "/images/Collect-4.png",
        alt: "Attendance System - Calendar view with RFID check-in and attendance records",
      },
      {
        src: "/images/Collect-5.png",
        alt: "Staff Management - Employee list with CRUD operations and time attendance",
      },
             {
        src: "/images/Collect-6.png",
        alt: "POS Menu Interface - Touch screen menu with drink categories and pricing",
      },
      {
        src: "/images/Collect-7.png",
        alt: "Shopping Cart - Order summary with quantity controls and total calculation",
      },
      {
        src: "/images/Collect-8.png",
        alt: "Sales Dashboard - Top menu sales chart and daily sales pie chart analytics",
      },
      {
        src: "/images/Collect-9.png",
        alt: "Attendance System - Calendar view with RFID check-in and attendance records",
      },
      {
        src: "/images/Collect-10.png",
        alt: "Staff Management - Employee list with CRUD operations and time attendance",
      },
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A few examples of work that combine practical solutions with polished UX/UI.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article
                key={project.title}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon */}
                <div className="mb-4 p-3 w-fit rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Role: </span>
                    {project.responsibilities}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-grow" />

                {/* View Details Button */}
                <Button
                  variant="default"
                  size="sm"
                  className="mt-4 w-full"
                  onClick={() => setSelectedProject(project)}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </article>
            )
          })}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <selectedProject.icon className="h-5 w-5 text-primary" />
                  </div>
                  <DialogTitle className="text-xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.responsibilities}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Project Screenshots */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Screenshots</h4>
                    <div className="flex flex-col gap-4">
                      {selectedProject.images.map((image, index) => (
                        <a
                          key={index}
                          href={image.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <ExternalLink className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                          </div>
                          <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {image.alt}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Figma Link - Below Screenshots */}
                {selectedProject.figmaLink && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Design</h4>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={selectedProject.figmaLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View Figma Design
                      </a>
                    </Button>
                  </div>
                )}

                {/* Full Description */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Overview</h4>
                  <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                    {selectedProject.fullDescription}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
