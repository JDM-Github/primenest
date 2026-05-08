
export function SectionTag({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.12em] uppercase text-[#c9a227] font-semibold mb-4">
            <span className="w-5 h-px bg-[#c9a227]" />
            {children}
            <span className="w-5 h-px bg-[#c9a227]" />
        </div>
    );
}