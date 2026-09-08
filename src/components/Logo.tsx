import { Link } from "react-router"

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <div className="relative w-9 h-9 shrink-0">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect
            width="36"
            height="36"
            rx="8"
            fill="#0c1120"
            stroke="rgba(0,200,240,0.35)"
            strokeWidth="1"
          />
          <path
            d="M9 18 C9 12.8 13 9 18 9 C23 9 27 12.8 27 17.5 L21.5 17.5 L21.5 19.5 L27 19.5 C26.4 23.8 23 27 18 27 C13 27 9 23.2 9 18Z"
            stroke="#00c8f0"
            strokeWidth="1.5"
            fill="none"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="18" r="1.5" fill="#00c8f0" />
          <circle cx="27" cy="17.5" r="1.5" fill="#7b61ff" />
          <circle cx="18" cy="9" r="1.5" fill="#00c8f0" />
          <line
            x1="3"
            y1="18"
            x2="7.5"
            y2="18"
            stroke="rgba(0,200,240,0.5)"
            strokeWidth="1"
          />
          <line
            x1="28.5"
            y1="17.5"
            x2="33"
            y2="17.5"
            stroke="rgba(123,97,255,0.5)"
            strokeWidth="1"
          />
          <line
            x1="18"
            y1="3"
            x2="18"
            y2="7.5"
            stroke="rgba(0,200,240,0.5)"
            strokeWidth="1"
          />
          <circle cx="3" cy="18" r="1" fill="rgba(0,200,240,0.6)" />
          <circle cx="33" cy="17.5" r="1" fill="rgba(123,97,255,0.6)" />
          <circle cx="18" cy="3" r="1" fill="rgba(0,200,240,0.6)" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className="text-[15px] font-extrabold tracking-tight text-white"
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
        >
          GURUKUL
        </span>
        <span
          className="text-[7.5px] font-semibold tracking-[0.12em] text-[#00c8f0] uppercase mt-[1px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          INNOVATION ACADEMY
        </span>
      </div>
    </Link>
  )
}
