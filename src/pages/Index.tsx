
import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Battery, 
  Zap, 
  Camera, 
  Wifi, 
  Video,
  Smartphone
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import PhoneModel from '@/components/PhoneModel';
import FeatureCard from '@/components/FeatureCard';
import ColorPicker from '@/components/ColorPicker';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollReveal from '@/components/ScrollReveal';
import SpecsTable from '@/components/SpecsTable';
import CameraSection from '@/components/CameraSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Define color options
const colorOptions = [
  { name: 'titanium', color: 'Titanium', bgClass: 'bg-apple-titanium' },
  { name: 'natural', color: 'Natural Titanium', bgClass: 'bg-apple-natural' },
  { name: 'gold', color: 'Gold Titanium', bgClass: 'bg-apple-gold' },
  { name: 'blue', color: 'Blue Titanium', bgClass: 'bg-blue-800' },
];

// Define specs for the specs section
const phoneSpecs = [
  {
    title: "Display",
    items: [
      { name: "Type", value: "Super Retina XDR display" },
      { name: "Size", value: "6.7 inches (diagonal)" },
      { name: "Resolution", value: "2796 x 1290 pixels at 460 ppi" },
      { name: "Technology", value: "OLED with ProMotion" },
      { name: "Brightness", value: "Up to 2000 nits peak brightness (outdoor)" },
    ]
  },
  {
    title: "Performance",
    items: [
      { name: "Chip", value: "A19 Pro chip with 6-core CPU and 5-core GPU" },
      { name: "Neural Engine", value: "16-core Neural Engine" },
      { name: "Storage", value: "256GB, 512GB, 1TB, or 2TB" },
      { name: "RAM", value: "8GB unified memory" },
    ]
  },
  {
    title: "Camera",
    items: [
      { name: "Pro Camera System", value: "48MP Main, 12MP Ultra Wide, 12MP Telephoto" },
      { name: "Zoom", value: "5x optical zoom in, 2x optical zoom out" },
      { name: "Video", value: "4K video recording at 24 fps, 30 fps, or 60 fps" },
      { name: "Front Camera", value: "12MP TrueDepth camera with autofocus" },
    ]
  }
];

const Index = () => {
  const [selectedColor, setSelectedColor] = useState('titanium');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading for a better experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-apple-black">
        <div className="flex flex-col items-center">
          <Apple className="h-12 w-12 text-apple-white animate-pulse" />
          <p className="mt-4 text-apple-gray animate-fade-in">Loading iPhone 16 Pro...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-apple-black text-apple-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="apple-section pt-24 h-screen flex items-center justify-center">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center">
            <ScrollReveal>
              <h1 className="apple-heading text-center">
                iPhone 16 Pro
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="apple-subheading text-center mt-4 mb-8">
                The ultimate iPhone experience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="flex space-x-6 mb-10">
                <Button className="apple-btn">Learn more</Button>
                <Button className="bg-apple-white text-apple-black hover:bg-apple-white/90 px-4 py-2 rounded-full">
                  Buy
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={600} className="animate-float">
              <PhoneModel color={selectedColor} />
            </ScrollReveal>
            <ScrollReveal delay={800} className="mt-12">
              <ColorPicker 
                options={colorOptions} 
                selected={selectedColor} 
                onChange={setSelectedColor} 
              />
            </ScrollReveal>
          </div>
        </div>
        {/* Background gradient effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-apple-blue/20 rounded-full blur-[100px]"></div>
        </div>
      </section>
      
      {/* Features Section */}
      <ParallaxSection id="features" className="apple-section">
        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="apple-heading text-center mb-6">
              Unbelievable Power
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="apple-subheading text-center mb-16 max-w-2xl mx-auto">
              Engineered with cutting-edge technology to deliver exceptional performance in every dimension.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="A19 Pro Chip" 
              description="The most powerful chip ever in a smartphone, with breakthrough machine learning capabilities."
              icon={<Cpu size={32} />} 
              className="lg:col-span-1"
            />
            <FeatureCard 
              title="All-day Battery" 
              description="Up to 29 hours of video playback with the most efficient power management system."
              icon={<Battery size={32} />} 
              className="lg:col-span-1"
            />
            <FeatureCard 
              title="Faster Charging" 
              description="Get up to 50% charge in just 30 minutes with the 30W adapter."
              icon={<Zap size={32} />} 
              className="lg:col-span-1"
            />
            <FeatureCard 
              title="Pro Camera System" 
              description="A groundbreaking 48MP main camera with advanced computational photography."
              icon={<Camera size={32} />} 
              className="lg:col-span-3/2"
            />
            <FeatureCard 
              title="Wi-Fi 7" 
              description="Connect to networks with blazingly fast speeds and minimal latency."
              icon={<Wifi size={32} />} 
              className="lg:col-span-3/2"
            />
          </div>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-apple-blue/10 rounded-full blur-[120px]"></div>
        </div>
      </ParallaxSection>
      
      {/* Camera Section */}
      <CameraSection />
      
      {/* Video Experience */}
      <ParallaxSection className="apple-section">
        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="apple-heading text-center mb-6">
              Cinematic Experience
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="apple-subheading text-center mb-16 max-w-2xl mx-auto">
              Capture stunning 4K HDR video with Dolby Vision and Spatial Audio recording.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="relative rounded-3xl overflow-hidden h-[500px] max-w-4xl mx-auto">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 rounded-full bg-apple-black/70 flex items-center justify-center">
                  <Video size={32} className="text-apple-white" />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-apple-black/80 via-transparent to-apple-black/80"></div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-apple-blue/30 to-purple-600/30"></div>
              
              {/* Mock video thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/40"></div>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={400}>
              <div className="border border-apple-gray/20 rounded-2xl p-8">
                <Video size={32} className="text-apple-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">4K Dolby Vision</h3>
                <p className="text-apple-gray">
                  Record video in 4K HDR with Dolby Vision up to 60 fps for a cinematic look.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="border border-apple-gray/20 rounded-2xl p-8">
                <Smartphone size={32} className="text-apple-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Spatial Video</h3>
                <p className="text-apple-gray">
                  Capture spatial videos that you can relive in three dimensions on Apple Vision Pro.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Specs Section */}
      <section id="specs" className="apple-section py-16 bg-apple-darkgray">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="apple-heading text-center mb-6">
              Tech Specs
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="apple-subheading text-center mb-16 max-w-2xl mx-auto">
              Everything you need to know about iPhone 16 Pro.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <SpecsTable specs={phoneSpecs} />
          </ScrollReveal>
        </div>
      </section>
      
      {/* Buy Section */}
      <section id="buy" className="apple-section">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="apple-heading mb-6">
              iPhone 16 Pro
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="apple-subheading mb-6">
              From $999 or $41.62/mo. for 24 mo.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Button className="apple-btn text-lg px-8 py-3 mt-6">
              Buy Now
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={400} className="mt-12 animate-float">
            <PhoneModel color={selectedColor} />
          </ScrollReveal>
          <ScrollReveal delay={500} className="mt-12">
            <ColorPicker 
              options={colorOptions} 
              selected={selectedColor} 
              onChange={setSelectedColor} 
            />
          </ScrollReveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
