'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight, 500);
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Configuration
    const NODE_COUNT = 55;
    const CONNECT_DIST = 130;
    const BASE_COLOR = { r: 61, g: 140, b: 255 };
    const ACCENT_COLOR = { r: 100, g: 200, b: 255 };
    const NAVY_BG = '#0d1117';

    // Initialize nodes
    const nodes: Node[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let time = 0;

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY - canvas.getBoundingClientRect().top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas with navy background
      ctx.fillStyle = NAVY_BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle grid pattern
      ctx.strokeStyle = 'rgba(61, 140, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      time += 0.01;

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Update pulse
        node.pulsePhase += 0.02;

        // Draw node with glow
        const pulseAmount = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const nodeRadius = node.radius * pulseAmount;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          nodeRadius * 3
        );
        glowGradient.addColorStop(
          0,
          `rgba(${ACCENT_COLOR.r}, ${ACCENT_COLOR.g}, ${ACCENT_COLOR.b}, ${node.opacity * 0.6 * pulseAmount})`
        );
        glowGradient.addColorStop(
          1,
          `rgba(${BASE_COLOR.r}, ${BASE_COLOR.g}, ${BASE_COLOR.b}, 0)`
        );
        ctx.fillStyle = glowGradient;
        ctx.fillRect(
          node.x - nodeRadius * 3,
          node.y - nodeRadius * 3,
          nodeRadius * 6,
          nodeRadius * 6
        );

        // Core node
        ctx.fillStyle = `rgba(${ACCENT_COLOR.r}, ${ACCENT_COLOR.g}, ${ACCENT_COLOR.b}, ${node.opacity * pulseAmount})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECT_DIST) {
            const opacity = (1 - distance / CONNECT_DIST) * 0.3;
            ctx.strokeStyle = `rgba(${BASE_COLOR.r}, ${BASE_COLOR.g}, ${BASE_COLOR.b}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          const force = (120 - distance) / 120;
          node.vx -= (dx / distance) * force * 0.3;
          node.vy -= (dy / distance) * force * 0.3;
        }
      });

      // Draw branding text (optional - only if you want ZAFTECH displayed)
      ctx.font = 'bold 14px "Inter", sans-serif';
      ctx.fillStyle = 'rgba(61, 140, 255, 0.4)';
      ctx.textAlign = 'left';
      ctx.fillText('ZAFTECH', 20, canvas.height - 20);

      // Performance stats (optional - helpful for debugging)
      ctx.font = '12px "Inter", sans-serif';
      ctx.fillStyle = 'rgba(100, 200, 255, 0.3)';
      ctx.fillText(`${nodes.length} agents active`, 20, 20);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto block bg-gradient-to-b from-slate-950 to-slate-900"
      style={{ display: 'block', background: '#0d1117' }}
    />
  );
}
