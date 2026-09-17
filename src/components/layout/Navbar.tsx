"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
	{ label: "Áreas", href: "#areas" },
	{ label: "Empresas", href: "#ventures" },
	{ label: "Nosotros", href: "#about" },
	{ label: "Contacto", href: "#contact" },
];

const sectionIds = ["home", ...links.map(({ href }) => href.slice(1))];

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const updateScrolled = () => setScrolled(window.scrollY > 40);
		updateScrolled();
		window.addEventListener("scroll", updateScrolled, { passive: true });
		return () => window.removeEventListener("scroll", updateScrolled);
	}, []);

	useEffect(() => {
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);

		const updateActiveSection = () => {
			const triggerLine = window.innerHeight * 0.3;
			let current = sections[0]?.id ?? "home";
			for (const section of sections) {
				if (section.getBoundingClientRect().top <= triggerLine) current = section.id;
			}
			setActiveSection(current);
		};

		updateActiveSection();
		window.addEventListener("scroll", updateActiveSection, { passive: true });
		window.addEventListener("resize", updateActiveSection);
		return () => {
			window.removeEventListener("scroll", updateActiveSection);
			window.removeEventListener("resize", updateActiveSection);
		};
	}, []);

	const closeMenu = () => setIsOpen(false);

	return (
		<header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
			<motion.div
				className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-5 py-3 transition-colors sm:px-6 ${
					scrolled || isOpen
						? "border-white/10 bg-void/90 shadow-lg shadow-black/20 backdrop-blur-md"
						: "border-white/5 bg-void/60 backdrop-blur-sm"
				}`}
				layout
			>
				<Link href="#home" className="flex items-center gap-3" onClick={closeMenu}>
					<motion.div
						className="size-8 shrink-0"
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						whileHover={{ rotate: 10 }}
						transition={{ duration: 0.3 }}
					>
						<Image src="/logo/starkio-icon.svg" alt="Starkio Labs" width={32} height={32} priority />
					</motion.div>
					<span className="text-lg font-bold tracking-tight text-starkio-cloud">
						Stark<span className="text-starkio-purple">io</span>
					</span>
				</Link>

				<nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
					{links.map((link, index) => {
						const active = activeSection === link.href.slice(1);
						return (
							<motion.div
								key={link.href}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								whileHover={{ scale: 1.05 }}
							>
								<Link
									href={link.href}
									aria-current={active ? "page" : undefined}
									className={`text-sm font-medium transition-colors ${
										active ? "text-starkio-cloud" : "text-starkio-cloud/60 hover:text-starkio-cloud"
									}`}
								>
									{link.label}
								</Link>
							</motion.div>
						);
					})}
				</nav>

				<motion.div
					className="hidden md:block"
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, delay: 0.2 }}
					whileHover={{ scale: 1.05 }}
				>
					<Link
						href="#contact"
						className="inline-flex items-center justify-center rounded-full bg-starkio-purple px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-starkio-violet"
					>
						Trabajemos juntos
					</Link>
				</motion.div>

				<motion.button
					type="button"
					className="flex items-center text-starkio-cloud md:hidden"
					onClick={() => setIsOpen((open) => !open)}
					whileTap={{ scale: 0.9 }}
					aria-expanded={isOpen}
					aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
				>
					{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
				</motion.button>
			</motion.div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed inset-0 z-50 bg-void px-6 pt-24 md:hidden"
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
					>
						<motion.button
							type="button"
							className="absolute right-6 top-6 p-2 text-starkio-cloud"
							onClick={closeMenu}
							whileTap={{ scale: 0.9 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							aria-label="Cerrar menú"
						>
							<X className="size-6" />
						</motion.button>
						<nav className="flex flex-col gap-6" aria-label="Navegación móvil">
							{links.map((link, index) => (
								<motion.div
									key={link.href}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 20 }}
									transition={{ delay: index * 0.1 + 0.1 }}
								>
									<Link href={link.href} className="text-base font-medium text-starkio-cloud" onClick={closeMenu}>
										{link.label}
									</Link>
								</motion.div>
							))}
							<motion.div
								className="pt-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ delay: 0.5 }}
							>
								<Link
									href="#contact"
									className="inline-flex w-full items-center justify-center rounded-full bg-starkio-purple px-5 py-3 text-base font-medium text-white transition-colors hover:bg-starkio-violet"
									onClick={closeMenu}
								>
									Trabajemos juntos
								</Link>
							</motion.div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

export { Navbar };
export default Navbar;
