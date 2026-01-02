import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="section-container">
        <span className="section-anchor"></span>
        <div className="section-wrapper">
          <div className="section-svg desktop">
            {/* Hero SVG content will go here */}
            <div className="py-32 px-8 text-center">
              <h1 className="text-6xl font-bold text-primary mb-6">
                Welcome to Maikona
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Your digital presence starts here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-white">
        <span className="section-anchor"></span>
        <div className="section-wrapper">
          <div className="py-20 px-8 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              About
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Building the future of digital experiences
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-container">
        <span className="section-anchor"></span>
        <div className="section-wrapper">
          <div className="py-20 px-8 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Feature {i}
                  </h3>
                  <p className="text-gray-700">
                    Description of feature {i}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-container bg-white">
        <span className="section-anchor"></span>
        <div className="section-wrapper">
          <div className="py-20 px-8 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              Testimonials
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-lg">
                  <p className="text-gray-700 mb-4 italic">
                    "This is a testimonial quote..."
                  </p>
                  <p className="text-primary font-semibold">- Client {i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <span className="section-anchor"></span>
        <div className="section-wrapper">
          <div className="py-20 px-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Contact
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Get in touch with us
            </p>
            <div className="text-center">
              <a
                href="mailto:contact@maikona.com"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-primary mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-primary opacity-70 hover:opacity-100">About</a></li>
                <li><a href="#features" className="text-primary opacity-70 hover:opacity-100">Features</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-primary opacity-70 hover:opacity-100">Blog</a></li>
                <li><a href="#" className="text-primary opacity-70 hover:opacity-100">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-4">Social</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-primary opacity-70 hover:opacity-100">Twitter/X</a></li>
                <li><a href="#" className="text-primary opacity-70 hover:opacity-100">Instagram</a></li>
                <li><a href="#" className="text-primary opacity-70 hover:opacity-100">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-primary opacity-70 text-sm pt-8 border-t border-primary/20">
            <p>Copyright © 2025 Maikona. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
