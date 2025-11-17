import { Github, Linkedin, Mail, User, Code, Award, Coffee, MapPin, Globe } from 'lucide-react';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Raghavendra Baheti',
    role: 'Founder & AI/Full-Stack Lea',
    photo: '/images/team-photo/raghavedra.JPG',
    bio: 'Dedicated to building real-world AI systems and scalable full-stack products, with a strong focus on innovation, hackathons, and impact-driven tech.',
    location: 'Remote',
    expertise: [
      'Artificial Intelligence',
      'Machine Learning',
      'Generative AI',
      'Full-Stack Development',
      'Python',
      'React',
      'FastAPI',
      'Cloud & DevOps'
    ],
    achievements: [
      'Winner, National Blockchain Competition',
      'Built 10+ real-world AI & full-stack projects',
      'Top performer in college-level tech competitions'
    ],
    favoriteTools: [
      'Python',
      'PyTorch',
      'FastAPI',
      'React.js',
      'MongoDB',
      'MySQL',
      'Docker'
    ],
    socials: {
      portfolio: 'https://raghavendraab.netlify.app/',
      github: 'https://github.com/raghav',
      linkedin: 'https://www.linkedin.com/in/raghavendra',
      email: 'bahetiraghav990@gmail.com'
    },
  },
  {
    name: 'Toheed Akhtar',
    role: 'Co-Founder & AI/ML Lead',
    photo: '/images/team-photo/toheed.jpeg',
    bio: 'I build and do whatever inspires me',
    location: 'Remote',
    expertise: [
      'Machine Learning',
      'Deep Learning',
      'GenAI',
      'System Architecture',
      'Python',
      'FastAPI',
      'Artificial Intelligence',
    ],
    achievements: [
      'Winner, National Blockchain Competition',
      'Finalist (Top 5) at Logithon’25 IIT Bombay — India’s biggest logistics hackathon',
      'National Qualifier at WHCL’25 (World Computer Hacker League)',
      'Built 10+ production-level AI and full-stack systems'
    ],
    favoriteTools: [
      'PyTorch',
      'HuggingFace',
      'LangGraph',
      'FastAPI',
      'React',
      'Docker',
      'AWS',
      'PostgreSQL'
    ],
    socials: {
      portfolio: 'https://toheedakhtar.github.io/takhtar/',
      github: 'https://github.com/toheedakhtar',
      linkedin: 'https://www.linkedin.com/in/toheedakhtar01/',
      email: 'toheedak333@gmail.com'
    },
  },
  {
    name: 'Vansh Bhatnagar  ',
    role: 'Co-Founder & AI Enthusiast',
    photo: '/images/team-photo/vansh.jpeg',
    bio: 'Focused on building real-world AI and scalable full-stack products, with a love for innovation, hackathons, and creating tech that truly makes an impact',
    location: 'Remote',
    expertise: [
      'Artificial Intelligence',
      'Machine Learning',
      'Generative AI',
      'NLP',
      'Python',
      'LLM',
      'FastAPI',
      'Cloud & DevOps',
      'Networking',
    ],
    achievements: [
      'Winner, National Blockchain Competition',
      'Runner-Up, at CodeRED4.0'
    ],
    favoriteTools: [
      'Python',
      'PyTorch',
      'FastAPI',
      'React.js',
      'MongoDB',
      'MySQL',
      'Docker'
    ],
    socials: {
      portfolio: 'https://www.vanshbhatnagar.space/',
      github: 'https://github.com/Vansh41104',
      linkedin: 'https://www.linkedin.com/in/vansh-bhatnagar-66465225b/',
      email: 'vanshbhatnagar445@gmail.com'
    },
  },
  {
    name: 'Vinit Jain',
    role: 'Co-Founder & Full-Stack Lead',
    photo: '/images/team-photo/vinit.jpeg',
    bio: 'Dedicated full-stack engineer passionate about building AI-powered applications and innovative web solutions. Experienced in crafting high-performance systems, participating in hackathons, and expanding skill sets in cloud and data security.',
    location: 'Remote',
    "expertise": [
      "Full-Stack Development",
      "Artificial Intelligence",
      "Cloud & DevOps",
      "FastAPI",
      "TypeScript & JavaScript",
      "React.js & Next.js",
      "Docker",
      "Linux",
      "Git/GitHub",
      "Data Security",
      "API Design",
      "Large Language Models"
    ],
    "achievements": [
      "Developed AyleChat, a custom AI chat application leveraging cutting-edge LLMs via Groq and Exa Search",
      "Built Displayr, a full-stack movie and TV show recommendation engine using TMDB API",
      "Contributed to datawipe-core for secure data wiping and multiple AI-powered projects",
      "Winner, 0xGenIgnite Web3 Hackathon (NIT Goa): Runner-up for Smart India Hackathon (internal)",
      "Designed production-grade onboarding flows & authentication routes for GenAI dashboards",
      "Completed 10+ full-stack web and Python applications"
    ],
    "favoriteTools": [
      "Next.js",
      "React.js",
      "TypeScript",
      "Docker",
      "FastAPI",
      "Git/GitHub",
      "VS Code",
      "Groq AI",
      "Exa Search"
    ],

    socials: {
      portfolio: 'https://vinitj088.vercel.app/',
      github: 'https://github.com/vinitj088',
      linkedin: 'https://www.linkedin.com/in/vinit-j-2400a7246/',
      email: 'vinitjain088@gmail.com'
    },
  },
  {
    name: 'Mudit Gupta',
    role: 'Designer & Research',
    photo: '/images/team-photo/mudit.jpeg',
    bio: 'Building infrastructure for tomorrow',
    location: 'Remote',
    expertise: ['Full-Stack Development', 'React', 'Node.js', 'FastAPI', 'Docker', 'Cloud & DevOps'],
    achievements: ['Winner of multiple Web3 & AI Hackathons',
      'Winner, National Blockchain Competition',
      'Top performer in college-level tech competitions'
    ],
    favoriteTools: [
      'Next.js',
      'PyTorch',
      'FastAPI',
      'React.js',
      'MongoDB',
      'MySQL',
      'Docker'
    ],
    socials: {
      portfolio: 'https://github.com/MUDITGUPTA08',
      github: 'https://github.com/MUDITGUPTA08',
      linkedin: 'https://www.linkedin.com/in/mudit-gupta-495881276/',
      email: 'mudit2005gupta@gmail.com',
    },
  },
];

