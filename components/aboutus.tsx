"use client"

import { Linkedin, Mail, Twitter } from "lucide-react"

export default function AboutUs() {
  const team = [
    {
      name: "Dhiraj Patil",
      role: "CEO & Founder",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Michael Brown",
      role: "COO",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Emily Johnson",
      role: "Lead Designer",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-teal-50 to-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About NexSpire Technologies
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            At NexSpire Technologies, we deliver cutting-edge IT solutions that empower businesses to innovate, scale, and thrive.
          </p>
        </div>

        {/* Expert Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Expert Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
              <p className="text-gray-900 font-bold text-lg">{member.name}</p>
              <p className="text-gray-700 mb-3">{member.role}</p>
              <div className="flex justify-center gap-4 text-teal-600">
                <a href={member.linkedin}><Linkedin size={20} /></a>
                <a href={member.twitter}><Twitter size={20} /></a>
                <a href={`mailto:${member.email}`}><Mail size={20} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
