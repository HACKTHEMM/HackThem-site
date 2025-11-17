import { Trophy, Award, Star, Zap, Crown } from 'lucide-react';

const achievements = [
  {
    icon: Crown,
    title: 'OxGenignite  ',
    award: 'Grand Prize Winner',
    description: 'First place among 30+ teams for Blockchain project',
    date: 'October 2025',
  },
  {
    icon: Trophy,
    title: 'Internal SIH 2025',
    award: 'Runner Up',
    description: 'Recognized for the best project in the Internal SIH 2025',
    date: 'September 2025',
  },
  {
    icon: Award,
    title: 'The Matrix Protocol',
    award: '2nd runner up',
    description: 'Recognized for the best Agent based AI project at the Lenden club in the The Matrix Protocol',
    date: 'June 2025',
  },
  {
    icon: Star,
    title: 'WCHL Hackathon',
    award: 'top 5 finalist',
    description: 'Recognized for the best LLM based AI project in the WCHL Hackathon',
    date: 'August 2025',
  },
  {
    icon: Zap,
    title: 'Logithon IIT Bombay',
    award: 'top 4 finalist',
    description: 'Recognized for the best LLM based AI project in the Logithon IIT Bombay',
    date: 'March 2025',
  },
];

const milestones = [
  { value: '5+', label: 'Hackathons Won' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '100K+', label: 'Lines of Code' },
  { value: '15+', label: 'Tech Stacks Mastered' },
];

export default function Achievements() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 page-transition">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-5">
          <h2 className="text-6xl md:text-7xl font-black gradient-text">
            Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Recognition earned through relentless innovation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="glass-card border border-gray-400/20 rounded-2xl p-8 text-center hover:glass-card-hover hover:silver-glow-hover smooth-transition hover-lift"
            >
              <div className="text-5xl font-black silver-accent mb-3">
                {milestone.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                {milestone.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="glass-card border border-gray-400/20 rounded-2xl p-8 hover:glass-card-hover hover:silver-glow-hover smooth-transition hover-lift group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-400/10 to-gray-500/20 border border-gray-400/30 flex items-center justify-center group-hover:from-gray-400/20 group-hover:to-gray-500/30 smooth-transition">
                      <Icon className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold silver-accent mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 font-semibold text-sm">
                        {achievement.award}
                      </p>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                      <span className="text-xs text-gray-600 font-medium">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
