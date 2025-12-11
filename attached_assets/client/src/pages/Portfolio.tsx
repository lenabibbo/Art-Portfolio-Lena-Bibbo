import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/portfolio-data";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";


export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-background pt-32 pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-black/20 pb-8">
          <div>
            <h1 className="font-serif text-6xl md:text-8xl text-black tracking-tighter">
              Selected Works
            </h1>
            <p className="font-mono text-primary mt-4 tracking-widest">
              /// 2023 — 2025
            </p>
          </div>
          <div className="font-mono text-xs text-gray-500 max-w-xs text-right mt-8 md:mt-0">
            A curation of mixed media, photography, and digital experiments.
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {portfolioItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden aspect-[3/4] border border-black/10 group-hover:border-primary/50 transition-colors duration-500 bg-white shadow-sm hover:shadow-xl">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply" />
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:contrast-125"
                    />
                    
                    {/* Polaroid-style label effect on hover */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 border-t border-black/10">
                      <h3 className="font-serif text-xl italic">{item.title}</h3>
                      <p className="font-mono text-xs mt-1 uppercase tracking-wider text-gray-500">{item.category}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-baseline opacity-50 group-hover:opacity-100 transition-opacity text-black">
                    <span className="font-mono text-xs">0{index + 1}</span>
                    <span className="font-mono text-xs">{item.year}</span>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-full max-h-[90vh] bg-white border-black/10 text-black p-0 overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <DialogTitle className="sr-only">{item.title}</DialogTitle>
                <DialogDescription className="sr-only">{item.description}</DialogDescription>
                
                <div className="relative w-full md:w-2/3 h-[50vh] md:h-auto bg-gray-50 flex items-center justify-center p-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-contain max-h-[85vh]"
                  />
                </div>
                <div className="p-8 md:p-12 w-full md:w-1/3 flex flex-col justify-center bg-white overflow-y-auto">
                  <span className="font-mono text-primary text-xs uppercase tracking-widest mb-4">
                    {item.category} // {item.year}
                  </span>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 italic text-black">
                      {item.title}
                    </h2>
                    <p className="font-mono text-sm md:text-base text-gray-600 leading-relaxed border-l-2 border-primary pl-4">
                      {item.description}
                    </p>
                    
                    <div className="mt-12 flex gap-2">
                      {['Pencil', 'Digital', 'Mixed'].map((tag) => (
                        <span key={tag} className="text-[10px] font-mono border border-black/20 px-2 py-1 rounded-full text-black/60">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
