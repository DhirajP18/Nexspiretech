"use client"

import { CheckCircle2 } from "lucide-react"

export default function OurWork() {
  const schoolERPFeatures = [
    "Admissions, Exams & Attendance Management",
    "Dynamic Timetables & Custom Report Cards",
    "Fee Collection, Payroll & Leave Management",
    "SMS, Email & Notification Integrations",
    "Library, Hostel & Transport Modules",
    "Teacher, Student & Parent Portals",
    "Role-Based Dashboards & Analytics",
    "Custom Permissions & Reports",
  ]

  const societyFeatures = [
    "Monthly Maintenance & Bill Generation",
    "Online Payments & Auto-Reminders",
    "Hall/Lawn Booking System",
    "Committee Member & Resident Portals",
    "Expense Management Reports",
    "Notices, Events & Document Sharing",
    "Transparent Accounting Dashboard",
    "Custom Modules for Apartment Needs",
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our Work
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* SCHOOL/EDUCATION ERP CARD */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg border border-teal-100 p-6 md:p-10 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-700 mb-4 text-center md:text-left">
              School & College Education ERP
            </h2>
            <p className="text-gray-700 mb-6 text-center md:text-left">
              Complete school management system to handle every academic and administrative task efficiently.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {schoolERPFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-600 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIETY MANAGEMENT CARD */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 md:p-10 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-4 text-center md:text-left">
              Society Management System
            </h2>
            <p className="text-gray-700 mb-6 text-center md:text-left">
              Manage residential societies efficiently with automation, reporting, and member portals.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {societyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
