import Image from "next/image";
import Link from "next/link";
import { BrainCircuit, Building2, Code2, FileText, Mail, Scale } from "lucide-react";

const columns = [
  {
    title: "Ecosistema",
    links: [
      { label: "Data Analytics", href: "#areas", icon: BrainCircuit },
      { label: "Software Engineering", href: "#areas", icon: Code2 },
      { label: "AI Intelligence", href: "#areas", icon: BrainCircuit },
    ],
  },
  {
    title: "Compañías",
    links: [
      { label: "Starck Brand Hub", href: "#ventures", icon: Building2 },
      { label: "Aqualis", href: "#ventures", icon: Building2 },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad", icon: Scale },
      { label: "Términos", href: "/terminos", icon: FileText },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Link href="#home" className="inline-flex items-center gap-3">
            <Image src="/logo/starkio-icon.svg" alt="Starkio Labs" width={36} height={36} />
            <span className="text-xl font-bold tracking-tight text-starkio-cloud">
              Stark<span className="text-starkio-purple">io</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-starkio-cloud/55">
            Where ideas become ecosystems. Construimos empresas de Data,
            Software e Inteligencia Artificial diseñadas para perdurar.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-starkio-cloud/55">
            <a href="mailto:contacto@starkio.io" className="inline-flex items-center gap-2 hover:text-starkio-cloud transition-colors">
              <Mail className="size-4" aria-hidden="true" /> Contacto
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-starkio-cloud transition-colors">
              <Code2 className="size-4" aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8 lg:justify-items-end">
          {columns.map(({ title, links }) => (
            <div key={title}>
              <h2 className="text-sm font-semibold text-starkio-cloud">{title}</h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <Link href={href} className="group inline-flex items-center gap-2 text-sm text-starkio-cloud/55 transition-colors hover:text-starkio-cloud">
                      <Icon className="size-4 stroke-[1.75] text-starkio-cloud/40 transition-colors group-hover:text-starkio-purple" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-3 border-t border-white/10 py-6 text-xs text-starkio-cloud/35 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Starkio Labs SpA. Todos los derechos reservados.</p>
        <p>Building what endures. · Santiago, Chile</p>
      </div>
    </footer>
  );
}
