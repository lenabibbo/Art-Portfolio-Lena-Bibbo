import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/light_grey_grunge_glitter_texture.png"; // Generated image

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-background text-foreground">
      {/* Background Layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="font-serif text-[12vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-500 uppercase mix-blend-multiply">
            Lena Bibbo
          </h1>
          <h1 className="font-serif text-[12vw] leading-[0.8] tracking-tighter text-black/10 absolute top-2 left-2 pointer-events-none uppercase">
            Lena Bibbo
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-[-2vw] relative z-20"
        >
          <h2 className="font-serif italic text-3xl md:text-5xl text-primary drop-shadow-md">
            AP 2D & Design Portfolio
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-48"
        >
          <Link 
            href="/portfolio"
            className="group inline-flex items-center gap-2 font-mono text-xl uppercase tracking-widest border border-black/80 bg-white/50 backdrop-blur-sm px-10 py-4 text-black hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-lg"
          >
            AP 2D
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute bottom-10 left-10 font-mono text-xs text-black/40 rotate-90 origin-bottom-left">
        EST. 2025 // NYC
      </div>
    </div>
  );
}
