import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Zaftech — Enterprise AI Consulting Canada'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: '#93c5fd',
            marginBottom: 20,
            letterSpacing: '-2px',
          }}
        >
          Zaftech
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#bfdbfe',
            textAlign: 'center',
            maxWidth: 860,
            lineHeight: 1.4,
            marginBottom: 30,
          }}
        >
          Enterprise AI Consulting Canada
        </div>
        <div style={{ display: 'flex', gap: 32, color: '#60a5fa', fontSize: 22 }}>
          <span>Private LLMs</span>
          <span>·</span>
          <span>Agentic AI</span>
          <span>·</span>
          <span>Compliance-First</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
