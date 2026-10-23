import { motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useId, useState } from "react";
import { duration, ease } from "../../motion/motion";

/**
 * Monograma GFC aprovado, reconstruído como vetor a partir da prancha de referência
 * (docs/visual-audit/monograma/gfc-mark.svg). Três fitas: azul-petróleo (G), creme e coral (F)
 * e verde (C). A entrada acontece uma vez por sessão; depois a marca aparece pronta.
 */
const STORAGE_KEY = "gfc-mark-played";

const alreadyPlayed = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const TEAL = "M738 90 L395 88 C300 88 240 122 190 178 C110 258 50 320 50 450 L50 600 C50 640 120 690 190 715 L190 520 C190 340 300 215 410 215 L592 215 C606 215 618 211 630 199 Z";
const CREAM = "M780 295 L470 293 C370 293 285 360 282 470 L281 880 L400 797 L400 500 C400 450 430 415 500 415 L655 415 C668 415 679 410 690 398 Z";

const Monogram: React.FC<{ className?: string; still?: boolean }> = ({ className, still = false }) => {
  const reduce = !!useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const [skip] = useState(() => still || reduce || alreadyPlayed());
  const id = (name: string) => `${name}-${uid}`;
  const ref = (name: string) => `url(#${id(name)})`;

  // Marca como já exibida depois que a sequência termina
  useEffect(() => {
    if (skip) return;
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* sem armazenamento: a animação roda de novo na próxima visita */
      }
    }, (0.9 + duration.slow) * 1000);
    return () => window.clearTimeout(timer);
  }, [skip]);

  const reveal = (delay: number) => ({
    initial: skip ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: duration.slow, ease, delay },
  });

  return (
    <svg viewBox="40 78 750 812" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id("tealTop")} gradientUnits="userSpaceOnUse" x1="230" y1="230" x2="740" y2="90">
          <stop offset="0" stopColor="#B7D3CA" />
          <stop offset="0.5" stopColor="#8FBAC3" />
          <stop offset="1" stopColor="#3C88A6" />
        </linearGradient>
        <linearGradient id={id("tealLeft")} gradientUnits="userSpaceOnUse" x1="120" y1="300" x2="150" y2="715">
          <stop offset="0" stopColor="#86B3BE" />
          <stop offset="1" stopColor="#4A8EA8" />
        </linearGradient>
        <linearGradient id={id("tealFade")} gradientUnits="userSpaceOnUse" x1="0" y1="250" x2="0" y2="345">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id={id("tealMask")} maskUnits="userSpaceOnUse" x="0" y="0" width="880" height="920">
          <rect x="0" y="250" width="880" height="670" fill={ref("tealFade")} />
        </mask>
        <linearGradient id={id("cream")} gradientUnits="userSpaceOnUse" x1="300" y1="300" x2="340" y2="880">
          <stop offset="0" stopColor="#F1D8BB" />
          <stop offset="0.6" stopColor="#E4C6A4" />
          <stop offset="1" stopColor="#D2B592" />
        </linearGradient>
        <linearGradient id={id("coral")} gradientUnits="userSpaceOnUse" x1="470" y1="415" x2="780" y2="295">
          <stop offset="0" stopColor="#EE8E7A" />
          <stop offset="1" stopColor="#DF6C59" />
        </linearGradient>
        <linearGradient id={id("greenLight")} gradientUnits="userSpaceOnUse" x1="490" y1="600" x2="745" y2="495">
          <stop offset="0" stopColor="#6A9B79" />
          <stop offset="1" stopColor="#7FAE88" />
        </linearGradient>
        <linearGradient id={id("greenDark")} gradientUnits="userSpaceOnUse" x1="400" y1="600" x2="640" y2="700">
          <stop offset="0" stopColor="#1D624A" />
          <stop offset="1" stopColor="#2D7B5D" />
        </linearGradient>
        <clipPath id={id("coralClip")}>
          <polygon points="568,270 900,270 900,430 440,430" />
        </clipPath>
      </defs>

      <motion.g {...reveal(0.2)}>
        <path d={TEAL} fill={ref("tealTop")} />
        <g mask={ref("tealMask")}>
          <path d={TEAL} fill={ref("tealLeft")} />
        </g>
      </motion.g>

      <motion.g {...reveal(0.5)}>
        <path d="M281 880 L400 880 L400 797 Z" fill="#26303A" />
        <path d={CREAM} fill={ref("cream")} />
        <g clipPath={ref("coralClip")}>
          <path d={CREAM} fill={ref("coral")} />
        </g>
      </motion.g>

      <motion.g {...reveal(0.8)}>
        <path
          d="M490 600 L490 528 Q490 500 518 500 L735 495 Q752 495 742 512 L640 636 L560 598 Z"
          fill={ref("greenLight")}
        />
        <path
          d="M400 598 L490 598 L560 598 L640 636 L604 686 C580 708 540 718 490 718 C440 718 405 712 400 700 Z"
          fill={ref("greenDark")}
        />
        <path d="M286 626 L400 500 L400 712 Z" fill="#7F7B62" opacity="0.88" />
      </motion.g>
    </svg>
  );
};

export default Monogram;
