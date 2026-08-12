const palettes = {
  mint: {
    bg: "#D4F0E4",
    skin: "#F5D6C6",
    hair: "#2D3142",
    shirt: "#5BB98A",
    accent: "#3D9970",
  },
  cyan: {
    bg: "#D6E8F7",
    skin: "#EBC9B0",
    hair: "#1E2A3A",
    shirt: "#4A90C4",
    accent: "#2E6FA8",
  },
  coral: {
    bg: "#FBE4DC",
    skin: "#C68642",
    hair: "#1A1A1A",
    shirt: "#E06B52",
    accent: "#C44D38",
  },
  pear: {
    bg: "#F5F0C8",
    skin: "#F0D1B8",
    hair: "#4A3728",
    shirt: "#D4C44A",
    accent: "#A89A2E",
  },
  lavender: {
    bg: "#E8E0F5",
    skin: "#D4A574",
    hair: "#2A2035",
    shirt: "#9B7FD4",
    accent: "#7258B0",
  },
};

function TeamIllustration({ variant = "mint", className = "" }) {
  const p = palettes[variant] ?? palettes.mint;

  return (
    <svg
      className={className}
      viewBox="0 0 400 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="400" height="450" fill={p.bg} />
      <ellipse cx="200" cy="390" rx="120" ry="28" fill={p.accent} opacity="0.12" />
      <path
        d="M118 360 C118 290 145 240 200 240 C255 240 282 290 282 360 Z"
        fill={p.shirt}
      />
      <path
        d="M145 365 C145 330 168 310 200 310 C232 310 255 330 255 365 L255 450 L145 450 Z"
        fill={p.shirt}
        opacity="0.92"
      />
      <circle cx="200" cy="185" r="72" fill={p.skin} />
      <path
        d="M128 150 C135 95 165 70 200 70 C235 70 265 95 272 150 C258 125 230 108 200 108 C170 108 142 125 128 150 Z"
        fill={p.hair}
      />
      <path
        d="M128 165 C118 195 120 230 135 250 C145 215 145 180 128 165 Z"
        fill={p.hair}
      />
      <path
        d="M272 165 C282 195 280 230 265 250 C255 215 255 180 272 165 Z"
        fill={p.hair}
      />
      <ellipse cx="175" cy="188" rx="8" ry="10" fill={p.hair} opacity="0.65" />
      <ellipse cx="225" cy="188" rx="8" ry="10" fill={p.hair} opacity="0.65" />
      <circle cx="175" cy="182" r="5" fill="#2D3142" />
      <circle cx="225" cy="182" r="5" fill="#2D3142" />
      <path
        d="M188 205 Q200 214 212 205"
        stroke="#C97B6A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="158" cy="198" r="10" fill="#F4A896" opacity="0.35" />
      <circle cx="242" cy="198" r="10" fill="#F4A896" opacity="0.35" />
      <rect x="60" y="60" width="56" height="56" rx="14" fill={p.accent} opacity="0.14" />
      <circle cx="330" cy="90" r="24" fill={p.accent} opacity="0.18" />
    </svg>
  );
}

export default TeamIllustration;
