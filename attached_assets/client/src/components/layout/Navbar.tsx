import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center text-black">
      <Link 
        href="/" 
        className="font-serif text-2xl font-bold tracking-tighter hover:italic transition-all duration-300 uppercase"
      >
        Lena Bibbo
      </Link>

      <div className="flex gap-8">
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className={cn(
              "font-mono text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300",
              location === link.href && "line-through decoration-primary decoration-2"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
