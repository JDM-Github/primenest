import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, Check } from "lucide-react";

export default function Scheduling() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        propertyAddress: "",
        message: "",
        consent: false,
        services: [] as string[],
    });
    const [submitted, setSubmitted] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const SERVICE_OPTIONS = [
        "Selling an Undervalued Property",
        "Inquiring about a Rental",
        "Business Consulting (M&G)",
        "Renovation Services",
    ];

    const toggleService = (service: string) => {
        setForm((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

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
                        Schedule a consultation
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.1] text-[#1a1714] m-0 mb-4 tracking-[-0.03em]"
                    >
                        Let's secure{" "}
                        <em className="italic text-[#c9a227] font-normal not-italic" style={{ fontStyle: "italic" }}>
                            your Nest
                        </em>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="text-[16px] text-[#7a7060] max-w-[480px] mx-auto leading-[1.7]"
                    >
                        We look forward to meeting with you
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
                                <h3 className="text-[22px] font-bold text-[#1a1714] m-0">Meeting booked!</h3>
                                <p className="text-[#7a7060] text-[14px] m-0 max-w-[340px]">
                                    We'll send a confirmation email shortly. Looking forward to connecting with you.
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
                                {/* Date & Time Picker — visual placeholder */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                        Select a date and time <span className="text-[#c9a227]">*</span>
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="relative">
                                            <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a9080] pointer-events-none" />
                                            <input
                                                type="date"
                                                required
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                className="w-full bg-white border border-[#e8e0d0] rounded-lg pl-10 pr-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors cursor-pointer"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Clock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a9080] pointer-events-none" />
                                            <select
                                                required
                                                value={selectedTime}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                className="w-full bg-white border border-[#e8e0d0] rounded-lg pl-10 pr-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors cursor-pointer appearance-none"
                                            >
                                                <option value="" disabled>
                                                    Select a time
                                                </option>
                                                <option value="09:00">9:00 am</option>
                                                <option value="09:30">9:30 am</option>
                                                <option value="10:00">10:00 am</option>
                                                <option value="10:30">10:30 am</option>
                                                <option value="11:00">11:00 am</option>
                                                <option value="11:30">11:30 am</option>
                                                <option value="13:00">1:00 pm</option>
                                                <option value="13:30">1:30 pm</option>
                                                <option value="14:00">2:00 pm</option>
                                                <option value="14:30">2:30 pm</option>
                                                <option value="15:00">3:00 pm</option>
                                                <option value="15:30">3:30 pm</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-[#e8e0d0]" />

                                {/* Name */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                        Name <span className="text-[#c9a227]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Jane Smith"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
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

                                {/* Services checkboxes */}
                                <div className="space-y-2">
                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase mb-1">
                                        Which service or services are you interested in?
                                    </label>
                                    <div className="space-y-2.5">
                                        {SERVICE_OPTIONS.map((service) => (
                                            <label
                                                key={service}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={form.services.includes(service)}
                                                    onChange={() => toggleService(service)}
                                                    className="w-4 h-4 accent-[#c9a227] shrink-0 cursor-pointer rounded"
                                                />
                                                <span className="text-[13.5px] text-[#5c5448] leading-[1.6] group-hover:text-[#1a1714] transition-colors select-none">
                                                    {service}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Property Address */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                        Property Address
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter property address for a preliminary review"
                                        value={form.propertyAddress}
                                        onChange={(e) => setForm({ ...form, propertyAddress: e.target.value })}
                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5]"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-semibold text-[#5c5448] tracking-[0.08em] uppercase">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your property or how we can help..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="w-full bg-white border border-[#e8e0d0] rounded-lg px-4 py-3 text-[14px] text-[#1a1714] outline-none focus:border-[#c9a227] transition-colors placeholder:text-[#c4bfb5] resize-y"
                                    />
                                </div>

                                {/* Consent */}
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="consent-scheduling"
                                        required
                                        checked={form.consent}
                                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                                        className="mt-0.5 w-4 h-4 accent-[#c9a227] shrink-0 cursor-pointer"
                                    />
                                    <label htmlFor="consent-scheduling" className="text-[12px] text-[#7a7060] leading-[1.6] cursor-pointer">
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
                                    Book My Meeting
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}