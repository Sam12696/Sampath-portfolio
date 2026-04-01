
import { ArrowUpRight, Download, Mail } from 'lucide-react';

const CodeSnippet = () => (
  <div className="rounded-xl overflow-hidden" style={{ background: '#0d1117', border: '1px solid rgba(0,229,255,0.15)' }}>
    <div className="flex items-center justify-between px-4 py-3" style={{ background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <span className="text-xs text-muted-foreground font-mono">main.py</span>
    </div>
    <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
      <code>
        <span className="text-gray-500"># Global Data Pipeline{'\n'}</span>
        <span className="text-purple-400">import </span>
        <span style={{ color: '#00e5ff' }}>aws_glue_etl </span>
        <span className="text-purple-400">as </span>
        <span className="text-white">glue{'\n\n'}</span>
        <span className="text-purple-400">def </span>
        <span className="text-yellow-300">architect_pipeline</span>
        <span className="text-white">(</span>
        <span className="text-orange-300">input_s3</span>
        <span className="text-white">{'):'}{'\n'}</span>
        <span className="text-white">    spark_session </span>
        <span className="text-purple-400">= </span>
        <span style={{ color: '#00e5ff' }}>glue</span>
        <span className="text-white">.init(){'\n'}</span>
        <span className="text-white">    df </span>
        <span className="text-purple-400">= </span>
        <span className="text-white">spark_session.read_json(</span>
        <span className="text-orange-300">input_s3</span>
        <span className="text-white">){'\n\n'}</span>
        <span className="text-gray-500">    # Scaling logic{'\n'}</span>
        <span className="text-white">    processed_df </span>
        <span className="text-purple-400">= </span>
        <span className="text-white">df.filter(df.status </span>
        <span className="text-purple-400">== </span>
        <span className="text-green-400">'VALID'</span>
        <span className="text-white">){'\n\n'}</span>
        <span className="text-purple-400">    return </span>
        <span className="text-white">processed_df.write_redshift()</span>
      </code>
    </pre>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-7">
            {/* Profile photo + availability */}
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0" style={{ border: '2px solid hsl(191 100% 50%)', boxShadow: '0 0 16px rgba(0,229,255,0.25)' }}>
                <img src="/profile_image.jpg" alt="Sampath Nanamcharla" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }}></span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#4ade80' }}>
                  Available for System Architecture
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="animate-fade-up">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-foreground">
                Sampath<br />Nanamcharla
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground animate-fade-up max-w-lg" style={{ animationDelay: '200ms' }}>
              Senior Python & AWS Data Engineer&nbsp;|&nbsp;Scalable ETL Pipelines&nbsp;|&nbsp;Infrastructure Architect
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '350ms' }}>
              <a
                href="#projects"
                className="primary-button flex items-center gap-2"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                View Architecture <ArrowUpRight size={16} />
              </a>
              <a
                href="/Sampath-portfolio/Sampath_Nanamcharla_Resume.docx"
                className="secondary-button flex items-center gap-2"
                download="Sampath_Nanamcharla_Resume.docx"
              >
                <Download size={16} /> Download CV
              </a>
            </div>

            {/* Core stack pills */}
            <div className="animate-fade-up" style={{ animationDelay: '500ms' }}>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {['Python 3.12', 'AWS Glue', 'PySpark', 'Redshift', 'Kafka', 'Docker'].map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — code card */}
          <div className="animate-fade-in lg:pl-8" style={{ animationDelay: '300ms' }}>
            <CodeSnippet />
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
        style={{
          background: 'rgba(10,13,26,0.9)',
          border: '1px solid rgba(0,229,255,0.3)',
          color: 'hsl(191 100% 50%)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 20px rgba(0,229,255,0.1)',
        }}
      >
        Hire the Architect <Mail size={15} />
      </a>
    </section>
  );
};

export default Hero;
