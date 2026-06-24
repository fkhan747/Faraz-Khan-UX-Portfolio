import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock, Mail } from "lucide-react";
import { projects, PROFILE } from "../data/content";
import ProjectNav from "../components/ProjectNav";

export default function ComingSoonCase() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  return (
    <div data-testid="coming-soon-case" className="min-h-[80vh]">
      <section className="px-6 md:px-10 lg:px-16 pt-12 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
          <Link
            to="/projects"
            data-testid="back-link"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-[#F5379B] transition-colors"
          >
            <ArrowLeft size={14} /> all projects
          </Link>
          <ProjectNav slug={slug} />
        </div>
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-6">case study · drafting</p>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
          {project ? project.title : "Case study"}
        </h1>
        {project && (
          <p className="mt-6 max-w-2xl text-xl md:text-2xl text-[#F4F3FA] leading-snug font-light italic">
            {project.subtitle}
          </p>
        )}
      </section>

      <section className="px-6 md:px-10 lg:px-16">
        <div className="rounded-3xl bg-white border-2 border-[#F5379B] p-10 md:p-16">
          <div className="flex items-center gap-3 mb-6 text-[#F5379B]">
            <Clock size={20} />
            <span className="font-mono text-xs uppercase tracking-[0.25em]">coming soon</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black leading-tight max-w-3xl text-[#F5379B]">
            I&apos;m polishing this one in the studio.
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl text-black">
            The case study is being written and the screens prepared. Want an early walkthrough? Drop me a line and I&apos;ll share it over a 30-min call.
          </p>
          <a
            href={`mailto:${PROFILE.email}?subject=Walkthrough%20request%20-%20${encodeURIComponent(project ? project.title : "case study")}`}
            data-testid="early-walkthrough-cta"
            className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full dark-card text-white font-semibold text-sm hover:bg-[#241B33] transition-colors"
          >
            <Mail size={16} /> request early walkthrough
          </a>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-20">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5379B] mb-4">while you&apos;re here</p>
        <h2 className="font-display text-3xl md:text-4xl font-black mb-8 ">read a Full Case Study →</h2>
        <Link
          to="/case/finvista"
          data-testid="read-featured"
          className="group block rounded-3xl dark-card p-7 hover:-translate-y-1 transition-transform"
        >
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-black">FinVista</h3>
              <p className="mt-2 text-sm md:text-base text-[#A29CB4]">
                re-imagining a digital lending platform for india&apos;s next billion borrowers
              </p>
            </div>
            <ArrowUpRight className="opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" size={28} />
          </div>
        </Link>
      </section>
    </div>
  );
}
