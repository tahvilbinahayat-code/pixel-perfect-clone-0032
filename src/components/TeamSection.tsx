import shayanImg from "@/assets/shayan.png";
import oguzhanImg from "@/assets/oguzhan.jpg";
import aslanImg from "@/assets/aslan.jpg";
import mahdiImg from "@/assets/mahdi.png";

const TeamSection = () => {
  const team = [
    {
      name: "Shayan Ebrahimi",
      role: "Tech Lead",
      roleColor: "text-[hsl(var(--gradient-purple-start))]",
      image: shayanImg,
      linkedin: "https://www.linkedin.com/in/shayan-ebrahimi/",
    },
    {
      name: "Oguzhan Dal",
      role: "Business Co-ordinator",
      roleColor: "text-[hsl(var(--gradient-pink-start))]",
      image: oguzhanImg,
      linkedin: "https://www.linkedin.com/in/ozzydal/",
    },
    {
      name: "Aslan Nahich",
      role: "Dreamer",
      roleColor: "text-[hsl(var(--gradient-pink-start))]",
      image: aslanImg,
      linkedin: "https://www.linkedin.com/in/aslan-nahich-86a950137/",
    },
    {
      name: "Mahdi Tahvilian",
      role: "Marketing Lead",
      roleColor: "text-[hsl(var(--gradient-pink-start))]",
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
              <div className="bg-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="aspect-square bg-gradient-blue flex items-center justify-center overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className={`${member.roleColor} font-medium`}>{member.role}</p>
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
