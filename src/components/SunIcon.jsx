import { motion } from "framer-motion";

export default function SunIcon({ size = 80, glow = false }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={glow ? { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="drop-shadow-[0_0_20px_rgba(255,179,0,0.5)]"
    >
      {/* Outer rays */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 60 + Math.cos(angle) * 38;
        const y1 = 60 + Math.sin(angle) * 38;
        const x2 = 60 + Math.cos(angle) * 54;
        const y2 = 60 + Math.sin(angle) * 54;
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#goldGrad)"
            strokeWidth={i % 2 === 0 ? 3.5 : 2}
            strokeLinecap="round"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        );
      })}
      {/* Inner sun circle */}
      <circle cx="60" cy="60" r="28" fill="url(#sunFill)" />
      {/* Lion silhouette / face lines */}
      <path
        d="M50 55 Q55 48 60 50 Q65 48 70 55"
        stroke="#4D3500"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="53" cy="56" r="2" fill="#4D3500" />
      <circle cx="67" cy="56" r="2" fill="#4D3500" />
      <path
        d="M56 64 Q60 68 64 64"
        stroke="#4D3500"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Mane strokes */}
      <path
        d="M38 40 Q44 32 52 34"
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M82 40 Q76 32 68 34"
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M36 52 Q30 46 34 38"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M84 52 Q90 46 86 38"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient id="sunFill" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FF8F00" />
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
