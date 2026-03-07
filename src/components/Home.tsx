import React, { useState } from 'react';
import { type ThemeConfig } from '../themes';
import { motion } from 'framer-motion';
import { Gamepad2, Users, Sparkles, MessageCircle, Share2, Download, Image as ImageIcon, Shield, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
    currentTheme: ThemeConfig;
}

const Home: React.FC<HomeProps> = ({ currentTheme }) => {
    const [joinCode, setJoinCode] = useState('');

    const handleJoinGame = () => {
        const code = joinCode.trim().toUpperCase();
        if (code.length === 6) {
            window.open(`https://raisinriot.com/live/${code}`, '_blank');
        }
    };
    return (
        <motion.div
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20`}>
                {/* Header / Hero */}
                <motion.div
                    key={currentTheme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h1 className={`text-6xl md:text-8xl font-black mb-6 tracking-tight ${currentTheme.textPrimary} ${currentTheme.glowEffect !== 'none' ? currentTheme.glowEffect : ''}`}>
                        RAISIN RIOT
                    </h1>
                    <p className={`text-xl md:text-3xl font-medium mb-10 ${currentTheme.textSecondary}`}>
                        Interactive Games for TikTok, Twitch & Local Play
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
                            className={`
        px-10 py-4 text-xl font-bold rounded-xl
        ${currentTheme.buttonPrimary}
        transform transition-all active:scale-95
      `}>
                            <span className="flex items-center gap-3">
                                <Gamepad2 size={24} />
                                OUR GAMES
                            </span>
                        </button>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className={`
        px-10 py-4 text-xl font-bold rounded-xl
        ${currentTheme.buttonSecondary}
        transform transition-all active:scale-95
      `}>
                            Contact Us
                        </button>
                        <button
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: 'Raisin Riot',
                                        text: 'Check out Raisin Riot - Interactive Games for TikTok & Twitch!',
                                        url: window.location.href,
                                    });
                                } else {
                                    navigator.clipboard.writeText(window.location.href);
                                    alert('Link copied to clipboard!');
                                }
                            }}
                            className={`
        px-10 py-4 text-xl font-bold rounded-xl
        ${currentTheme.cardBackground}
        ${currentTheme.cardBorder}
        ${currentTheme.textPrimary}
        transform transition-all active:scale-95 border-2
      `}>
                            <span className="flex items-center gap-3">
                                <Share2 size={24} />
                                SHARE
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Join a Live Game */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className={`
                        w-full max-w-xl mb-12 p-6 rounded-2xl border-2 text-center
                        ${currentTheme.cardBackground}
                        ${currentTheme.cardBorder}
                        ${currentTheme.cardShadow}
                        backdrop-blur-sm
                    `}
                >
                    <h2 className={`text-2xl font-black mb-1 ${currentTheme.textPrimary}`}>
                        <span className="flex items-center justify-center gap-2">
                            <LogIn size={24} />
                            JOIN A LIVE GAME
                        </span>
                    </h2>
                    <p className={`text-sm mb-5 ${currentTheme.textSecondary}`}>
                        Enter the 6-digit code from your host's screen
                    </p>
                    <div className="flex gap-3 justify-center">
                        <input
                            type="text"
                            value={joinCode}
                            onChange={(e) => setJoinCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6))}
                            onKeyDown={(e) => e.key === 'Enter' && handleJoinGame()}
                            placeholder="XXXXXX"
                            maxLength={6}
                            className={`
                                w-40 px-4 py-3 rounded-xl text-center text-2xl font-black tracking-widest
                                border-2 outline-none focus:scale-105 transition-transform
                                ${currentTheme.cardBorder}
                                bg-black/20 ${currentTheme.textPrimary}
                                placeholder-current opacity-100
                            `}
                            style={{ letterSpacing: '0.3em' }}
                        />
                        <button
                            onClick={handleJoinGame}
                            disabled={joinCode.trim().length !== 6}
                            className={`
                                px-6 py-3 text-lg font-bold rounded-xl
                                ${currentTheme.buttonPrimary}
                                transform transition-all active:scale-95
                                disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100
                            `}
                        >
                            <span className="flex items-center gap-2">
                                <LogIn size={20} />
                                JOIN
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mb-20">
                    {[
                        { icon: Users, title: "Stream Interaction", desc: "Engage your audience with games built for Twitch & TikTok." },
                        { icon: Gamepad2, title: "Play Locally", desc: "Bring friends and family together with local multiplayer fun." },
                        { icon: Sparkles, title: "Community Driven", desc: "Developed with feedback from our amazing community." },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`
          p-6 rounded-2xl flex flex-col items-center text-center
          ${currentTheme.cardBackground}
          ${currentTheme.cardBorder}
          ${currentTheme.cardShadow}
          border-2 backdrop-blur-sm transition-transform hover:-translate-y-2
        `}
                        >
                            <div className={`
          p-4 rounded-full mb-4
          ${currentTheme.gridHeaderBackground}
          ${currentTheme.gridHeaderText}
        `}>
                                <feature.icon size={32} />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${currentTheme.textPrimary}`}>
                                {feature.title}
                            </h3>
                            <p className={`${currentTheme.textSecondary} text-sm`}>
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Games Section */}
                <div id="games" className="w-full max-w-6xl mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-black text-center mb-12 ${currentTheme.textPrimary}`}
                    >
                        OUR GAMES
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`
          overflow-hidden rounded-3xl border-2
          ${currentTheme.cardBackground}
          ${currentTheme.cardBorder}
          ${currentTheme.cardShadow}
        `}
                        >
                            <div className="aspect-video w-full bg-black/20 flex items-center justify-center p-8">
                                <img
                                    src="/title.webp"
                                    alt="Raisin Wordsearch"
                                    className="w-full h-full object-contain filter drop-shadow-xl transition-transform hover:scale-105 duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className={`text-3xl font-bold mb-4 ${currentTheme.textPrimary}`}>
                                    Raisin Wordsearch
                                </h3>
                                <p className={`text-lg mb-6 ${currentTheme.textSecondary}`}>
                                    The comprehensive word search experience! Featuring local play mode,
                                    Twitch & TikTok integration, and themes to customize your game.
                                </p>
                                <ul className={`mb-6 space-y-2 ${currentTheme.textSecondary}`}>
                                    <li className="flex items-center gap-2">
                                        <Sparkles size={16} /> Twitch & TikTok Chat Integration
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Sparkles size={16} /> Local Party Mode (Up to 8 players)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Sparkles size={16} /> 200+ Built-in Word Categories
                                    </li>
                                </ul>
                                <a
                                    href="https://store.steampowered.com/app/4363140/Raisins_Wordsearch/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
              inline-flex items-center gap-2 px-8 py-3 text-lg font-bold rounded-xl
              ${currentTheme.buttonPrimary}
              transform transition-all active:scale-95
            `}
                                >
                                    <Gamepad2 size={20} />
                                    View on Steam
                                </a>
                            </div>
                        </motion.div>

                        {/* Placeholder for future games */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`
          flex flex-col items-center justify-center text-center p-8 rounded-3xl border-2 border-dashed
          ${currentTheme.cardBackground}
          ${currentTheme.cardBorder}
          opacity-50
        `}
                        >
                            <Sparkles size={48} className={`mb-4 ${currentTheme.textAccent}`} />
                            <h3 className={`text-2xl font-bold mb-2 ${currentTheme.textPrimary}`}>
                                More Coming Soon
                            </h3>
                            <p className={`${currentTheme.textSecondary}`}>
                                We're cooking up something new! Stay tuned.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Section */}
                <div id="contact" className="w-full max-w-6xl mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-black text-center mb-12 ${currentTheme.textPrimary}`}
                    >
                        CONTACT US
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.a
                            href="https://discord.gg/P882rNrBKb"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`
          flex items-center gap-6 p-6 rounded-2xl border-2 transition-all hover:-translate-y-1
          ${currentTheme.cardBackground}
          ${currentTheme.cardBorder}
          ${currentTheme.cardShadow}
        `}
                        >
                            <div className={`p-4 rounded-full bg-[#5865F2]/20 text-[#5865F2]`}>
                                <MessageCircle size={32} />
                            </div>
                            <div>
                                <h3 className={`text-2xl font-bold mb-1 ${currentTheme.textPrimary}`}>Join our Discord</h3>
                                <p className={`${currentTheme.textSecondary}`}>Chat with the community & devs</p>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://www.tiktok.com/@raisinriot"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={`
          flex items-center gap-6 p-6 rounded-2xl border-2 transition-all hover:-translate-y-1
          ${currentTheme.cardBackground}
          ${currentTheme.cardBorder}
          ${currentTheme.cardShadow}
        `}
                        >
                            <div className={`p-2 rounded-full bg-black/5 dark:bg-white/10`}>
                                <img
                                    src="/rasinriotpfp.png"
                                    alt="Raisin Riot"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className={`text-2xl font-bold mb-1 ${currentTheme.textPrimary}`}>Follow on TikTok</h3>
                                <p className={`${currentTheme.textSecondary}`}>@raisinriot</p>
                            </div>
                        </motion.a>
                    </div>
                </div>

                {/* Press / Media Kit Section */}
                <div id="press" className="w-full max-w-4xl mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`
        p-8 rounded-3xl border-2 border-dashed
        ${currentTheme.cardBackground}
        ${currentTheme.cardBorder}
      `}
                    >
                        <h2 className={`text-3xl font-black mb-6 ${currentTheme.textPrimary}`}>
                            PRESS & MEDIA KIT
                        </h2>
                        <p className={`mb-8 ${currentTheme.textSecondary}`}>
                            Writing about Raisin Riot? Grab our official high-res assets here.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="/title.webp"
                                download="RaisinRiot-Logo.webp"
                                className={`
            flex items-center gap-3 px-6 py-3 rounded-xl font-bold
            bg-black/20 hover:bg-black/30 transition-colors
            ${currentTheme.textPrimary}
          `}
                            >
                                <ImageIcon size={20} />
                                <span>Logo (WebP)</span>
                                <Download size={16} className="opacity-50" />
                            </a>

                            <a
                                href="/rasinriotpfp.png"
                                download="RaisinRiot-Icon.png"
                                className={`
            flex items-center gap-3 px-6 py-3 rounded-xl font-bold
            bg-black/20 hover:bg-black/30 transition-colors
            ${currentTheme.textPrimary}
          `}
                            >
                                <ImageIcon size={20} />
                                <span>Icon (PNG)</span>
                                <Download size={16} className="opacity-50" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <footer className={`w-full max-w-6xl w-full mt-20 pt-8 border-t-2 ${currentTheme.cardBorder} flex flex-col md:flex-row items-center justify-between`}>
                    <p className={`${currentTheme.textSecondary} text-sm mb-4 md:mb-0`}>
                        © 2026 Raisin Riot. All rights reserved.
                    </p>
                    <Link
                        to="/privacy"
                        onClick={() => window.scrollTo(0, 0)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold ${currentTheme.buttonSecondary} hover:opacity-80 transition-opacity`}
                    >
                        <Shield size={16} />
                        Privacy Policy
                    </Link>
                </footer>
            </div>
        </motion.div>
    );
};

export default Home;
