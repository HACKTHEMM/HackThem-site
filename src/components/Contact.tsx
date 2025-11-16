import { Mail, MessageSquare, Send, MapPin, Phone, Youtube, Play, Eye, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

const videos = [
  {
    id: '1',
    title: 'Our First Blockchain Hackathon with OxGenignite at NIT Goa Hackathon',
    thumbnail: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '15K',
    likes: '2.3K',
    duration: '12:45',
  },
  {
    id: '2',
    title: 'Our Tech Stack Explained - What We Use & Why',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '22K',
    likes: '3.1K',
    duration: '18:30',
  },
  {
    id: '3',
    title: 'Coding Challenge: Build a Feature in 1 Hour',
    thumbnail: 'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '18K',
    likes: '2.7K',
    duration: '15:20',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 page-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-5">
          <h2 className="text-6xl md:text-7xl font-black gradient-text">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Have a project in mind? Let's build something extraordinary together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'teamhackthem@gmail.com',
                link: 'mailto:teamhackthem@gmail.com',
              },
              {
                icon: Phone,
                title: 'Phone',
                value: '+91 7733969933',
                link: 'tel:+917733969933',
              },
              {
                icon: MapPin,
                title: 'Location',
                value: 'udaipur, Rajasthan, India',
                link: '#',
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  className="block glass-card border border-gray-400/20 rounded-2xl p-6 hover:glass-card-hover hover:silver-glow-hover smooth-transition hover-lift group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 glass-card accent-border rounded-lg group-hover:bg-white/5 smooth-transition">
                      <Icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1 font-medium">{contact.title}</div>
                      <div className="silver-accent font-medium">{contact.value}</div>
                    </div>
                  </div>
                </a>
              );
            })}

            <div className="glass-card border border-gray-400/20 rounded-2xl p-8 space-y-4">
              <MessageSquare className="w-8 h-8 text-gray-400" />
              <h3 className="text-xl font-bold silver-accent">
                Looking for collaboration?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We're always excited to work with innovative teams on challenging
                projects. Whether it's a hackathon or a long-term collaboration, we're
                here to build the future.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="glass-card border border-gray-400/20 rounded-2xl p-8 md:p-12 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-black/50 accent-border rounded-xl text-gray-100 placeholder-gray-600 focus:outline-none focus:border-white/20 smooth-transition"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-black/50 accent-border rounded-xl text-gray-100 placeholder-gray-600 focus:outline-none focus:border-white/20 smooth-transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-black/50 accent-border rounded-xl text-gray-100 placeholder-gray-600 focus:outline-none focus:border-white/20 smooth-transition"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 bg-black/50 accent-border rounded-xl text-gray-100 placeholder-gray-600 focus:outline-none focus:border-white/20 smooth-transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-gray-200 to-gray-300 text-black rounded-xl hover:from-gray-300 hover:to-gray-400 smooth-transition hover-lift flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed font-semibold silver-glow-hover"
              >
                <span>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <Send className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card accent-border">
              <Youtube className="w-5 h-5 text-red-400" />
              <span className="text-sm text-gray-300 font-medium">YouTube Channel</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black gradient-text">
              Watch Our Journey
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Follow along as we share our hackathon experiences, coding tutorials, and tech insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <a
                key={index}
                href="https://youtube.com/@hackthemteam"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card border border-gray-400/20 rounded-2xl overflow-hidden hover:glass-card-hover hover:silver-glow-hover smooth-transition hover-lift group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 smooth-transition flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 group-hover:bg-red-700 flex items-center justify-center smooth-transition group-hover:scale-110">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 rounded text-xs text-white font-medium">
                    {video.duration}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="text-sm font-bold silver-accent line-clamp-2 group-hover:text-gray-200 smooth-transition">
                    {video.title}
                  </h4>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://youtube.com/@hackthemteam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl smooth-transition hover-lift font-semibold"
            >
              <Youtube className="w-5 h-5" />
              Subscribe to our Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
