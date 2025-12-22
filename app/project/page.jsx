"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { LampContainer } from "@/components/ui/lamp";

export default function ProjectPage() {
    const projects = [
        { name: "THARUUX", active: true },
        { name: "VIVANTE", active: false },
        { name: "SFT WITH DILSHAN PERERA", active: false },
    ];

    const testimonials = [
        {
            quote: "ZYNEX transformed our vision into reality. Their attention to detail and innovative approach exceeded all our expectations. The final product was nothing short of exceptional.",
            name: "Alex Johnson",
            designation: "CEO, TechVentures",
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
        },
        {
            quote: "Working with ZYNEX was an absolute pleasure. They delivered a stunning website that perfectly captures our brand essence. Highly recommend their services!",
            name: "Sarah Chen",
            designation: "Marketing Director, Innovate Co",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&crop=face",
        },
        {
            quote: "The team at ZYNEX is incredibly talented and professional. They took our complex requirements and delivered a seamless, beautiful solution on time.",
            name: "Michael Roberts",
            designation: "Founder, StartupHub",
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
        },
        {
            quote: "Outstanding work from start to finish. ZYNEX's expertise in modern web technologies helped us achieve a competitive edge in our market.",
            name: "Emily Davis",
            designation: "CTO, Digital First",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=face",
        },
    ];

    return (
        <div className="min-h-screen bg-black orbitron-400">
            {/* Lamp Effect Header */}
            <LampContainer className="h-screen min-h-screen justify-start pt-20">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 py-4 text-center text-5xl md:text-8xl font-light tracking-[20px] md:tracking-[30px] text-white orbitron-400 drop-shadow-[0_0_15px_rgba(174,0,255,0.6)]"
                >
                    PROJECTS
                </motion.h1>
            </LampContainer>

            {/* Projects Section */}
            <div className="w-full py-20 px-4 md:px-20 relative overflow-hidden bg-black">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mt-10">
                        {/* Left Side - Project Filters */}
                        <div className="flex flex-col gap-4 w-full lg:w-1/4">
                            {projects.map((project, idx) => (
                                <motion.button
                                    key={idx}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-6 py-3 text-left orbitron-400 tracking-wider text-sm transition-all duration-300 rounded-lg border ${project.active
                                        ? "bg-gradient-to-r from-[#AE00FF] to-[#4000FF] border-transparent text-white shadow-lg shadow-[#AE00FF]/30"
                                        : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-[#AE00FF]/50"
                                        }`}
                                >
                                    {project.name}
                                </motion.button>
                            ))}
                        </div>

                        {/* Right Side - Project Showcase */}
                        <div className="flex-1 relative">
                            {/* Project Name Large Text */}
                            <div className="absolute left-0 bottom-1/4 z-10 pointer-events-none">
                                <motion.h3
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="designer text-[8vw] lg:text-[6vw] font-bold text-white/10 leading-none"
                                    style={{ fontFamily: "'Designer', sans-serif" }}
                                >
                                    THARUUX
                                </motion.h3>
                            </div>

                            {/* Project Showcase Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative ml-auto w-full lg:w-3/4 aspect-video bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl shadow-[#AE00FF]/10"
                            >
                                {/* Laptop Mockup */}
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="relative w-full max-w-md">
                                        {/* Laptop Screen */}
                                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-lg p-1">
                                            <div className="bg-black rounded-t-md aspect-video overflow-hidden">
                                                <Image
                                                    src="/tharuxx.png"
                                                    alt="THARUUX Portfolio"
                                                    width={800}
                                                    height={450}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                        </div>
                                        {/* Laptop Base */}
                                        <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-3 rounded-b-lg relative">
                                            <div className="absolute inset-x-0 -bottom-1 h-1 bg-gray-900 rounded-full mx-auto w-1/4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
                                    <span className="text-white/30 text-xs orbitron-400">01</span>
                                    <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#AE00FF]/50" />
                                </div>

                                {/* Technologies Used */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                    <span className="text-white/40 text-xs orbitron-400 tracking-wider">BUILT WITH</span>
                                    <div className="flex items-center gap-2">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="flex items-center gap-1.5 px-2 py-1 bg-white/10 border border-white/20 rounded-md hover:border-[#AE00FF]/50 transition-all duration-300 cursor-pointer"
                                        >
                                            <SiNextdotjs className="text-sm text-white" />
                                            <span className="text-white/70 text-[10px] orbitron-400">Next.js</span>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="flex items-center gap-1.5 px-2 py-1 bg-white/10 border border-white/20 rounded-md hover:border-[#AE00FF]/50 transition-all duration-300 cursor-pointer"
                                        >
                                            <TbBrandThreejs className="text-sm text-white" />
                                            <span className="text-white/70 text-[10px] orbitron-400">Three.js</span>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* View Project Link */}
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="absolute bottom-4 right-4 text-[#AE00FF]/70 text-sm orbitron-400 cursor-pointer hover:text-[#AE00FF] transition-colors flex items-center gap-2"
                                >
                                    View Project <span>→</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="w-full min-h-screen py-20 px-4 md:px-20 relative overflow-hidden bg-black">
                <div className="absolute inset-0 pointer-events-none" />
                <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="orbitron-400 text-white tracking-[10px] text-4xl md:text-5xl mb-4">TESTIMONIALS</h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">Hear what our clients have to say about working with us</p>
                    </div>
                    <AnimatedTestimonials
                        testimonials={testimonials}
                        autoplay={true}
                    />
                </div>
            </div>
        </div>
    );
}
