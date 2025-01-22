const Industries = () => {
  const industries = [
    {
      title: "Real Estate",
      description: "Digital solutions for property management and listings",
    },
    {
      title: "Education",
      description: "Web platforms for schools and educational institutions",
    },
    {
      title: "NGOs",
      description: "Digital presence for non-profit organizations",
    },
    {
      title: "Healthcare",
      description: "Web solutions for medical practices and clinics",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Industries We Serve
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-lg bg-gray-50 p-6 text-center"
            >
              <h3 className="mb-4 text-xl font-semibold">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
