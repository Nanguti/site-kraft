const CaseStudies = () => {
  const cases = [
    {
      title: "E-commerce Platform",
      client: "Local Retail Chain",
      description:
        "Built a modern e-commerce solution with integrated payment systems",
      result: "150% increase in online sales",
    },
    {
      title: "School Management System",
      client: "International School",
      description:
        "Developed a comprehensive digital platform for student management",
      result: "Improved administrative efficiency by 80%",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Case Studies</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((study) => (
            <div
              key={study.title}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold">{study.title}</h3>
              <p className="mb-2 text-blue-600">{study.client}</p>
              <p className="mb-4 text-gray-600">{study.description}</p>
              <p className="font-medium text-green-600">{study.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
