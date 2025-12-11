import { useEffect, useRef } from 'react';

export function GlitterOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.5 + 0.1
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.alpha += (Math.random() - 0.5) * 0.1;
        if (p.alpha < 0) p.alpha = 0;
        if (p.alpha > 1) p.alpha = 1;
        
        // Dark/Silver glitter for light background
        ctx.fillStyle = `rgba(100, 100, 100, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-noise fixed inset-0 z-0 pointer-events-none mix-blend-multiply opacity-30" />
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-10 pointer-events-none mix-blend-multiply opacity-60"
      />
    </>
  );
}
