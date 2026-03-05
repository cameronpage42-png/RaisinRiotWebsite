import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { THEMES } from '../themes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    const currentTheme = THEMES.classic; // Or whatever theme system is used

    return (
        <motion.div
            key="privacy-policy"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`min-h-screen w-full p-6 ${currentTheme.background} ${currentTheme.textPrimary} flex justify-center`}
        >
            <div className="max-w-4xl w-full">
                <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className={`mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold ${currentTheme.buttonSecondary} hover:opacity-80 transition-opacity`}
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <div className={`p-8 md:p-12 rounded-3xl border-2 ${currentTheme.cardBackground} ${currentTheme.cardBorder} ${currentTheme.cardShadow}`}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`p-4 rounded-full ${currentTheme.gridHeaderBackground} ${currentTheme.gridHeaderText}`}>
                            <Shield size={40} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black">Privacy Policy</h1>
                    </div>

                    <div className={`space-y-6 text-lg ${currentTheme.textSecondary}`}>
                        <p className="font-bold text-xl">Last Updated: March 2, 2026</p>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>1. Introduction</h2>
                            <p>
                                Welcome to Raisin Riot. This Privacy Policy is designed to help you understand how Raisin Wordsearch (the "Application") handles data when you play it and share it with your audience on platforms like Twitch and TikTok.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>2. What Data We Collect & Why</h2>
                            <p>
                                The Application connects directly to your live stream to power interactive gameplay. During a session, the Application temporarily processes viewer interactions (e.g., chat messages, likes, gifts, follows) to display them in-game.
                            </p>
                            <p className="font-bold">Specifically for Debugging and Technical Support:</p>
                            <p>
                                To help us fix bugs and improve the game experience, the Application may collect short-term diagnostic logs ("Session Logs"). As of March 2026, we have implemented a <strong>Privacy-First Logging System</strong>:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li><strong>Viewer Usernames:</strong> Are cryptographically scrambled/anonymized before being written to diagnostic logs. We do not store the actual usernames of your viewers.</li>
                                <li><strong>Viewer Chat Messages:</strong> The content of viewer chat messages is completely stripped out and replaced with a placeholder (e.g., <code>&lt;message obscured&gt;</code>) before logging. We do not store what your viewers type.</li>
                                <li><strong>Broadcaster Username:</strong> As the host who accepted the End User License Agreement (EULA), your connecting username is preserved in diagnostic logs to identify the session.</li>
                                <li><strong>Event Data:</strong> We log that structural events happened (e.g., "A viewer sent a gift", "A viewer joined") to understand the flow of the game when crashes occur, without attaching PII to those events.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>3. Where Data is Sent & Stored</h2>
                            <p>
                                Diagnostic session logs (which contain no viewer PII as described above) may be transmitted to a secure, private developer channel for troubleshooting (e.g., a private developer Discord webhook) upon application closure.
                            </p>
                            <p>
                                These files are used strictly for technical triage and are routinely deleted once the associated issue has been resolved.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>4. Streamer Responsibilities</h2>
                            <p>
                                As a Broadcaster/Streamer utilizing this Application, you remain responsible for ensuring your live stream and your use of this interactive tool complies with the Terms of Service of Twitch, TikTok, or any other connected platform, as well as the local privacy laws applicable to you and your audience.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>5. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy or our data practices, please reach out to us via our official community channels or Discord.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
