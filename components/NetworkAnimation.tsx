'use client';

import { useEffect, useRef } from 'react';

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const NODE_COUNT = 55;
    const CONNECT_DIST = 130;
    const NAVY = '#0d1117';

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas!.width,
      y: Math.random() * canvas!.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 1.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Track mouse via window so events pass through the content layer above
    let mouse = { x: -999, y: -999 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => { mouse.x = -999; mouse.y = -999; };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let animId: number;

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;

      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = NAVY;
      ctx!.fillRect(0, 0, w, h);

      // Move nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.pulse += 0.02;
      });

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.4;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(56, 140, 255, ${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }

      // Draw spider-web lines from nodes to mouse cursor
      const mouseR = 120;
      nodes.forEach(n => {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseR) {
          const alpha = (1 - dist / mouseR) * 0.7;
          ctx!.beginPath();
          ctx!.moveTo(n.x, n.y);
          ctx!.lineTo(mouse.x, mouse.y);
          ctx!.strokeStyle = `rgba(100, 200, 255, ${alpha})`;
          ctx!.lineWidth = 0.8;
          ctx!.stroke();
        }
      });

      // Draw nodes: core + soft outer glow
      nodes.forEach(n => {
        const glow = 0.6 + 0.4 * Math.sin(n.pulse);

        // Outer glow ring
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r * 2.2 * glow, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(56, 120, 255, ${0.12 * glow})`;
        ctx!.fill();

        // Core dot
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r * glow, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(80, 160, 255, ${0.7 * glow})`;
        ctx!.fill();
      });

      // Draw cursor dot when on canvas
      if (mouse.x !== -999) {
        ctx!.beginPath();
        ctx!.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(160, 220, 255, 0.9)';
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
        ctx!.strokeStyle = 'rgba(100, 180, 255, 0.3)';
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      // Subtle ZAFTECH watermark
      ctx!.font = '500 13px sans-serif';
      ctx!.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx!.textAlign = 'left';
      ctx!.fillText('ZAFTECH', 24, h - 18);

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        background: '#0d1117',
        pointerEvents: 'none', // let clicks/hover pass through to page content
      }}
    />
  );
}
