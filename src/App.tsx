import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import GoldenGuarantee from "./routes/GoldenGuarantee";
import InquiryPortal from "./routes/InquiryPortal";
import Scheduling from "./routes/Scheduling";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { smoothScroll } from "./lib/utils";
import { Calendar, ClipboardList, X, Menu } from "lucide-react";
import { LOGO_URL, NAV_LINKS } from "./lib/constant";

function useScrollSpy() {
	const [active, setActive] = useState("home");
	useEffect(() => {
		const handler = () => {
			const sections = ["home", "about", "services", "pillars", "testimonials", "contact"];
			for (const id of [...sections].reverse()) {
				const el = document.getElementById(id);
				if (el && window.scrollY >= el.offsetTop - 140) {
					setActive(id);
					break;
				}
			}
		};
		window.addEventListener("scroll", handler, { passive: true });
		return () => window.removeEventListener("scroll", handler);
	}, []);
	return active;
}

const ROUTE_TITLES: Record<string, string> = {
	"/": "PrimeNest Ohio — Transforming Properties Into Safe Sanctuaries",
	"/scheduling": "Schedule a Consultation — PrimeNest Ohio",
	"/golden-guarantee-all-cash-solutions": "Golden Guarantee (All-Cash Solutions) — PrimeNest Ohio",
	"/inquiry-portal": "PrimeNest Inquiry Portal — PrimeNest Ohio",
};

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const active = useScrollSpy();
	const location = useLocation();

	// Update document title on route change
	useEffect(() => {
		document.title = ROUTE_TITLES[location.pathname] || "PrimeNest Ohio";
	}, [location.pathname]);

	// Scroll to hash if arriving at Dashboard with one
	useEffect(() => {
		if (location.pathname === "/" && location.hash) {
			const id = location.hash.replace("#", "");
			setTimeout(() => smoothScroll(id), 200);
		}
	}, [location.pathname, location.hash]);

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 48);
		window.addEventListener("scroll", handler, { passive: true });
		return () => window.removeEventListener("scroll", handler);
	}, []);

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();

		if (location.pathname !== "/") {
			// Navigate to Dashboard first, then scroll
			window.location.href = `/#${href}`;
			return;
		}

		smoothScroll(href);
		setMenuOpen(false);
	};

	return (
		<div className="bg-white text-[#1a1714] overflow-x-hidden min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400;1,9..40,600&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: 'DM Sans', sans-serif; }
        input, textarea, button, select { font-family: 'DM Sans', sans-serif; }
      `}</style>
			<motion.nav
				initial={{ y: -16, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.55 }}
				className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${scrolled
						? "bg-white/96 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.08)] px-8 py-3"
						: "bg-white px-8 py-4 border-b border-[#e8e0d0]"
					}`}
			>
				<a
					href="/"
					className="flex items-center shrink-0 no-underline"
					onClick={(e) => {
						e.preventDefault();
						if (location.pathname !== "/") {
							window.location.href = "/#home";
							return;
						}
						smoothScroll("home");
					}}
				>
					<img src={LOGO_URL} alt="PrimeNest Ohio" className="h-9 w-auto object-contain" />
				</a>

				<ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
					{NAV_LINKS.map((l) => (
						<li key={l.href}>
							<a
								href={`/#${l.href}`}
								onClick={(e) => handleNavClick(e, l.href)}
								className={`no-underline text-[13.5px] font-medium tracking-wide transition-colors duration-200 ${active === l.href && location.pathname === "/"
										? "text-[#c9a227]"
										: "text-[#5c5448] hover:text-[#1a1714]"
									}`}
							>
								{l.label}
							</a>
						</li>
					))}
					<li>
						<a
							href="/scheduling"
							className="inline-flex items-center gap-1.5 border border-[#c9a227] text-[#c9a227] px-4 py-2 rounded-lg text-[13px] font-semibold no-underline hover:bg-[#c9a227]/8 transition-colors"
						>
							<Calendar size={13} />
							Schedule
						</a>
					</li>
					<li>
						<a
							href="/inquiry-portal"
							className="inline-flex items-center gap-1.5 bg-[#c9a227] text-white px-4 py-2 rounded-lg text-[13px] font-semibold no-underline hover:bg-[#b8911f] transition-colors"
						>
							<ClipboardList size={13} />
							Start intake
						</a>
					</li>
				</ul>

				<button
					className="md:hidden p-1 bg-transparent border-none cursor-pointer"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu"
				>
					<AnimatePresence mode="wait" initial={false}>
						{menuOpen ? (
							<motion.span
								key="x"
								initial={{ rotate: -90, opacity: 0 }}
								animate={{ rotate: 0, opacity: 1 }}
								exit={{ rotate: 90, opacity: 0 }}
								transition={{ duration: 0.18 }}
							>
								<X size={22} color="#1a1714" />
							</motion.span>
						) : (
							<motion.span
								key="menu"
								initial={{ rotate: 90, opacity: 0 }}
								animate={{ rotate: 0, opacity: 1 }}
								exit={{ rotate: -90, opacity: 0 }}
								transition={{ duration: 0.18 }}
							>
								<Menu size={22} color="#1a1714" />
							</motion.span>
						)}
					</AnimatePresence>
				</button>

				<AnimatePresence>
					{menuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.22 }}
							className="absolute top-full left-0 right-0 bg-white border-b border-[#e8e0d0] shadow-lg flex flex-col py-5 px-8 gap-4 md:hidden"
						>
							{NAV_LINKS.map((l) => (
								<a
									key={l.href}
									href={`/#${l.href}`}
									onClick={(e) => handleNavClick(e, l.href)}
									className={`no-underline text-[15px] font-medium ${active === l.href && location.pathname === "/"
											? "text-[#c9a227]"
											: "text-[#5c5448]"
										}`}
								>
									{l.label}
								</a>
							))}
							<div className="flex flex-col gap-2.5 mt-1">
								<a
									href="/scheduling"
									className="inline-flex items-center justify-center gap-2 border border-[#c9a227] text-[#c9a227] px-5 py-2.5 rounded-lg text-[14px] font-semibold no-underline"
								>
									<Calendar size={14} /> Schedule appointment
								</a>
								<a
									href="/inquiry-portal"
									className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-white px-5 py-2.5 rounded-lg text-[14px] font-semibold no-underline"
								>
									<ClipboardList size={14} /> Complete intake
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>

			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/scheduling" element={<Scheduling />} />
				<Route path="/golden-guarantee-all-cash-solutions" element={<GoldenGuarantee />} />
				<Route path="/inquiry-portal" element={<InquiryPortal />} />
			</Routes>

			<footer className="bg-[#faf7f2] pt-14 pb-8 border-t border-[#e8e0d0]">
				<div className="max-w-[1120px] mx-auto px-8">
					<div className="flex flex-col items-center gap-5 mb-10">
						<img src={LOGO_URL} alt="PrimeNest Ohio" className="h-30 rounded-full shadow-md w-auto object-contain" />
						<p className="text-[13px] text-[#9a9080] m-0 italic">Transforming spaces into sanctuaries</p>
						<div className="flex flex-wrap gap-8 justify-center">
							{NAV_LINKS.map((l) => (
								<a
									key={l.href}
									href={`/#${l.href}`}
									onClick={(e) => handleNavClick(e, l.href)}
									className="text-[#7a7060] no-underline text-[13px] font-medium hover:text-[#c9a227] transition-colors"
								>
									{l.label}
								</a>
							))}
						</div>
					</div>
					<div className="border-t border-[#e8e0d0] pt-7 text-center text-[12px] text-[#9a9080]">
						© {new Date().getFullYear()} PrimeNest Properties LLC. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}