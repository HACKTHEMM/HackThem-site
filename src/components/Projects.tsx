import { Github, ExternalLink, Code2, Clock } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'LumenFX Crypto Payment Gateway',
    description: 'Advanced Crypto Payment Gateway with real-time market analysis, predictive analytics, and automated trading strategies.',
    tech: ['React', 'Node.js', 'Web3', 'Supabase','Rust'],
    github: 'https://github.com/HACKTHEMM',
    demo: 'https://lumenfx.vercel.app/',
    impact: 'Reduced quantum algorithm testing time by 70%',
    features: ['Real-time market analysis', 'Predictive analytics', 'Automated trading strategies', 'Crypto payment gateway'],
    timeSpent: '1 months'
  },
  {
    title: 'Sahayak - Mental wellness companion',
    description: 'Mental wellness companion app that helps users track their mental health and wellbeing.',
    tech: ['Python', 'Ethereum', 'FastAPI', 'Docker'],
    github: 'https://github.com/HACKTHEMM',
    demo: 'https://sahayak-mentalhealth-611137562095.us-central1.run.app/',
    impact: 'Helped users improve their mental health and wellbeing',
    features: ['Mental health tracking', 'Wellbeing assessment', 'Mental health resources', 'Mental health support'],
    timeSpent: '0.5 months'
  },
  {
    title: 'SalesSpeak – AI Sales Chatbot',
    description: 'Conversational AI chatbot that automates lead qualification and assists customers with smart product recommendations using NLP.',
    tech: ['React', 'PYthon', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/HACKTHEMM',
    demo: '#',
    impact: 'Helped sales teams improve lead qualification and customer engagement',
    features: ['AI lead qualification', 'Smart product recommendations', 'NLP', 'Conversational AI'],
    timeSpent: '1 months'
  },
  {
    title: 'Voce – The Voice of City',
    description: 'A multilingual civic engagement platform allowing citizens to raise local issues via voice or text input, enriched with sentiment analysis and translation support.',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/HACKTHEMM',
    demo: '#',
    impact: 'Helped users raise local issues and engage with their community',
    features: ['Voice or text input', 'Sentiment analysis', 'Translation support', 'Multilingual support'],
    timeSpent: '1 Week'
  },
  {
    title: 'CivicTrack – Civic Issue Tracker',
    description: 'Location-based platform to report and monitor civic issues like potholes, garbage, and water leaks with status tracking, moderation, and analytics.',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/HACKTHEMM',
    demo: '#',
    impact: 'Helped users report and monitor civic issues',
    features: ['Location-based reporting', 'Status tracking', 'Moderation', 'Analytics'],
    timeSpent: '1 Week'
  },
  {
    title: 'Multi-Modal Cross-Border Route Selectorult',
    description: 'Advanced logistics optimization system leveraging Dijkstra Algorithm for efficient cross-border routing with real-time tracking capabilities.',
    tech: ['Python', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/HACKTHEMM',
    demo: '#',
    impact: 'Helped logistics companies optimize their cross-border routing',
    features: ['Zero-knowledge proofs', 'Biometric auth', 'Quantum-resistant', 'Multi-factor'],
    timeSpent: '1 Week'
  },
  {
    title: 'StackIt - Q&A Platform',
    description: 'A full-stack collaborative Q&A platform with modern UI, real-time features, and PostgreSQL-backed data intelligence.',
    tech: ['Next.js', 'Node.js', 'Express', 'PostgreSQL','Tailwind', 'TypeScript'],
    github: 'https://github.com/HACKTHEMM',
    demo: '#',
    impact: 'Helped users ask and answer questions',
    features: ['Real-time features', 'PostgreSQL-backed data intelligence', 'Modern UI', 'Collaborative'],
    timeSpent: '1 Week'
  },
];

export default function Projects() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 page-transition">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-5">
          <h2 className="text-6xl md:text-7xl font-black gradient-text">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Innovation forged through code and creativity
          </p>
          <p className="text-gray-500 text-sm">Click on any card to see detailed metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flip-card h-[520px] cursor-pointer ${
                flippedCards.includes(index) ? 'flipped' : ''
              }`}
              onClick={() => toggleFlip(index)}
            >
              <div className="flip-card-inner h-full">
                {/* Front of Card */}
                <div className="flip-card-front">
                  <div className="glass-card border border-gray-400/20 rounded-2xl p-8 hover:glass-card-hover hover:silver-glow-hover smooth-transition hover-lift group flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 glass-card accent-border rounded-lg group-hover:bg-white/5 smooth-transition">
                        <Code2 className="w-6 h-6 text-gray-300" />
                      </div>
                      <span className="text-xs text-gray-600 font-mono font-medium">0{index + 1}</span>
                    </div>

                    <h3 className="text-2xl font-bold silver-accent mb-4">{project.title}</h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-medium text-gray-300 glass-card accent-border rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-white/5">
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 glass-card accent-border rounded-lg hover:bg-white/5 smooth-transition hover-lift"
                      >
                        <Github className="w-4 h-4 text-gray-300" />
                        <span className="text-sm text-gray-300 font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-black rounded-lg hover:from-gray-300 hover:to-gray-400 smooth-transition hover-lift"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    </div>

                    <div className="text-xs text-gray-600 uppercase tracking-wider text-center mt-4">
                      Click for details
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back">
                  <div className="glass-card border border-gray-400/20 rounded-2xl p-8 hover:glass-card-hover hover:silver-glow-hover smooth-transition h-full">
                    <div className="flex flex-col space-y-5 h-full">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold silver-accent">{project.title}</h3>
                        <div className="p-2 rounded-lg border border-gray-400/30 bg-gradient-to-br from-gray-400/10 to-gray-500/20">
                          <Code2 className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>

                      <div className="space-y-4 flex-grow overflow-y-auto">
                        <div className="space-y-2">
                          <span className="text-xs text-gray-500 font-medium uppercase">Impact</span>
                          <p className="text-sm text-gray-400 leading-relaxed">{project.impact}</p>
                        </div>

                        <div className="space-y-2">
                          <span className="text-xs text-gray-500 font-medium uppercase">Key Features</span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs bg-white/5 border border-gray-400/20 rounded text-gray-400"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <span className="text-xs text-gray-500 font-medium uppercase">Tech Stack</span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech, idx) => (
                              <span
                                key={`${project.title}-tech-${idx}`}
                                className="px-2 py-1 text-xs bg-white/5 border border-gray-400/20 rounded text-gray-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-xs text-gray-500">Development Time:</span>
                          <span className="text-xs text-gray-400 font-medium">{project.timeSpent}</span>
                        </div>
                      </div>

                      <div className="text-xs text-gray-600 uppercase tracking-wider text-center pt-4 border-t border-gray-400/20">
                        Click to flip back
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
