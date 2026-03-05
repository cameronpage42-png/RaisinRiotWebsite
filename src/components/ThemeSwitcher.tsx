import { useRef, useEffect } from "react";
import { THEMES, type ThemeConfig } from "../themes";
import { motion } from "framer-motion";

interface ThemeSwitcherProps {
    currentTheme: ThemeConfig;
    setTheme: (theme: ThemeConfig) => void;
}

export const ThemeSwitcher = ({ currentTheme, setTheme }: ThemeSwitcherProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll active theme into view if it renders
        if (containerRef.current) {
            // Logic could be added here if we had many themes
        }
    }, [currentTheme]);

    return (
        <div
            className={`
        fixed bottom-6 left-1/2 -translate-x-1/2 z-50
        flex gap-2 p-2 rounded-full shadow-xl
        backdrop-blur-md border transition-all duration-300
        ${currentTheme.id === 'classic' ? 'bg-white/90 border-slate-300' : ''}
        ${currentTheme.id === 'neon' ? 'bg-slate-900/80 border-cyan-500/50 shadow-cyan-500/20' : ''}
        ${currentTheme.id === 'snow' ? 'bg-white/80 border-cyan-200' : ''}
        ${currentTheme.id === 'cute' ? 'bg-white/80 border-pink-200' : ''}
        ${currentTheme.id === 'retro98' ? 'bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border-2 rounded-none p-1' : ''}
        ${currentTheme.id === 'space' ? 'bg-black/60 border-indigo-500/30' : ''}
        ${currentTheme.id === 'sugar' ? 'bg-white/80 border-pink-200' : ''}
        ${currentTheme.id === 'pets' ? 'bg-[#FFF3E0] border-[#81D4FA] border-dashed border-2' : ''}
      `}
            ref={containerRef}
        >
            {Object.values(THEMES).map((theme) => {
                const isActive = currentTheme.id === theme.id;

                return (
                    <button
                        key={theme.id}
                        onClick={() => setTheme(theme)}
                        className={`
              relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-300
              ${isActive ? 'scale-110 shadow-lg' : 'hover:scale-105 opacity-70 hover:opacity-100'}
              
              /* Theme specific active styles */
              ${isActive && theme.id === 'classic' ? 'bg-slate-900 text-white' : ''}
              ${isActive && theme.id === 'neon' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]' : ''}
              ${isActive && theme.id === 'snow' ? 'bg-cyan-100 text-cyan-700' : ''}
              ${isActive && theme.id === 'cute' ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white' : ''}
              ${isActive && theme.id === 'retro98' ? 'bg-[#000080] text-white rounded-none border-none' : ''}
              ${isActive && theme.id === 'space' ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : ''}
              ${isActive && theme.id === 'sugar' ? 'bg-[#FF69B4] text-white' : ''}
              ${isActive && theme.id === 'pets' ? 'bg-[#FFCC80] text-[#E65100] border-dashed border-2 border-[#E65100]' : ''}
            `}
                    >
                        {theme.label}
                        {isActive && (
                            <motion.div
                                layoutId="activeTheme"
                                className="absolute inset-0 rounded-full border-2 border-current opacity-20"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
};