export default function Team() {
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
            The Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Meet the minds behind the innovation
          </p>
          <p className="text-gray-500 text-sm">Click on any card to learn more</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flip-card h-[480px] cursor-pointer ${flippedCards.includes(index) ? 'flipped' : ''
                }`}
              onClick={() => toggleFlip(index)}
            >
              <div className="flip-card-inner h-full">
                {/* Front of Card */}
                <div className="flip-card-front">
                  <div className="glass-card border border-gray-400/20 rounded-2xl p-8 hover:glass-card-hover hover:silver-glow-hover smooth-transition hover-lift group h-full">
                    <div className="flex flex-col items-center text-center space-y-6 h-full">
                      <div className="relative">
                        {member.photo ? (
                          <div className="w-32 h-32 rounded-full border border-gray-400/30 overflow-hidden silver-glow smooth-transition">
                            <img
                              src={member.photo}
                              alt={`${member.name} portrait`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="w-32 h-32 rounded-full border border-gray-400/30 flex items-center justify-center bg-gradient-to-br from-gray-400/10 to-gray-500/20 group-hover:from-gray-400/20 group-hover:to-gray-500/30 smooth-transition">
                            <User className="w-16 h-16 text-gray-400" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-3 flex-grow">
                        <h3 className="text-2xl font-bold silver-accent">{member.name}</h3>
                        <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                          {member.role}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                      </div>

                      <div className="flex items-center gap-3 pt-4">
                        <a
                          href={member.socials.portfolio}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 glass-card accent-border rounded-lg hover:bg-white/5 smooth-transition hover-lift"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} portfolio`}
                        >
                          <Globe className="w-5 h-5 text-gray-300" />
                        </a>
                        <a
                          href={member.socials.github}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 glass-card accent-border rounded-lg hover:bg-white/5 smooth-transition hover-lift"
                        >
                          <Github className="w-5 h-5 text-gray-300" />
                        </a>
                        <a
                          href={member.socials.linkedin}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 glass-card accent-border rounded-lg hover:bg-white/5 smooth-transition hover-lift"
                        >
                          <Linkedin className="w-5 h-5 text-gray-300" />
                        </a>
                        <a
                          href={`mailto:${member.socials.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 glass-card accent-border rounded-lg hover:bg-white/5 smooth-transition hover-lift"
                        >
                          <Mail className="w-5 h-5 text-gray-300" />
                        </a>
                      </div>

                      <div className="text-xs text-gray-600 uppercase tracking-wider">
                        Click to flip
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back">
                  <div className="glass-card border border-gray-400/20 rounded-2xl p-8 hover:glass-card-hover hover:silver-glow-hover smooth-transition h-full">
                    <div className="flex flex-col space-y-6 h-full">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold silver-accent">{member.name}</h3>
                        {member.photo ? (
                          <div className="w-12 h-12 rounded-full border border-gray-400/30 overflow-hidden silver-glow">
                            <img
                              src={member.photo}
                              alt={`${member.name} portrait`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full border border-gray-400/30 flex items-center justify-center bg-gradient-to-br from-gray-400/10 to-gray-500/20">
                            <User className="w-5 h-5 text-gray-400" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-4 flex-grow overflow-y-auto">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-medium">Location</span>
                          </div>
                          <p className="text-gray-400 text-sm">{member.location}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Code className="w-4 h-4" />
                            <span className="text-sm font-medium">Expertise</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs bg-white/5 border border-gray-400/20 rounded-md text-gray-400"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Award className="w-4 h-4" />
                            <span className="text-sm font-medium">Achievements</span>
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                            {member.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Coffee className="w-4 h-4" />
                            <span className="text-sm font-medium">Favorite Tools</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {member.favoriteTools.map((tool, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs bg-white/5 border border-gray-400/20 rounded-md text-gray-400"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
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
