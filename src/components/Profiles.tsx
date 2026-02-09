import { Github, Award, Code } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const Profiles = () => {
  const profiles = [
    {
      name: "GitHub",
      username: "@Sam12696",
      description: "Explore my repositories, contributions, and open-source projects.",
      icon: Github,
      url: "https://github.com/Sam12696",
      color: "from-gray-50 to-slate-100",
      accentColor: "text-gray-700"
    },
    {
      name: "HackerRank",
      username: "sampathprofile",
      description: "Check out my problem-solving skills and coding challenges.",
      icon: Code,
      url: "https://www.hackerrank.com/profile/sampathprofile",
      color: "from-green-50 to-emerald-100",
      accentColor: "text-green-600"
    },
    {
      name: "Coursera",
      username: "Sampath",
      description: "View my completed courses and certifications in data science and cloud.",
      icon: Award,
      url: "https://www.coursera.org/user/ebac95c1eac5057f713fd38cf16d16c3",
      color: "from-blue-50 to-cyan-100",
      accentColor: "text-blue-600"
    }
  ];

  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>

      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
          <h2 className="section-heading">Connect With Me</h2>
          <p className="section-subheading">
            Find me on various platforms and explore my work, achievements, and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <ParallaxElement
                key={profile.name}
                speed={0.05}
                className="animate-on-scroll opacity-0"
              >
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="glass-card p-8 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`bg-gradient-to-br ${profile.color} h-20 w-20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent size={40} className={`${profile.accentColor}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
                    <p className={`text-sm font-medium mb-3 ${profile.accentColor}`}>
                      {profile.username}
                    </p>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {profile.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      <span>Visit Profile</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </a>
              </ParallaxElement>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <p className="text-muted-foreground">
            Feel free to connect, follow, or reach out to collaborate on interesting projects!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
