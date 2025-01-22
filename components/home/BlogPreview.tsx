const BlogPreview = () => {
  const posts = [
    {
      title: "10 SEO Strategies for 2024",
      excerpt:
        "Learn the latest SEO techniques to improve your website's visibility.",
      date: "2024-01-15",
      image: "/blog/seo-strategies.jpg",
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends in web development and technology.",
      date: "2024-01-10",
      image: "/blog/web-dev-future.jpg",
    },
    {
      title: "Optimizing Website Performance",
      excerpt: "Tips and tricks to make your website lightning fast.",
      date: "2024-01-05",
      image: "/blog/performance.jpg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Latest Insights
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <h3 className="mb-4 text-xl font-semibold">{post.title}</h3>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
