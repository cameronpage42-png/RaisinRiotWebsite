import React from 'react';
import { THEMES } from '../themes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, SearchX } from 'lucide-react';

const NotFound: React.FC = () => {
    // Relying on the same theming approach as the Privacy Policy page
    const currentTheme = THEMES.classic;

    return (
        <motion.div
            key="not-found"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`min-h-screen w-full flex items-center justify-center p-6 ${currentTheme.background} ${currentTheme.textPrimary}`}
        >
            <div className={`p-8 md:p-16 max-w-2xl w-full text-center rounded-3xl border-2 ${currentTheme.cardBackground} ${currentTheme.cardBorder} ${currentTheme.cardShadow}`}>
                <div className="flex justify-center mb-8">
                    <div className={`p-6 rounded-full inline-block ${currentTheme.gridHeaderBackground} ${currentTheme.gridHeaderText}`}>
                        <SearchX size={64} className="opacity-80" />
                    </div>
                </div>

                <h1 className={`text-6xl md:text-8xl font-black mb-4 tracking-tight drop-shadow-md ${currentTheme.textPrimary}`}>
                    404
                </h1>

                <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${currentTheme.textPrimary}`}>
                    Page Not Found
                </h2>

                <p className={`text-lg mb-10 ${currentTheme.textSecondary}`}>
                    Oops! It looks like you've tumbled outside the grid. The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="flex justify-center">
                    <Link
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold ${currentTheme.buttonPrimary} hover:opacity-90 transform transition-all active:scale-95 shadow-lg`}
                    >
                        <ArrowLeft size={24} />
                        Return to Home
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default NotFound;
