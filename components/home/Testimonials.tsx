const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Real Estate Hub",
      text: "Site Kraft Systems transformed our online presence. Our property listings now get 3x more engagement.",
      image: "/testimonials/sarah.jpg",
    },
    {
      name: "David Chen",
      company: "Education First",
      text: "The school management system they built has streamlined our entire administrative process.",
      image: "/testimonials/david.jpg",
    },
    {
      name: "Maria Garcia",
      company: "Healthcare Plus",
      text: "Professional, responsive, and delivered exactly what we needed for our medical practice.",
      image: "/testimonials/maria.jpg",
    },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <p className="mb-6 italic text-gray-600">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
