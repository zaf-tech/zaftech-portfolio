export default function HeroIllustration() {
  return (
    <div className="relative">
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -right-10 w-28 h-28 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="relative overflow-hidden ">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-accent-teal/10 pointer-events-none"></div> */}
        <div className="relative">
          {/* <div className="flex items-center gap-3 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <p className="text-sm font-medium text-text-light">
              Live status · Secure · Managed
            </p>
          </div> */}
          <svg
            viewBox="0 0 380 240"
            className="w-full mb-4 text-accent-teal"
            role="img"
            aria-label="MSP monitoring dashboard illustration"
          >
            <defs>
              <linearGradient
                id="nodeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient
                id="panelGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(20,184,166,0.25)" />
                <stop offset="100%" stopColor="rgba(37,99,235,0.15)" />
              </linearGradient>
            </defs>

            {/* Main monitoring dashboard panel */}
            <rect
              x="30"
              y="40"
              width="320"
              height="160"
              rx="20"
              fill="url(#panelGradient)"
              stroke="rgba(37,99,235,0.3)"
              strokeWidth="2.5"
            />

            {/* Dashboard header with security badge */}
            <rect
              x="50"
              y="58"
              width="280"
              height="24"
              rx="12"
              fill="white"
              opacity="0.95"
            />
            <circle
              cx="282"
              cy="70"
              r="8"
              fill="#14B8A6"
              opacity="0.9"
            />
            <circle
              cx="300"
              cy="70"
              r="8"
              fill="#2563EB"
              opacity="0.9"
            />
            <circle
              cx="318"
              cy="70"
              r="8"
              fill="#22C55E"
              opacity="0.9"
            />

            {/* Dashboard header indicator */}
            <rect
              x="54"
              y="61"
              width="98"
              height="18"
              rx="9"
              fill="url(#nodeGradient)"
              opacity="0.15"
            />
            <circle
              cx="62"
              cy="70"
              r="3"
              fill="url(#nodeGradient)"
              opacity="0.8"
            >
              <animate
                attributeName="opacity"
                values="0.8;0.3;0.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x="70"
              y="73"
              fill="rgba(37,99,235,0.9)"
              fontSize="10"
              fontWeight="700"
              fontStyle="italic"
              fontFamily="system-ui, sans-serif"
            >
              System Status
            </text>

            {/* Server/device status rows */}
            <rect
              x="50"
              y="98"
              width="200"
              height="16"
              rx="8"
              fill="white"
              opacity="0.9"
            />
            <circle
              cx="58"
              cy="106"
              r="5"
              fill="#22C55E"
              opacity="0.9"
            />

            <rect
              x="50"
              y="122"
              width="160"
              height="14"
              rx="7"
              fill="white"
              opacity="0.75"
            />
            <circle
              cx="58"
              cy="129"
              r="5"
              fill="#22C55E"
              opacity="0.9"
            />

            <rect
              x="50"
              y="144"
              width="140"
              height="14"
              rx="7"
              fill="white"
              opacity="0.65"
            />
            <circle
              cx="58"
              cy="151"
              r="5"
              fill="#F59E0B"
              opacity="0.9"
            />

            <rect
              x="50"
              y="166"
              width="120"
              height="14"
              rx="7"
              fill="white"
              opacity="0.55"
            />
            <circle
              cx="58"
              cy="173"
              r="5"
              fill="#22C55E"
              opacity="0.9"
            />

            {/* Network nodes and connections */}
            {/* Central hub node */}
            <circle
              cx="190"
              cy="200"
              r="16"
              fill="white"
              stroke="url(#nodeGradient)"
              strokeWidth="4"
            />
            <circle
              cx="190"
              cy="200"
              r="10"
              fill="url(#nodeGradient)"
              opacity="0.8"
            />

            {/* Connected nodes */}
            <circle
              cx="120"
              cy="200"
              r="12"
              fill="white"
              stroke="url(#nodeGradient)"
              strokeWidth="3"
            />
            <circle
              cx="120"
              cy="200"
              r="7"
              fill="#14B8A6"
              opacity="0.9"
            />

            <circle
              cx="260"
              cy="200"
              r="12"
              fill="white"
              stroke="url(#nodeGradient)"
              strokeWidth="3"
            />
            <circle
              cx="260"
              cy="200"
              r="7"
              fill="#2563EB"
              opacity="0.9"
            />

            {/* Connection lines */}
            <line
              x1="136"
              y1="200"
              x2="174"
              y2="200"
              stroke="url(#nodeGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />
            <line
              x1="206"
              y1="200"
              x2="248"
              y2="200"
              stroke="url(#nodeGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Cloud sync illustration - successful sync */}
            {/* Cloud shape */}
            <circle
              cx="285"
              cy="110"
              r="10"
              fill="url(#nodeGradient)"
              opacity="0.9"
            />
            <circle
              cx="295"
              cy="105"
              r="12"
              fill="url(#nodeGradient)"
              opacity="0.9"
            />
            <circle
              cx="307"
              cy="111"
              r="8"
              fill="url(#nodeGradient)"
              opacity="0.9"
            />
            <rect
              x="282"
              y="108"
              width="30"
              height="12"
              rx="6"
              fill="url(#nodeGradient)"
              opacity="0.9"
            />
            {/* Success checkmark */}
            <text
              x="295"
              y="115"
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontWeight="900"
            >
              ✔
            </text>

            {/* Security shield badge - below cloud */}
            <circle
              cx="295"
              cy="150"
              r="18"
              fill="white"
              stroke="url(#nodeGradient)"
              strokeWidth="3"
            />
            <path
              d="M295 140 L287 144 L287 152 Q287 156 291 158 L295 160 L299 158 Q303 156 303 152 L303 144 Z"
              fill="url(#nodeGradient)"
              opacity="0.8"
            />
          </svg>
          {/* <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
              <p className="text-xs text-text-light">Monitoring</p>
              <p className="text-base font-semibold text-primary">
                24/7 Live
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
              <p className="text-xs text-text-light">Response</p>
              <p className="text-base font-semibold text-primary">
                &lt; 1 hour
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
              <p className="text-xs text-text-light">Reliability</p>
              <p className="text-base font-semibold text-primary">
                99.9% SLA
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/70 border border-accent-teal/20 shadow-sm">
              <p className="text-xs text-text-light">Approach</p>
              <p className="text-base font-semibold text-primary">
                Proactive
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

