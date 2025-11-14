'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Heart, 
  Users, 
  Shield, 
  Ambulance,
  Calendar,
  Star,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  User,
  Stethoscope,
  Activity,
  Brain,
  Bone,
  Eye,
  Baby,
  Home
} from 'lucide-react'

export default function HospitalWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add smooth scroll behavior to document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    
    if (targetId === 'home') {
      // Scroll to top of page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      const element = document.getElementById(targetId)
      if (element) {
        const offset = 80 // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const services = [
    {
      id: 'cardiology',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Cardiology",
      description: "Advanced heart care and cardiovascular treatments",
      color: "from-red-50 to-red-100",
      details: {
        overview: "Our Cardiology department provides comprehensive care for heart and cardiovascular conditions using state-of-the-art technology and evidence-based treatments.",
        services: [
          "Echocardiography (ECHO)",
          "Stress Testing",
          "Cardiac Catheterization",
          "Pacemaker Implantation",
          "Coronary Angioplasty",
          "Heart Failure Management",
          "Arrhythmia Treatment",
          "Cardiac Rehabilitation"
        ],
        conditions: [
          "Coronary Artery Disease",
          "Heart Failure",
          "Arrhythmias",
          "Valvular Heart Disease",
          "Congenital Heart Defects",
          "Hypertension",
          "Cardiomyopathy"
        ],
        technology: [
          "3D Echocardiography",
          "Cardiac MRI",
          "Advanced Cath Labs",
          "Remote Monitoring Systems",
          "Minimally Invasive Surgery Equipment"
        ],
        team: "Led by board-certified cardiologists with over 20 years of combined experience in treating complex heart conditions."
      }
    },
    {
      id: 'neurology',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Neurology",
      description: "Comprehensive brain and nervous system care",
      color: "from-purple-50 to-purple-100",
      details: {
        overview: "Our Neurology department specializes in diagnosing and treating disorders of the brain, spinal cord, and nervous system with advanced neurological care.",
        services: [
          "EEG (Electroencephalography)",
          "EMG (Electromyography)",
          "Brain Imaging (MRI, CT)",
          "Stroke Treatment",
          "Epilepsy Management",
          "Movement Disorder Treatment",
          "Neuromuscular Disease Care",
          "Sleep Disorder Treatment"
        ],
        conditions: [
          "Stroke",
          "Epilepsy",
          "Parkinson's Disease",
          "Multiple Sclerosis",
          "Alzheimer's Disease",
          "Migraine Disorders",
          "Brain Tumors",
          "Spinal Cord Injuries"
        ],
        technology: [
          "High-Resolution MRI",
          "Digital EEG Systems",
          "Neurosurgical Navigation",
          "Deep Brain Stimulation",
          "Telemedicine Consultations"
        ],
        team: "Expert neurologists and neurosurgeons specializing in both common and complex neurological conditions."
      }
    },
    {
      id: 'orthopedics',
      icon: <Bone className="w-8 h-8 text-blue-500" />,
      title: "Orthopedics",
      description: "Bone, joint and musculoskeletal treatments",
      color: "from-blue-50 to-blue-100",
      details: {
        overview: "Our Orthopedics department provides comprehensive care for musculoskeletal conditions, from sports injuries to joint replacement surgeries.",
        services: [
          "Joint Replacement Surgery",
          "Arthroscopy",
          "Fracture Treatment",
          "Sports Medicine",
          "Spine Surgery",
          "Hand Surgery",
          "Foot and Ankle Care",
          "Physical Therapy"
        ],
        conditions: [
          "Osteoarthritis",
          "Rheumatoid Arthritis",
          "Fractures",
          "Sports Injuries",
          "Back Pain",
          "Scoliosis",
          "Carpal Tunnel Syndrome",
          "Tendon Injuries"
        ],
        technology: [
          "Robotic Surgery Systems",
          "3D Imaging for Joint Planning",
          "Computer-Assisted Navigation",
          "Arthroscopic Equipment",
          "Advanced Rehabilitation Tools"
        ],
        team: "Board-certified orthopedic surgeons with expertise in minimally invasive techniques and sports medicine."
      }
    },
    {
      id: 'ophthalmology',
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: "Ophthalmology",
      description: "Complete eye care and vision correction",
      color: "from-green-50 to-green-100",
      details: {
        overview: "Our Ophthalmology department offers comprehensive eye care, from routine eye exams to advanced surgical procedures for vision correction.",
        services: [
          "LASIK Surgery",
          "Cataract Surgery",
          "Glaucoma Treatment",
          "Retinal Surgery",
          "Corneal Transplants",
          "Pediatric Eye Care",
          "Ocular Plastic Surgery",
          "Vision Therapy"
        ],
        conditions: [
          "Cataracts",
          "Glaucoma",
          "Macular Degeneration",
          "Diabetic Retinopathy",
          "Refractive Errors",
          "Dry Eye Syndrome",
          "Eye Infections",
          "Strabismus"
        ],
        technology: [
          "Femtosecond LASIK",
          "OCT Imaging",
          "Visual Field Testing",
          "Corneal Topography",
          "Advanced Microscopes"
        ],
        team: "Experienced ophthalmologists specializing in both medical and surgical eye treatments."
      }
    },
    {
      id: 'pediatrics',
      icon: <Baby className="w-8 h-8 text-pink-500" />,
      title: "Pediatrics",
      description: "Specialized healthcare for children",
      color: "from-pink-50 to-pink-100",
      details: {
        overview: "Our Pediatrics department provides comprehensive healthcare for infants, children, and adolescents with child-friendly approaches and family-centered care.",
        services: [
          "Well-Child Exams",
          "Vaccinations",
          "Pediatric Emergency Care",
          "Developmental Screening",
          "Nutrition Counseling",
          "Adolescent Medicine",
          "Chronic Disease Management",
          "Behavioral Health"
        ],
        conditions: [
          "Asthma",
          "Allergies",
          "ADHD",
          "Childhood Obesity",
          "Infectious Diseases",
          "Developmental Disorders",
          "Autoimmune Conditions",
          "Genetic Disorders"
        ],
        technology: [
          "Pediatric Monitoring Systems",
          "Child-Sized Equipment",
          "Neonatal Care Units",
          "Play Therapy Areas",
          "Telehealth for Children"
        ],
        team: "Board-certified pediatricians trained in the unique healthcare needs of children from birth through adolescence."
      }
    },
    {
      id: 'dental',
      icon: <Stethoscope className="w-8 h-8 text-cyan-500" />,
      title: "Dental Care",
      description: "Complete dental and oral health services",
      color: "from-cyan-50 to-cyan-100",
      details: {
        overview: "Our Dental Care department provides comprehensive oral health services, from preventive care to advanced restorative and cosmetic procedures.",
        services: [
          "General Dentistry",
          "Orthodontics",
          "Oral Surgery",
          "Periodontics",
          "Endodontics",
          "Cosmetic Dentistry",
          "Pediatric Dentistry",
          "Emergency Dental Care"
        ],
        conditions: [
          "Tooth Decay",
          "Gum Disease",
          "Malocclusion",
          "Tooth Loss",
          "Oral Infections",
          "TMJ Disorders",
          "Oral Cancer",
          "Dental Trauma"
        ],
        technology: [
          "Digital X-Rays",
          "3D Imaging",
          "Laser Dentistry",
          "CAD/CAM Technology",
          "Sedation Dentistry"
        ],
        team: "Experienced dentists and specialists providing comprehensive oral healthcare for all ages."
      }
    }
  ]

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ years",
      rating: 4.9,
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurosurgeon",
      experience: "20+ years",
      rating: 4.8,
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Emily Williams",
      specialty: "Pediatrician",
      experience: "12+ years",
      rating: 4.9,
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Robert Davis",
      specialty: "Orthopedic Surgeon",
      experience: "18+ years",
      rating: 4.7,
      image: "/api/placeholder/300/300"
    }
  ]

  const testimonials = [
    {
      name: "Maria Thompson",
      text: "The care I received was exceptional. The staff went above and beyond to ensure my comfort and recovery.",
      rating: 5,
      treatment: "Heart Surgery"
    },
    {
      name: "James Wilson",
      text: "Professional, compassionate, and thorough. They saved my life and I'm forever grateful.",
      rating: 5,
      treatment: "Emergency Care"
    },
    {
      name: "Lisa Anderson",
      text: "Best medical facility in the city. Clean, modern equipment and amazing doctors.",
      rating: 5,
      treatment: "General Checkup"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Advanced Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg backdrop-blur-lg bg-opacity-95' : 'bg-white/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="w-10 h-10 text-red-500 animate-pulse" />
                <Shield className="w-6 h-6 text-blue-500 absolute -bottom-1 -right-1" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  MedCare Plus
                </h1>
                <p className="text-xs text-gray-500">Advanced Healthcare</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a 
                href="#home" 
                onClick={(e) => smoothScroll(e, 'home')}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
              
              <div className="relative group">
                <a 
                  href="#services" 
                  onClick={(e) => smoothScroll(e, 'services')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
                {activeDropdown === 'services' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-200"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-2">
                      {services.slice(0, 4).map((service, index) => (
                        <a key={index} href="#" className="flex items-center space-x-3 p-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 rounded-lg transition-all duration-200">
                          <div className="p-2 bg-white rounded-lg shadow-sm">{service.icon}</div>
                          <div>
                            <p className="font-medium text-gray-800">{service.title}</p>
                            <p className="text-xs text-gray-500">{service.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="#doctors" 
                onClick={(e) => smoothScroll(e, 'doctors')}
                className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              >
                Doctors
              </a>
              
              <div className="relative group">
                <a 
                  href="#departments" 
                  onClick={(e) => smoothScroll(e, 'departments')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
                  onMouseEnter={() => setActiveDropdown('departments')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>Departments</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
                {activeDropdown === 'departments' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    onMouseEnter={() => setActiveDropdown('departments')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-2">
                      {['Emergency', 'ICU', 'Surgery', 'Pharmacy', 'Laboratory', 'Radiology'].map((dept, index) => (
                        <a key={index} href="#" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-600 transition-all duration-200">
                          {dept}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="#appointment" 
                onClick={(e) => smoothScroll(e, 'appointment')}
                className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              >
                Appointment
              </a>
              
              <a 
                href="#contact" 
                onClick={(e) => smoothScroll(e, 'contact')}
                className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              >
                Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Emergency
              </Button>
              <Button 
                  className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105"
                  onClick={(e) => smoothScroll(e, 'appointment')}
                >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#home" 
                onClick={(e) => smoothScroll(e, 'home')}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-500 font-medium"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
              <a 
                href="#services" 
                onClick={(e) => smoothScroll(e, 'services')}
                className="block text-gray-700 hover:text-red-500 font-medium"
              >Services</a>
            <a 
              href="#doctors" 
              onClick={(e) => smoothScroll(e, 'doctors')}
              className="block text-gray-700 hover:text-red-500 font-medium"
            >Doctors</a>
            <a 
              href="#departments" 
              onClick={(e) => smoothScroll(e, 'departments')}
              className="block text-gray-700 hover:text-red-500 font-medium"
            >Departments</a>
            <a 
              href="#appointment" 
              onClick={(e) => smoothScroll(e, 'appointment')}
              className="block text-gray-700 hover:text-red-500 font-medium"
            >Appointment</a>
            <a 
              href="#contact" 
              onClick={(e) => smoothScroll(e, 'contact')}
              className="block text-gray-700 hover:text-red-500 font-medium"
            >Contact</a>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full border-red-500 text-red-500">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-red-500 to-blue-500"
                  onClick={(e) => smoothScroll(e, 'appointment')}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-red-100 text-red-700 px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Accredited Healthcare Provider
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Health is Our 
                <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"> Priority</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class healthcare with our team of expert doctors, 
                cutting-edge technology, and compassionate care tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={(e) => smoothScroll(e, 'appointment')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-red-500 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 911
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">500+</div>
                  <div className="text-sm text-gray-600">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">50+</div>
                  <div className="text-sm text-gray-600">Specialties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">99.9%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-800">Quick Appointment</h3>
                      <Calendar className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="space-y-4">
                      <Input placeholder="Your Name" className="border-gray-200 focus:border-red-500" />
                      <Input placeholder="Phone Number" className="border-gray-200 focus:border-red-500" />
                      <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-red-500 focus:outline-none">
                        <option>Select Department</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Orthopedics</option>
                        <option>Pediatrics</option>
                      </select>
                      <Button className="w-full bg-gradient-to-r from-red-500 to-blue-500">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg animate-bounce">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg animate-pulse">
                <Activity className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section id="departments" className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">24/7 Emergency Services</h2>
            <p className="text-red-100 text-lg">We're always here when you need us most</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Ambulance className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Ambulance</h3>
                <p className="text-sm text-red-100">Quick response time</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Emergency Room</h3>
                <p className="text-sm text-red-100">24/7 available</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">ICU Care</h3>
                <p className="text-sm text-red-100">Critical care unit</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Helpline</h3>
                <p className="text-sm text-red-100">1-800-MEDCARE</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine checkups to complex surgeries, we offer a wide range of medical services 
              to meet all your healthcare needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="mt-4 text-red-500 hover:text-red-600 hover:bg-red-50 p-0"
                    onClick={() => setSelectedService(service.id)}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSelectedService(null)}></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className={`sticky top-0 z-10 bg-gradient-to-r ${services.find(s => s.id === selectedService)?.color} p-6 rounded-t-2xl`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-xl shadow-lg">
                      {services.find(s => s.id === selectedService)?.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {services.find(s => s.id === selectedService)?.title}
                      </h2>
                      <p className="text-gray-600">
                        {services.find(s => s.id === selectedService)?.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-500" />
                    Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {services.find(s => s.id === selectedService)?.details.overview}
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-green-500" />
                    Our Services
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.find(s => s.id === selectedService)?.details.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conditions Treated */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    Conditions We Treat
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {services.find(s => s.id === selectedService)?.details.conditions.map((condition, index) => (
                      <div key={index} className="p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-100">
                        <span className="text-gray-700 font-medium">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-500" />
                    Advanced Technology
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.find(s => s.id === selectedService)?.details.technology.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-500" />
                    Our Medical Team
                  </h3>
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-100">
                    <p className="text-gray-700 leading-relaxed">
                      {services.find(s => s.id === selectedService)?.details.team}
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white"
                    onClick={(e) => {
                      setSelectedService(null)
                      smoothScroll(e, 'appointment')
                    }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-50"
                    onClick={(e) => {
                      setSelectedService(null)
                      smoothScroll(e, 'contact')
                    }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Department
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Expert Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Doctors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of highly qualified and experienced doctors are dedicated to providing 
              the best possible care for our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-blue-100 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                      Available
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {doctor.name}
                  </CardTitle>
                  <CardDescription className="text-red-500 font-medium">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({doctor.rating})</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{doctor.experience} experience</p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Profile
                    </Button>
                    <Button size="sm" className="flex-1 bg-red-500 hover:bg-red-600">
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 mb-4">Book Appointment</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Schedule Your Visit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book your appointment online and our team will confirm your booking within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Appointment Booking</CardTitle>
                <CardDescription>Fill in your details and we'll contact you shortly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" />
                <Input placeholder="Phone Number" />
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-red-500 focus:outline-none">
                  <option>Select Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>Dental Care</option>
                  <option>Emergency</option>
                </select>
                <input 
                  type="date" 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-red-500 focus:outline-none"
                />
                <textarea 
                  placeholder="Describe your symptoms or reason for visit (optional)"
                  rows={3}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-red-500 focus:outline-none resize-none"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-lg py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-l-4 border-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Call Us</h3>
                      <p className="text-gray-600 mb-2">Speak directly with our medical staff</p>
                      <p className="font-semibold text-red-500">1-800-MEDCARE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email Us</h3>
                      <p className="text-gray-600 mb-2">Send us your appointment request</p>
                      <p className="font-semibold text-blue-500">appointments@medcareplus.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Working Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sat-Sun: 9:00 AM - 6:00 PM</p>
                      <p className="font-semibold text-green-500">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Patient Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real patients who have experienced our exceptional care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Have questions or need to schedule an appointment? Our team is here to help you 
                with all your healthcare needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-300">123 Medical Center Drive, Healthcare City, HC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-300">Main: (555) 123-4567</p>
                    <p className="text-gray-300">Emergency: (555) 911-HELP</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-300">info@medcareplus.com</p>
                    <p className="text-gray-300">emergency@medcareplus.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-500 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <p className="text-gray-300">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Sat-Sun: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" />
                  <Input placeholder="Phone Number" />
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-red-500 focus:outline-none">
                    <option>Select Department</option>
                    <option>General Inquiry</option>
                    <option>Appointment Booking</option>
                    <option>Emergency</option>
                    <option>Billing</option>
                  </select>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-red-500 focus:outline-none resize-none"
                  ></textarea>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <h3 className="text-xl font-bold">MedCare Plus</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in health and wellness, providing exceptional care with compassion.
              </p>
              <div className="flex space-x-3">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Doctors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Departments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cardiology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Neurology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Orthopedics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pediatrics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get health tips and updates</p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                <Button className="bg-red-500 hover:bg-red-600">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MedCare Plus. All rights reserved. | 
              <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a> | 
              <a href="#" className="hover:text-white transition-colors"> Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}