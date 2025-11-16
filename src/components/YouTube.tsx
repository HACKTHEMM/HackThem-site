import { Youtube, Play, Eye, ThumbsUp, Calendar } from 'lucide-react';

const videos = [
  {
    id: '1',
    title: 'Winning Our 5th Hackathon - Behind The Scenes',
    thumbnail: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '15K',
    likes: '2.3K',
    date: '2 weeks ago',
    duration: '12:45',
    description: 'Watch how we built an AI-powered app in 24 hours and won first place!'
  },
  {
    id: '2',
    title: 'Our Tech Stack Explained - What We Use & Why',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '22K',
    likes: '3.1K',
    date: '1 month ago',
    duration: '18:30',
    description: 'Deep dive into our favorite technologies and tools for rapid development'
  },
  {
    id: '3',
    title: 'Coding Challenge: Build a Feature in 1 Hour',
    thumbnail: 'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '18K',
    likes: '2.7K',
    date: '3 weeks ago',
    duration: '15:20',
    description: 'Can we build a complete feature under pressure? Watch and find out!'
  },
  {
    id: '4',
    title: 'Team Collaboration Tips for Hackathons',
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '12K',
    likes: '1.9K',
    date: '2 months ago',
    duration: '10:15',
    description: 'Learn our secret strategies for effective team collaboration'
  },
  {
    id: '5',
    title: 'Live Coding Session: React + AI Integration',
    thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '25K',
    likes: '4.2K',
    date: '1 week ago',
    duration: '45:30',
    description: 'Uncut live coding session building an AI chatbot from scratch'
  },
  {
    id: '6',
    title: 'Hackathon Prep: What to Bring & How to Succeed',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '30K',
    likes: '5.1K',
    date: '2 months ago',
    duration: '14:40',
    description: 'Everything you need to know before attending your first hackathon'
  },
];

export default function YouTube() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 page-transition">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-5">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card accent-border mb-4">
            <Youtube className="w-5 h-5 text-red-400" />
            <span className="text-sm text-gray-300 font-medium">YouTube Channel</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black gradient-text">
            Latest Content
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Follow our journey, learn our techniques, and get inspired
          </p>
          <a
            href="https://youtube.com/@hackthemteam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl smooth-transition hover-lift font-semibold mt-4"
          >
            <Youtube className="w-5 h-5" />
            Subscribe to our Channel
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="glass-card border border-gray-400/20 rounded-2xl overflow-hidden hover:glass-card-hover hover:silver-glow-hover smooth-transition hover-lift group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 smooth-transition flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 flex items-center justify-center smooth-transition group-hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-xs text-white font-medium">
                  {video.duration}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold silver-accent line-clamp-2 group-hover:text-gray-200 smooth-transition">
                  {video.title}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-400/10">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://youtube.com/@hackthemteam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card border border-gray-400/30 rounded-xl hover:bg-white/5 hover:border-gray-300/50 smooth-transition hover-lift text-gray-200 font-semibold"
          >
            <Youtube className="w-5 h-5 text-red-400" />
            View All Videos
          </a>
        </div>
      </div>
    </section>
  );
}
