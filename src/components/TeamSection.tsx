import shayanImg from "@/assets/shayan.png";
import oguzhanImg from "@/assets/oguzhan.jpg";
import aslanImg from "@/assets/aslan.jpg";
import mahdiImg from "@/assets/mahdi.png";

const TeamSection = () => {
  const team = [
    {
      name: "Shayan Ebrahimi",
      role: "Tech Lead",
      roleColor: "text-[hsl(var(--gradient-coral-start))]",
      image: shayanImg,
      linkedin: "https://www.linkedin.com/in/shayan-ebrahimi/",
    },
    {
      name: "Oguzhan Dal",
      role: "Business Co-ordinator",
      roleColor: "text-[hsl(var(--gradient-purple-start))]",
      image: oguzhanImg,
      linkedin: "https://www.linkedin.com/in/ozzydal/",
    },
    {
      name: "Aslan Nahich",
      role: "Dreamer",
      roleColor: "text-[hsl(var(--gradient-coral-start))]",
      image: aslanImg,
      linkedin: "https://www.linkedin.com/in/aslan-nahich-86a950137/",
    },
    {
      name: "Mahdi Tahvilian",
      role: "Marketing Lead",
      roleColor: "text-[hsl(var(--gradient-purple-start))]",
      image: mahdiImg,
      linkedin: "https://www.linkedin.com/in/mohammad-mahdi-tahvilian-56a08b215/",
    },
  ];

  return (
    <section id="team" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg text-muted-foreground">The minds behind the voices</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-slide-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-gradient-to-br from-card via-card to-card/80 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 border-2 border-border/50 hover:border-[hsl(var(--gradient-purple-start))] shadow-xl hover:shadow-2xl">
                <div className="aspect-square overflow-hidden relative group">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative p-6 text-center space-y-2 bg-card/95 backdrop-blur-sm">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className={`${member.roleColor} font-semibold text-lg`}>{member.role}</p>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
