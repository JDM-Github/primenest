import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowRight,
	Check,
	Clock,
	Star,
	Calendar,
	ClipboardList,
} from "lucide-react";
import { smoothScroll } from "../lib/utils";
import { HERO_IMG, ABOUT_IMG, FEATURES, SERVICES, PILLARS, TESTIMONIALS, CONTACT_INFO, HOURS, MAP_EMBED } from "../lib/constant";
import { FadeUp } from "../components/FadeUp";
import { SectionTag } from "../components/SectionTag";

export default function Dashboard() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		consent: false,
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<>
			<section id="home" className="relative min-h-screen flex items-center pt-10 overflow-hidden">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.97) 42%, rgba(255,255,255,0.65) 68%, rgba(255,255,255,0.12) 100%), url(${HERO_IMG})`,
						backgroundSize: "cover",
						backgroundPosition: "center right",
					}}
				/>
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage: "radial-gradient(rgba(201,162,39,0.18) 1px, transparent 1px)",
						backgroundSize: "28px 28px",
						opacity: 0.35,
					}}
				/>

				<div className="relative z-10 max-w-[1120px] mx-auto px-8 py-20 md:py-36 w-full">
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.65, delay: 0.1 }}
						className="inline-flex items-center gap-3 text-[11px] tracking-[0.14em] uppercase text-[#c9a227] font-semibold mb-6"
					>
						<span className="w-6 h-px bg-[#c9a227]" />
						Real Estate · Warren, Ohio
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 28 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.75, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
						className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.06] text-[#1a1714] m-0 mb-6 tracking-[-0.03em] max-w-[620px]"
					>
						Transforming Properties{" "}
						<em className="italic text-[#c9a227] font-normal not-italic" style={{ fontStyle: "italic" }}>
							Into Safe Sanctuaries
						</em>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 22 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.35 }}
						className="text-[17px] leading-[1.78] text-[#5c5448] mb-10 max-w-[480px]"
					>
						PrimeNest Ohio revitalizes undervalued properties into Smart Home Safe Havens, engineered for families navigating trauma and raising neurodivergent children.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.5 }}
						className="flex flex-wrap gap-3"
					>
						<a
							href="#services"
							onClick={(e) => { e.preventDefault(); smoothScroll("services"); }}
							className="inline-block bg-[#c9a227] text-white px-8 py-3.5 rounded-lg no-underline text-[14px] font-semibold hover:bg-[#b8911f] transition-colors"
						>
							Explore services
						</a>
						<a
							href="#contact"
							onClick={(e) => { e.preventDefault(); smoothScroll("contact"); }}
							className="inline-block bg-white text-[#5c5448] px-8 py-3.5 rounded-lg no-underline text-[14px] font-medium border border-[#d8d0c0] hover:border-[#c9a227] hover:text-[#1a1714] transition-all"
						>
							Start a conversation
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.65 }}
						className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-[#e8e0d0]"
					>
						{[["7-14", "Day closing"], ["100%", "As-is purchase"], ["3", "Core programs"]].map(([val, lab]) => (
							<div key={lab}>
								<span className="block text-[2.25rem] font-bold text-[#c9a227] leading-none tracking-tight">{val}</span>
								<span className="block text-[11px] text-[#9a9080] tracking-[0.08em] uppercase mt-1.5">{lab}</span>
							</div>
						))}
					</motion.div>
				</div>
			</section>

			<section id="about" className="py-28 bg-[#faf7f2]">
				<div className="max-w-[1120px] mx-auto px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
						<FadeUp className="relative">
							<div className="relative rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.12)]">
								<img src={ABOUT_IMG} alt="Nurturing home environment" className="w-full h-[520px] object-cover" />
								<div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3.5 shadow-xl flex items-center gap-3">
									<div className="w-9 h-9 rounded-full bg-[#c9a227]/15 border border-[#c9a227]/30 flex items-center justify-center text-[#c9a227]">
										<Check size={16} />
									</div>
									<div>
										<div className="text-[13px] font-semibold text-[#1a1714] leading-none mb-0.5">Smart Nest Standard</div>
										<div className="text-[11px] text-[#9a9080]">Certified process</div>
									</div>
								</div>
							</div>
						</FadeUp>

						<FadeUp delay={0.12}>
							<div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.12em] uppercase text-[#c9a227] font-semibold mb-4">
								<span className="w-5 h-px bg-[#c9a227]" />
								About us
							</div>
							<h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-bold leading-[1.14] text-[#1a1714] mb-5 tracking-[-0.025em]">
								Creating nurturing{" "}
								<em className="italic font-normal text-[#c9a227]">environments</em>{" "}
								for families
							</h2>
							<p className="text-[15px] leading-[1.8] text-[#5c5448] mb-4">
								At PrimeNest Ohio, we combine architectural restoration with cutting-edge safety technologies. Our innovative approach creates nurturing environments for families navigating trauma and raising neurodivergent children, fostering freedom, security, and healing.
							</p>
							<p className="text-[15px] leading-[1.8] text-[#5c5448] mb-8">
								Every property undergoes the{" "}
								<strong className="text-[#c9a227] font-semibold">Smart Nest Standard</strong>
								, a comprehensive overhaul integrating energy efficiency, trauma-informed design, and sensory-friendly spaces.
							</p>

							<div className="grid grid-cols-1 gap-2.5 mb-8">
								{FEATURES.map((f, i) => (
									<div key={i} className="flex gap-3.5 items-start p-4 bg-white rounded-xl border border-[#e8e0d0] hover:border-[#c9a227]/40 hover:shadow-sm transition-all cursor-default">
										<div className="w-8 h-8 rounded-lg bg-[#c9a227]/10 border border-[#c9a227]/20 flex items-center justify-center text-[#c9a227] text-sm shrink-0 mt-0.5">
											{f.icon}
										</div>
										<div>
											<div className="text-[13px] font-semibold text-[#1a1714] mb-0.5">{f.label}</div>
											<div className="text-[12px] text-[#7a7060] leading-[1.6]">{f.desc}</div>
										</div>
									</div>
								))}
							</div>

							<a
								href="#contact"
								onClick={(e) => { e.preventDefault(); smoothScroll("contact"); }}
								className="inline-block bg-[#c9a227] text-white px-8 py-3.5 rounded-lg no-underline text-[14px] font-semibold hover:bg-[#b8911f] transition-colors"
							>
								Get in touch
							</a>
						</FadeUp>
					</div>
				</div>
			</section>

			{/* ── SERVICES ── */}
			<section id="services" className="py-28 bg-white">
				<div className="max-w-[1120px] mx-auto px-8">
					<FadeUp className="text-center mb-16">
						<SectionTag>What we do</SectionTag>
						<h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-bold leading-[1.14] text-[#1a1714] mb-4 tracking-[-0.025em]">
							Transformative spaces
						</h2>
						<p className="text-[15px] text-[#7a7060] max-w-[440px] mx-auto leading-[1.75]">
							Three core programs combining architectural restoration with modern safety technology.
						</p>
					</FadeUp>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{SERVICES.map((s, i) => (
							<FadeUp key={i} delay={i * 0.1}>
								<motion.div
									whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
									transition={{ type: "spring", stiffness: 300, damping: 22 }}
									className="bg-white border border-[#e8e0d0] rounded-2xl overflow-hidden flex flex-col h-full cursor-default"
								>
									<div className="relative h-52 overflow-hidden">
										<img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
										<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
									</div>
									<div className="p-7 flex flex-col flex-1">
										<div className="w-11 h-11 rounded-xl bg-[#c9a227]/10 border border-[#c9a227]/25 flex items-center justify-center text-[#c9a227] mb-4">
											<s.Icon size={20} />
										</div>
										<h3 className="text-[16px] font-semibold text-[#1a1714] mb-2.5 leading-[1.35]">{s.title}</h3>
										<p className="text-[13.5px] text-[#7a7060] leading-[1.7] flex-1 mb-5">{s.desc}</p>
										<a href={s.link} className="inline-flex items-center gap-1.5 text-[13px] text-[#c9a227] no-underline font-semibold group">
											Read more
											<ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
										</a>
									</div>
								</motion.div>
							</FadeUp>
						))}
					</div>
				</div>
			</section>

			{/* ── FOUR PILLARS ── */}
			<section id="pillars" className="py-28 bg-[#faf7f2]">
				<div className="max-w-[1120px] mx-auto px-8">
					<FadeUp className="text-center mb-16">
						<SectionTag>The Smart Nest Standard</SectionTag>
						<h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-bold leading-[1.14] text-[#1a1714] mb-4 tracking-[-0.025em]">
							Four pillars of every property
						</h2>
						<p className="text-[15px] text-[#7a7060] max-w-[460px] mx-auto leading-[1.75]">
							Every Smart Nest is built on these principles — layered together to create a home that genuinely heals.
						</p>
					</FadeUp>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{PILLARS.map((p, i) => (
							<FadeUp key={i} delay={i * 0.08}>
								<motion.div
									whileHover={{ y: -4, boxShadow: "0 14px 44px rgba(0,0,0,0.1)" }}
									transition={{ type: "spring", stiffness: 300, damping: 22 }}
									className="bg-white border border-[#e8e0d0] rounded-2xl overflow-hidden flex flex-col h-full"
								>
									{/* Image */}
									<div className={`relative h-48 overflow-hidden ${p.imgContain ? "bg-[#f5f0e8]" : ""}`}>
										<img
											src={p.img}
											alt={p.title}
											className={`w-full h-full transition-transform duration-500 hover:scale-105 ${p.imgContain ? "object-contain p-6" : "object-cover"}`}
										/>
										{!p.imgContain && (
											<div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
										)}
										{/* Tag overlay */}
										<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#c9a227]">
											<p.Icon size={10} />
											{p.tag}
										</div>
									</div>

									{/* Content */}
									<div className="p-7 flex flex-col flex-1">
										<h3 className="text-[18px] font-bold text-[#1a1714] mb-4 tracking-[-0.02em]">{p.title}</h3>
										<ul className="space-y-3 flex-1">
											{p.bullets.map((b, j) => (
												<li key={j} className="flex gap-3 items-start">
													<div className="w-5 h-5 rounded-full bg-[#c9a227]/12 border border-[#c9a227]/25 flex items-center justify-center shrink-0 mt-0.5">
														<Check size={10} className="text-[#c9a227]" />
													</div>
													<p className="text-[13.5px] text-[#5c5448] leading-[1.65] m-0">
														<strong className="text-[#1a1714] font-semibold">{b.bold}</strong>{" "}
														{b.text}
													</p>
												</li>
											))}
										</ul>

										{p.cta && (
											<a
												href={p.cta.href}
												className="inline-flex items-center gap-1.5 text-[13px] text-[#c9a227] no-underline font-semibold group mt-5"
											>
												{p.cta.label}
												<ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
											</a>
										)}
									</div>
								</motion.div>
							</FadeUp>
						))}
					</div>
				</div>
			</section>

			{/* ── ACTION CTA BANNER ── */}
			<section className="relative py-20 overflow-hidden bg-[#1a1714]">
				{/* Subtle dot grid */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage: "radial-gradient(rgba(201,162,39,0.22) 1px, transparent 1px)",
						backgroundSize: "24px 24px",
					}}
				/>
				{/* Warm gradient edge glow */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,162,39,0.07) 0%, transparent 70%)",
					}}
				/>

				<div className="relative z-10 max-w-[1120px] mx-auto px-8">
					<FadeUp className="text-center mb-12">
						<div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.12em] uppercase text-[#c9a227] font-semibold mb-4">
							<span className="w-5 h-px bg-[#c9a227]" />
							Ready to begin?
							<span className="w-5 h-px bg-[#c9a227]" />
						</div>
						<h2 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.12] text-white mb-4 tracking-[-0.025em]">
							Two ways to take the first step
						</h2>
						<p className="text-[15px] text-[#a89880] max-w-[460px] mx-auto leading-[1.75]">
							Whether you want a guided conversation or prefer to start on your own terms, we're ready when you are.
						</p>
					</FadeUp>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[780px] mx-auto">
						{/* Schedule */}
						<FadeUp delay={0.08}>
							<motion.a
								href="/scheduling"
								whileHover={{ y: -4, boxShadow: "0 16px 44px rgba(201,162,39,0.22)" }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
								className="group block bg-[#c9a227] rounded-2xl p-8 no-underline"
							>
								<div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
									<Calendar size={22} className="text-white" />
								</div>
								<h3 className="text-[19px] font-bold text-white mb-2 tracking-[-0.02em]">Schedule a consultation</h3>
								<p className="text-[13.5px] text-white/75 leading-[1.7] mb-6 m-0">
									Book a free 30-minute call with Michael. We'll walk through your property situation and what the Smart Nest process looks like for you.
								</p>
								<div className="inline-flex items-center gap-2 text-white text-[13px] font-semibold">
									Book your slot
									<ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
								</div>
							</motion.a>
						</FadeUp>

						{/* Intake */}
						<FadeUp delay={0.16}>
							<motion.a
								href="/inquiry-portal"
								whileHover={{ y: -4, boxShadow: "0 16px 44px rgba(255,255,255,0.06)" }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
								className="group block bg-white/6 border border-white/12 rounded-2xl p-8 no-underline hover:bg-white/9 transition-colors"
							>
								<div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 border border-[#c9a227]/30 flex items-center justify-center mb-5">
									<ClipboardList size={22} className="text-[#c9a227]" />
								</div>
								<h3 className="text-[19px] font-bold text-white mb-2 tracking-[-0.02em]">Complete your intake</h3>
								<p className="text-[13.5px] text-white/60 leading-[1.7] mb-6 m-0">
									Fill out our intake form at your own pace. Share details about your property and goals — we'll review everything before we connect.
								</p>
								<div className="inline-flex items-center gap-2 text-[#c9a227] text-[13px] font-semibold">
									Start the form
									<ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
								</div>
							</motion.a>
						</FadeUp>
					</div>

					{/* Trust note */}
					<FadeUp delay={0.22} className="text-center mt-8">
						<p className="text-[12px] text-[#7a6e60] m-0">
							No pressure, no commitment. We close in as little as{" "}
							<span className="text-[#c9a227] font-semibold">7–14 days</span>{" "}
							when you're ready.
						</p>
					</FadeUp>
				</div>
			</section>

			{/* ── TESTIMONIALS ── */}
			<section id="testimonials" className="py-28 bg-[#faf7f2]">
				<div className="max-w-[1120px] mx-auto px-8">
					<FadeUp className="text-center mb-16">
						<SectionTag>Testimonials</SectionTag>
						<h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-bold leading-[1.14] text-[#1a1714] tracking-[-0.025em]">
							What families say
						</h2>
					</FadeUp>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{TESTIMONIALS.map((t, i) => (
							<FadeUp key={i} delay={i * 0.1}>
								<motion.div
									whileHover={{ y: -4 }}
									transition={{ type: "spring", stiffness: 300, damping: 22 }}
									className="bg-white border border-[#e8e0d0] rounded-2xl p-7 flex flex-col h-full hover:border-[#c9a227]/30 hover:shadow-md transition-all duration-250"
								>
									<div className="flex gap-0.5 mb-5">
										{[...Array(5)].map((_, j) => (
											<Star key={j} size={13} className="text-[#c9a227] fill-[#c9a227]" />
										))}
									</div>
									<p className="text-[14px] leading-[1.78] text-[#5c5448] flex-1 mb-6 italic">
										"{t.quote}"
									</p>
									<div className="flex items-center gap-3">
										<img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#c9a227]/20 shrink-0" />
										<div>
											<div className="text-[13px] font-semibold text-[#1a1714]">{t.name}</div>
											<div className="text-[12px] text-[#9a9080]">{t.role}</div>
										</div>
									</div>
								</motion.div>
							</FadeUp>
						))}
					</div>
				</div>
			</section>

			{/* ── CONTACT ── */}
			<section id="contact" className="py-28 bg-white">
				<div className="max-w-[1120px] mx-auto px-8">
					<FadeUp className="text-center mb-14">
						<SectionTag>Contact</SectionTag>
						<h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-bold leading-[1.14] text-[#1a1714] tracking-[-0.025em]">
							Connect with us
						</h2>
						<p className="text-[15px] text-[#7a7060] max-w-[440px] mx-auto leading-[1.75] mt-3">
							Let's build a brighter future together. Reach out to learn how we can transform your property into a sanctuary.
						</p>
					</FadeUp>

					<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-10 items-start">
						<FadeUp className="space-y-5">
							<div className="bg-[#faf7f2] rounded-2xl border border-[#e8e0d0] p-7">
								<div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#9a9080] mb-5">Reach out</div>
								<div className="space-y-4">
									{CONTACT_INFO.map(({ Icon, label, href }, i) => (
										<a key={i} href={href} target={i === 2 ? "_blank" : undefined} rel={i === 2 ? "noreferrer" : undefined} className="flex items-start gap-3.5 no-underline group">
											<div className="w-8 h-8 rounded-lg bg-[#c9a227]/10 border border-[#c9a227]/20 flex items-center justify-center text-[#c9a227] shrink-0 mt-0.5">
												<Icon size={14} />
											</div>
											<span className="text-[13.5px] text-[#5c5448] leading-[1.6] group-hover:text-[#c9a227] transition-colors">{label}</span>
										</a>
									))}
								</div>
							</div>

							<div className="bg-[#faf7f2] rounded-2xl border border-[#e8e0d0] p-7">
								<div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#9a9080] mb-5">
									<Clock size={12} />
									Business Hours
								</div>
								{HOURS.map(([day, time]) => (
									<div key={day} className="flex justify-between text-[13px] py-2 border-b border-[#eee8de] last:border-0">
										<span className="text-[#7a7060]">{day}</span>
										<span className="text-[#c9a227] font-medium">{time}</span>
									</div>
								))}
							</div>

							<div className="rounded-2xl overflow-hidden border border-[#e8e0d0] shadow-sm">
								<iframe
									src={MAP_EMBED}
									width="100%"
									height="230"
									style={{ border: 0, display: "block" }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="PrimeNest Ohio — 17 East Broad Street, Warren, OH"
								/>
							</div>
						</FadeUp>

						<FadeUp delay={0.12}>
							<div className="bg-[#faf7f2] border border-[#e8e0d0] rounded-2xl p-9 shadow-sm">
								<AnimatePresence mode="wait">
									{submitted ? (
										<motion.div
											key="success"
											initial={{ opacity: 0, scale: 0.96 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0 }}
											className="flex flex-col items-center justify-center gap-4 min-h-[420px] text-center"
										>
											<div className="w-16 h-16 rounded-full bg-[#c9a227]/12 border-2 border-[#c9a227] flex items-center justify-center text-[#c9a227]">
												<Check size={26} />
											</div>
											<h3 className="text-[22px] font-bold text-[#1a1714] m-0">Message sent!</h3>
											<p className="text-[#7a7060] text-[14px] m-0">We'll get back to you within 24 hours.</p>
										</motion.div>
									) : (
										<motion.form
											key="form"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											onSubmit={handleSubmit}
											className="space-y-5"
										>
											<div className="mb-2">
												<h3 className="text-[20px] font-bold text-[#1a1714] m-0 mb-1">Send a message</h3>
												<p className="text-[12.5px] text-[#9a9080] m-0">
													Fields marked <span className="text-[#c9a227]">*</span> are required.
												</p>
											</div>

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

											<div className="flex items-start gap-3">
												<input
													type="checkbox"
													id="consent"
													required
													checked={form.consent}
													onChange={(e) => setForm({ ...form, consent: e.target.checked })}
													className="mt-0.5 w-4 h-4 accent-[#c9a227] shrink-0 cursor-pointer"
												/>
												<label htmlFor="consent" className="text-[12px] text-[#7a7060] leading-[1.6] cursor-pointer">
													I allow this website to store my submission so they can respond to my inquiry.{" "}
													<span className="text-[#c9a227]">*</span>
												</label>
											</div>

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

											<motion.button
												type="submit"
												whileHover={{ opacity: 0.9 }}
												whileTap={{ scale: 0.98 }}
												className="w-full bg-[#c9a227] text-white border-none py-3.5 rounded-lg text-[14px] font-bold cursor-pointer tracking-wide mt-1 hover:bg-[#b8911f] transition-colors"
											>
												Submit
											</motion.button>
										</motion.form>
									)}
								</AnimatePresence>
							</div>
						</FadeUp>
					</div>
				</div>
			</section>
		</>
	);
}