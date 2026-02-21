"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      time: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.radius = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.time = Math.random() * Math.PI * 2;
      }

      update() {
        // Add smooth wave motion
        this.time += 0.02;
        const waveX = Math.sin(this.time) * 10;
        const waveY = Math.cos(this.time * 0.7) * 10;

        this.x = this.baseX + waveX + this.vx;
        this.y = this.baseY + waveY + this.vy;

        // Wrap around edges
        if (this.x < 0) this.baseX = canvas.width;
        if (this.x > canvas.width) this.baseX = 0;
        if (this.y < 0) this.baseY = canvas.height;
        if (this.y > canvas.height) this.baseY = 0;
      }

      draw() {
        ctx.fillStyle = `rgba(201, 169, 110, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 6000; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: "transparent" }}
    />
  );
}
