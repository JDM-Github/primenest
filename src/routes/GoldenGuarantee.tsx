import { motion } from "framer-motion";
import {
    Calendar,
    ClipboardList,
    BadgeDollarSign,
    Clock,
    ArrowRight,
    Home,
} from "lucide-react";
import { FadeUp } from "../components/FadeUp";
import {
    PILLAR_GUARANTEE_IMG,
} from "../lib/constant";

export default function GoldenGuarantee() {
    return (
        <div className="bg-white text-[#1a1714] overflow-x-hidden min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(201,162,39,0.12) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                        opacity: 0.5,
                    }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse 60% 70% at 50% 30%, rgba(201,162,39,0.06) 0%, transparent 70%)",
                    }}
                />

                <div className="relative z-10 max-w-[1120px] mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        {/* Text content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55 }}
                                className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.14em] uppercase text-[#c9a227] font-semibold mb-5"
                            >
                                <span className="w-5 h-px bg-[#c9a227]" />
                                Financial certainty
                            </motion.div>   

                            <motion.h1
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                                className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.1] text-[#1a1714] m-0 mb-6 tracking-[-0.03em]"
                            >
                                Golden Guarantee{" "}
                                <em className="italic text-[#c9a227] font-normal not-italic" style={{ fontStyle: "italic" }}>
                                    All-Cash Solutions
                                </em>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="text-[16px] leading-[1.75] text-[#5c5448] mb-8 max-w-[520px]"
                            >
                                Our Cash-Powered exit strategy uses internal capital from M&G Organization, bypassing bank delays
                                and appraisal gaps entirely. Close in as little as 7 to 14 days, as-is, with zero repairs required.
                            </motion.p>

                            {/* Key points */}
                            <motion.ul
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                className="space-y-4 list-none m-0 p-0 mb-10"
                            >
                                {[
                                    {
                                        icon: BadgeDollarSign,
                                        bold: "Financial Certainty:",
                                        text: 'We offer "Cash-Powered" exits utilizing internal capital from M&G Organization, bypassing all bank delays and appraisal gaps.',
                                    },
                                    {
                                        icon: Clock,
                                        bold: "Accelerated Closings:",
                                        text: "Our streamlined administrative process allows for guaranteed transactions in as little as 7 to 14 days.",
                                    },
                                    {
                                        icon: Home,
                                        bold: 'True "As-Is" Acquisition:',
                                        text: "We purchase properties in any condition, meaning you never have to worry about repairs, cleaning, or staging costs.",
                                    },
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3.5 items-start">
                                        <div className="w-8 h-8 rounded-lg bg-[#c9a227]/10 border border-[#c9a227]/20 flex items-center justify-center text-[#c9a227] shrink-0 mt-0.5">
                                            <item.icon size={14} />
                                        </div>
                                        <p className="text-[14px] text-[#5c5448] leading-[1.7] m-0">
                                            <strong className="text-[#1a1714] font-semibold">{item.bold}</strong>{" "}
                                            {item.text}
                                        </p>
                                    </li>
                                ))}
                            </motion.ul>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, delay: 0.2 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                {/* Decorative ring behind image */}
                                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#c9a227]/15 to-[#c9a227]/5 rotate-3" />
                                <div className="relative rounded-xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.12)]">
                                    <img
                                        src={PILLAR_GUARANTEE_IMG}
                                        alt="Golden Guarantee — All-Cash Solutions"
                                        className="w-full max-w-[460px] h-auto object-contain p-8 bg-[#faf7f2]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── ACTION CTA BANNER ── */}
            <section className="relative py-20 overflow-hidden bg-[#1a1714]">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(201,162,39,0.22) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,162,39,0.07) 0%, transparent 70%)",
                    }}
                />

                <div className="relative z-10 max-w-[1120px] mx-auto px-8 text-center">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.12em] uppercase text-[#c9a227] font-semibold mb-4">
                            <span className="w-5 h-px bg-[#c9a227]" />
                            Ready to begin?
                            <span className="w-5 h-px bg-[#c9a227]" />
                        </div>
                        <h2 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.12] text-white mb-4 tracking-[-0.025em]">
                            Let's talk about your property
                        </h2>
                        <p className="text-[15px] text-[#a89880] max-w-[480px] mx-auto leading-[1.75] mb-10">
                            We'd love to hear from you. Whether you're ready to sell or just exploring options, there's zero pressure and zero commitment.
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center">
                            <motion.a
                                href="/scheduling"
                                whileHover={{ y: -4, boxShadow: "0 16px 44px rgba(201,162,39,0.22)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="inline-flex items-center gap-2 bg-[#c9a227] text-white px-7 py-3.5 rounded-lg no-underline text-[14px] font-semibold hover:bg-[#b8911f] transition-colors"
                            >
                                <Calendar size={15} />
                                Schedule appointment
                                <ArrowRight size={14} />
                            </motion.a>
                            <motion.a
                                href="/inquiry-portal"
                                whileHover={{ y: -4, boxShadow: "0 16px 44px rgba(255,255,255,0.06)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="inline-flex items-center gap-2 bg-white/6 border border-white/12 text-white px-7 py-3.5 rounded-lg no-underline text-[14px] font-semibold hover:bg-white/9 transition-colors"
                            >
                                <ClipboardList size={15} />
                                Start intake
                                <ArrowRight size={14} />
                            </motion.a>
                        </div>

                        <p className="text-[12px] text-[#7a6e60] mt-6 m-0">
                            No pressure, no commitment. We close in as little as{" "}
                            <span className="text-[#c9a227] font-semibold">7–14 days</span>{" "}
                            when you're ready.
                        </p>
                    </FadeUp>
                </div>
            </section>

        </div>
    );
}