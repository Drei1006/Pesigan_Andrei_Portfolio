"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pesigandrei1006@gmail.com",
    href: "mailto:pesigandrei1006@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 993 500 2603",
    href: "tel:+639935002603",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Batangas City, Philippines",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Drei1006",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrei-christopher-pesigan-631383397/",
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              Contact
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
            Get In Touch
          </h3>
          <p className="text-muted-foreground max-w-2xl">
            I&apos;m currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl border border-border p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Connect with me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-primary/10 rounded-2xl border border-primary/20">
              <p className="text-foreground font-medium mb-2">
                Open to opportunities
              </p>
              <p className="text-sm text-muted-foreground">
                I&apos;m actively seeking positions in software development, IT support, 
                or networking. Let&apos;s connect if you have an opportunity that matches 
                my skills!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
