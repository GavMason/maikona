import Navigation from '@/components/Navigation';
import SVGSection from '@/components/SVGSection';
import SharedDefs from '@/components/SharedDefs';

export default function Home() {
  return (
    <main>
      {/* Shared SVG definitions */}
      <SharedDefs />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <SVGSection
        name="hero"
        id="section2"
        style={{ backgroundColor: '#f5e6d3' }}
      />

      {/* About Section */}
      <SVGSection
        name="about"
        id="section3"
        style={{ backgroundColor: '#d32f2f' }}
      />

      {/* Features Section */}
      <SVGSection
        name="features"
        id="section4"
        style={{ backgroundColor: '#f5e6d3' }}
      />

      {/* How It Works Section */}
      <SVGSection
        name="howitworks"
        id="section5"
        style={{ backgroundColor: '#d32f2f' }}
      />

      {/* Pricing Section */}
      <SVGSection
        name="pricing"
        id="section6"
        style={{ backgroundColor: '#f5e6d3' }}
      />

      {/* Reviews Section */}
      <SVGSection
        name="reviews"
        id="section7"
        style={{ backgroundColor: '#f5e6d3' }}
      />

      {/* Contact Section */}
      <SVGSection
        name="contact"
        id="section8"
        style={{ backgroundColor: '#d32f2f' }}
      />

      {/* Footer */}
      <SVGSection
        name="footer"
        id="section9"
        style={{ backgroundColor: '#f5e6d3' }}
      />
    </main>
  );
}
