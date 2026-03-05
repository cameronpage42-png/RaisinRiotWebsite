
export interface ThemeConfig {
    id: string;
    label: string;
    // Core Layout
    background: string; // The main wrapper background
    fontFamily: string; // Font class (font-serif, font-sans, font-mono)

    // Text
    textPrimary: string;
    textSecondary: string;
    textAccent: string; // Special emphasis

    // Containers (Modals, Cards)
    cardBackground: string;
    cardBorder: string;
    cardShadow: string;

    // Grid
    gridBackground: string; // Behind letters
    gridText: string;
    gridBorder: string;
    gridHeaderBackground: string;
    gridHeaderText: string;

    // Elements
    buttonPrimary: string;
    buttonSecondary: string;

    // States
    highlightColor: string; // Default selection highlight
    highlightColors: string[]; // Varied colors for words

    // Special Effects
    glowEffect: string; // Box shadow for neon glow or empty for none
}

export const THEMES: Record<string, ThemeConfig> = {
    classic: {
        id: 'classic',
        label: 'Classic Paper',
        background: 'bg-[#f4f1ea]', // Paper-like off-white
        fontFamily: 'font-serif',

        textPrimary: 'text-slate-900',
        textSecondary: 'text-slate-600',
        textAccent: 'text-indigo-600',

        cardBackground: 'bg-white',
        cardBorder: 'border-slate-900',
        cardShadow: 'shadow-md',

        gridBackground: 'bg-white',
        gridText: 'text-slate-900',
        gridBorder: 'border-slate-300',
        gridHeaderBackground: 'bg-slate-200',
        gridHeaderText: 'text-black',

        buttonPrimary: 'bg-slate-900 text-white hover:bg-slate-800',
        buttonSecondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300',

        highlightColor: 'bg-yellow-300',
        highlightColors: [
            'bg-yellow-300/60 text-black',
            'bg-green-300/60 text-black',
            'bg-blue-300/60 text-black',
            'bg-pink-300/60 text-black',
            'bg-orange-300/60 text-black',
            'bg-purple-300/60 text-black',
        ],
        glowEffect: 'none'
    },
};
