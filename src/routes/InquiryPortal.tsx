import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function InquiryPortal() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        path: "",
        propertyAddress: "",
        askingPrice: "",
        propertyCondition: "",
        timeline: "",
        freshStartContext: "",
        desiredLocation: "",
        spaceRequirements: "",
        techEssentials: "",
        stabilityNeeds: "",
        biggestObstacle: "",
        financialReadiness: "",
        consent: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const PATH_OPTIONS = [
        { value: "", label: "Select your path to a fresh start...", disabled: true },
        { value: "sell", label: "I want to sell my property (Guaranteed Exit)" },
        { value: "rent", label: "I'm looking for a home to rent (Smart Nest Placement)" },
        { value: "buy", label: "I'm looking to buy a home (Turnkey Acquisition)" },
        { value: "consulting", label: "I need professional real estate consulting" },
        { value: "decide", label: "Help me decide (Thorough review of your situation)" },
    ];

    const showSellerFields = form.path === "sell";
    const showRenterBuyerFields = form.path === "rent" || form.path === "buy";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white text-[#1a1714] overflow-x-hidden min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {/* ── HERO STRIP ── */}
            <section className="relative pt-32 pb-12 md:pt-44 md:pb-16 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(201,162,39,0.1) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                        opacity: 0.45,
                    }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse 60% 70% at 50% 30%, rgba(201,162,39,0.05) 0%, transparent 70%)",
                    }}
                />

                <div className="relative z-10 max-w-[1120px] mx-auto px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.14em] uppercase text-[#c9a227] font-semibold mb-5"
                    >
                        <span className="w-5 h-px bg-[#c9a227]" />
                        Client engagement
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.1] text-[#1a1714] m-0 mb-4 tracking-[-0.03em]"
                    >
                        PrimeNest{" "}
                        <em className="italic text-[#c9a227] font-normal not-italic" style={{ fontStyle: "italic" }}>
                            Inquiry Portal
                        </em>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="text-[15px] text-[#7a7060] max-w-[560px] mx-auto leading-[1.7]"
                    >
                        Innovative Living. Professional Integrity. Your Strategic Partner in Real Estate Acquisition, Leasing, and Consulting.
                    </motion.p>
                </div>
            </section>

            {/* ── FORM SECTION ── */}
            <section className="pb-28">
                <div className="max-w-[720px] mx-auto px-8">
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center gap-4 min-h-[420px] text-center bg-[#faf7f2] border border-[#e8e0d0] rounded-2xl p-12"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#c9a227]/12 border-2 border-[#c9a227] flex items-center justify-center text-[#c9a227]">
                                    <Check size={26} />
                                </div>
                                <h3 className="text-[22px] font-bold text-[#1a1714] m-0">Intake submitted!</h3>
                                <p className="text-[#7a7060] text-[14px] m-0 max-w-[380px]">
                                    We'll review your information and reach out within 24 hours to discuss your personalized strategy.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                onSubmit={handleSubmit}
                                className="bg-[#faf7f2] border border-[#e8e0d0] rounded-2xl p-8 md:p-10 space-y-6"
                            >
                                {/* Name */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                        Name <span className="text-[#c9a227]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="What's your name?"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                        Phone number <span className="text-[#c9a227]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="555-555-5555"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                        Email address <span className="text-[#c9a227]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="email@website.com"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                    />
                                </div>

                                {/* Divider + Path Selector */}
                                <div className="border-t border-[#e8e0d0] pt-6 space-y-1.5">
                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                        How can we assist your transition today? <span className="text-[#c9a227]">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            required
                                            value={form.path}
                                            onChange={(e) => setForm({ ...form, path: e.target.value })}
                                            className={`w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] outline-none focus:border-[#c9a227] transition-colors cursor-pointer appearance-none ${form.path === "" ? "text-[#c4bfb5]" : "text-[#1a1714]"
                                                }`}
                                        >
                                            {PATH_OPTIONS.map((opt) => (
                                                <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9a9080] pointer-events-none" />
                                    </div>
                                </div>

                                {/* ── SELLER SECTION ── */}
                                <AnimatePresence>
                                    {showSellerFields && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="space-y-5 overflow-hidden"
                                        >
                                            <div className="border-t border-[#e8e0d0] pt-5">
                                                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#c9a227] mb-4">
                                                    A. For Sellers
                                                </p>

                                                <div className="space-y-1.5 mb-4">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Property Address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Property Address"
                                                        value={form.propertyAddress}
                                                        onChange={(e) => setForm({ ...form, propertyAddress: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                                    />
                                                </div>

                                                <div className="space-y-1.5 mb-4">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Current Asking Price
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Asking amount"
                                                        value={form.askingPrice}
                                                        onChange={(e) => setForm({ ...form, askingPrice: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                                    />
                                                </div>

                                                <div className="space-y-1.5 mb-4">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Property Condition
                                                    </label>
                                                    <textarea
                                                        rows={3}
                                                        placeholder={`Please rate your property's current vitality. We buy houses in any condition—from full rehabs to modernized estates—as part of our 'No-Judgment Zone' policy.\n\nThe "Smart Nest" Condition Scale:\n1 - Full Rehab Required\n2 - Significant Repairs\n3 - Average / Functional\n4 - Modernized\n5 - Turnkey / Pristine`}
                                                        value={form.propertyCondition}
                                                        onChange={(e) => setForm({ ...form, propertyCondition: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5] resize-y"
                                                    />
                                                </div>

                                                <div className="space-y-1.5 mb-4">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Timeline
                                                    </label>
                                                    <textarea
                                                        rows={2}
                                                        placeholder="How quickly do you need to close?"
                                                        value={form.timeline}
                                                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5] resize-y"
                                                    />
                                                </div>

                                                <div className="border-t border-[#e8e0d0] pt-4 space-y-1.5">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        The "Fresh Start" Context
                                                    </label>
                                                    <textarea
                                                        rows={2}
                                                        placeholder="Is there a specific situation we should be sensitive to? (e.g., Foreclosure, Estate, Relocation)"
                                                        value={form.freshStartContext}
                                                        onChange={(e) => setForm({ ...form, freshStartContext: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5] resize-y"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* ── RENTER / BUYER SECTION ── */}
                                <AnimatePresence>
                                    {showRenterBuyerFields && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="space-y-5 overflow-hidden"
                                        >
                                            <div className="border-t border-[#e8e0d0] pt-5">
                                                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#c9a227] mb-4">
                                                    B. For Renters / Buyers
                                                </p>

                                                <div className="space-y-1.5 mb-4">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Where do you need to be located?
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Desired city, neighborhood, or region"
                                                        value={form.desiredLocation}
                                                        onChange={(e) => setForm({ ...form, desiredLocation: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                                    />
                                                </div>

                                                <div className="space-y-1.5 mb-4">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Space Requirements
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Desired bedrooms / bathrooms?"
                                                        value={form.spaceRequirements}
                                                        onChange={(e) => setForm({ ...form, spaceRequirements: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                                    />
                                                </div>

                                                <div className="space-y-1.5 mb-4">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Tech Essentials
                                                    </label>
                                                    <textarea
                                                        rows={2}
                                                        placeholder="Which Smart Nest features are priorities?"
                                                        value={form.techEssentials}
                                                        onChange={(e) => setForm({ ...form, techEssentials: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5] resize-y"
                                                    />
                                                </div>

                                                <div className="border-t border-[#e8e0d0] pt-4 space-y-1.5">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Stability Needs
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Any specific accessibility or trauma-informed design requirements?"
                                                        value={form.stabilityNeeds}
                                                        onChange={(e) => setForm({ ...form, stabilityNeeds: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* ── GENERAL CONSULTATION SECTION (always visible after path selected) ── */}
                                <AnimatePresence>
                                    {form.path !== "" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="space-y-5 overflow-hidden"
                                        >
                                            <div className="border-t border-[#e8e0d0] pt-5">
                                                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#c9a227] mb-4">
                                                    C. General Consultation
                                                </p>

                                                <div className="space-y-1.5 mb-4">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Biggest Obstacle
                                                    </label>
                                                    <textarea
                                                        rows={2}
                                                        placeholder="What is the biggest obstacle in your current real estate situation?"
                                                        value={form.biggestObstacle}
                                                        onChange={(e) => setForm({ ...form, biggestObstacle: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5] resize-y"
                                                    />
                                                </div>

                                                <div className="border-t border-[#e8e0d0] pt-4 space-y-1.5">
                                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                                        Financial Readiness
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Are you working with internal funds or looking for PrimeNest financing options?"
                                                        value={form.financialReadiness}
                                                        onChange={(e) => setForm({ ...form, financialReadiness: e.target.value })}
                                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Consent */}
                                <div className="border-t border-[#e8e0d0] pt-5 flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="consent-intake"
                                        required
                                        checked={form.consent}
                                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                                        className="mt-0.5 w-4 h-4 accent-[#c9a227] shrink-0 cursor-pointer"
                                    />
                                    <label htmlFor="consent-intake" className="text-[12px] text-[#7a7060] leading-[1.6] cursor-pointer">
                                        I allow this website to store my submission so they can respond to my inquiry.{" "}
                                        <span className="text-[#c9a227]">*</span>
                                    </label>
                                </div>

                                {/* reCAPTCHA placeholder */}
                                <div className="flex items-center gap-3 bg-white border border-[#e8e0d0] rounded-lg px-4 py-3.5">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-[#c9a227] shrink-0 cursor-pointer"
                                        readOnly
                                    />
                                    <span className="text-[13px] text-[#5c5448] flex-1 font-medium">I'm not a robot</span>
                                    <div className="text-right shrink-0">
                                        <div className="text-[10px] text-[#9a9080] leading-none font-medium">reCAPTCHA</div>
                                        <div className="text-[9px] text-[#c4bfb5] leading-none mt-0.5">Privacy · Terms</div>
                                    </div>
                                </div>

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ opacity: 0.9 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#c9a227] text-white border-none py-3.5 rounded-lg text-[14px] font-bold cursor-pointer tracking-wide hover:bg-[#b8911f] transition-colors"
                                >
                                    SECURE MY STRATEGY
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}