import { Github, Linkedin, Twitter, Mail, User, Code, Award, Coffee, MapPin } from 'lucide-react';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Raghavendra Baheti',
    role: 'Founder & AI/Full-Stack Lea',
    bio: 'Dedicated to building real-world AI systems and scalable full-stack products, with a strong focus on innovation, hackathons, and impact-driven tech.',
    location: 'San Francisco, CA',
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
      'Winner of multiple Web3 & AI Hackathons',
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
      github: 'https://github.com/raghav',
      linkedin: 'https://www.linkedin.com/in/raghavendra',
      twitter: '#',
      email: 'bahetiraghav990@gmail.com'
    },
  },
  {
      name: 'Toheed Akhtar',
      role: 'Co-Founder & AI/ML Lead',
      bio: 'AI/ML engineer and full-stack problem solver, passionate about architecting scalable systems, building enterprise-grade AI solutions, and driving innovation through deep technical expertise.',
      location: 'India',
      expertise: [
    'Machine Learning',
    'Deep Learning',
    'GenAI',
    'System Architecture',
    'Cloud Computing',
    'DevOps',
    'Microservices',
    'Full-Stack Engineering'
  ],
  achievements: [
    'Runner-up at Lenden TMP (Multilingual AI Sales Assistant)',
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
    github: '#',
    linkedin: '#',
    twitter: '#',
    email: 'toheedak443@gmail.com'
  },
},
  {
    name: 'Vansh Bhatnagar  ',
    role: 'Co-Founder & Full-Stack Lead',
    bio: 'Full-stack developer and problem solver, passionate about building scalable and user-friendly web applications, and driving innovation through deep technical expertise.',
    location: 'India',
    expertise: [
      'Full-Stack Development',
      'React',
      'Node.js',
      'FastAPI',
      'Docker',
      'Cloud & DevOps'
    ],
    achievements: [
      'Winner of multiple Web3 & AI Hackathons',
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
      github: 'https://github.com/vansh',
      linkedin: 'https://www.linkedin.com/in/vansh',
      twitter: '#',
      email: 'vanshbhatnagar2004@gmail.com'
    },
  },
  {
    name: 'Vinit Jain',
    role: 'Designer & Full-Stack Lead',
    bio: 'Designing the future of digital products',
    location: 'India',
    expertise: ['Full-Stack Development', 'React', 'Node.js', 'FastAPI', 'Docker', 'Cloud & DevOps'],
    achievements: [
      'Winner of multiple Web3 & AI Hackathons',
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
      github: 'https://github.com/vinit',
      linkedin: 'https://www.linkedin.com/in/vinit',
      twitter: '#',
      email: 'vinitjain2004@gmail.com'
    },
  },
  {
    name: 'Mudit Gupta',
    role: 'Designer & Research',
    bio: 'Building infrastructure for tomorrow',
    location: 'Boston, MA',
    expertise: ['CI/CD', 'Infrastructure as Code', 'Security', 'Monitoring'],
    achievements: 'Deployed 50+ production pipelines',
    favoriteTools: 'Terraform, Jenkins, Grafana',
    socials: {
      github: '#',
      linkedin: '#',
      twitter: '#',
      email: 'taylor@hackthemteam.com',
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
              className={`flip-card h-[480px] cursor-pointer ${
                flippedCards.includes(index) ? 'flipped' : ''
              }`}
              onClick={() => toggleFlip(index)}
            >
              <div className="flip-card-inner h-full">
                {/* Front of Card */}
                <div className="flip-card-front">
                  <div className="glass-card border border-gray-400/20 rounded-2xl p-8 hover:glass-card-hover hover:silver-glow-hover smooth-transition hover-lift group h-full">
                    <div className="flex flex-col items-center text-center space-y-6 h-full">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full border border-gray-400/30 flex items-center justify-center bg-gradient-to-br from-gray-400/10 to-gray-500/20 group-hover:from-gray-400/20 group-hover:to-gray-500/30 smooth-transition">
                          <User className="w-16 h-16 text-gray-400" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center silver-glow">
                          <span className="text-sm font-bold text-black">{index + 1}</span>
                        </div>
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
                          href={member.socials.twitter}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 glass-card accent-border rounded-lg hover:bg-white/5 smooth-transition hover-lift"
                        >
                          <Twitter className="w-5 h-5 text-gray-300" />
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
                        <div className="w-10 h-10 rounded-full border border-gray-400/30 flex items-center justify-center bg-gradient-to-br from-gray-400/10 to-gray-500/20">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
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
                          <p className="text-gray-400 text-sm">{member.achievements}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Coffee className="w-4 h-4" />
                            <span className="text-sm font-medium">Favorite Tools</span>
                          </div>
                          <p className="text-gray-400 text-sm">{member.favoriteTools}</p>
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
