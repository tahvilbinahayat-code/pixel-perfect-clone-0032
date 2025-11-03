const TeamSection = () => {
  const team = [
    {
      name: "Shayan Ebrahimi",
      role: "Tech Lead",
      roleColor: "text-[hsl(var(--gradient-coral-start))]",
    },
    {
      name: "Oguzhan Dal",
      role: "Business Co-ordinator",
      roleColor: "text-[hsl(var(--gradient-pink-start))]",
    },
    {
      name: "Aslan Nahich",
      role: "Dreamer",
      roleColor: "text-[hsl(var(--gradient-pink-start))]",
    },
    {
      name: "Mahdi Tahvilian",
      role: "Marketing Lead",
      roleColor: "text-[hsl(var(--gradient-pink-start))]",
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
            <div 
              key={member.name}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="aspect-square bg-gradient-blue flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-muted/30 flex items-center justify-center">
                    <span className="text-6xl font-bold text-muted-foreground/50">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className={`${member.roleColor} font-medium`}>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
