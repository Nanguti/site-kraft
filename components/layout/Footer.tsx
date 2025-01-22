const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Site Kraft Systems</h3>
            <p>Professional web development and SEO services in Nairobi</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p>Email: info@sitekraft.com</p>
            <p>Phone: +254 123 456 789</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="space-x-4">
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
