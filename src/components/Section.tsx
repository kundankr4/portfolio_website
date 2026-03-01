import { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-2xl text-sm md:text-base text-zinc-400">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}