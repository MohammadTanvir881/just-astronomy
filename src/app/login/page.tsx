// components/astronomy-login.tsx
"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AstronomyLogin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const starsContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    
    console.log("Login attempt:", { email, password });
  };

  useEffect(() => {
    if (!starsContainerRef.current) return;

    // Clear existing stars
    starsContainerRef.current.innerHTML = '';

    // Create twinkling stars
    const starCount = 150;
    const container = starsContainerRef.current;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white animate-twinkle';

      // Random properties
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;
      const opacity = Math.random() * 0.5 + 0.1;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;
      star.style.opacity = `${opacity}`;

      container.appendChild(star);
    }
  }, []);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1471&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat p-4 overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      {/* Twinkling stars */}
      <div 
        ref={starsContainerRef} 
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Login card */}
      <Card className="relative z-20 w-full max-w-md border border-white/20 bg-this.state/10 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-white">
            Astronomy Club Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/90">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                ref={emailRef}
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/90">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                required
                ref={passwordRef}
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                placeholder="••••••••"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
            >
              Login
            </Button>

            <p className="text-center text-sm text-white/80">
              If you don't have an account, please contact the club president
            </p>
           <Link href="/"> <p className="text-gray-200 text-sm text-center hover:underline">Return Home</p></Link>
          </form>
        </CardContent>
      </Card>

      {/* Add the animation style */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle linear infinite;
        }
      `}</style>
    </div>
  );
}

export default AstronomyLogin;