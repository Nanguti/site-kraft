const Team = () => {
  const team = [
    {
      name: "John Doe",
      role: "CEO & Lead Developer",
      image: "/team/john.jpg", // Add actual image paths
    },
    {
      name: "Jane Smith",
      role: "SEO Specialist",
      image: "/team/jane.jpg",
    },
    {
      name: "Mike Johnson",
      role: "UI/UX Designer",
      image: "/team/mike.jpg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-48 w-48 object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
