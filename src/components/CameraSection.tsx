
import React from 'react';
import ScrollReveal from './ScrollReveal';

const CameraSection: React.FC = () => {
  return (
    <section className="apple-section bg-gradient-to-b from-apple-black to-apple-darkgray">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="apple-heading text-center mb-6">Camera System</h2>
          <p className="apple-subheading text-center mb-12 max-w-2xl mx-auto">
            A groundbreaking camera system with next-generation optics.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={200}>
            <div className="rounded-2xl bg-apple-black p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-apple-blue flex items-center justify-center">
                <span className="text-2xl font-bold">48</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">48MP Main Camera</h3>
              <p className="text-apple-gray">
                ProRAW captures incredible detail for unlimited editing possibilities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="rounded-2xl bg-apple-black p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center">
                <span className="text-2xl font-bold">5x</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optical Zoom</h3>
              <p className="text-apple-gray">
                Get closer to your subject with exceptional quality and detail.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="rounded-2xl bg-apple-black p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-600 to-red-500 flex items-center justify-center">
                <span className="text-2xl font-bold">AI</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Processing</h3>
              <p className="text-apple-gray">
                Computational photography enhances every shot automatically.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300} className="mt-16">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-apple-black z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-apple-blue/20 blur-3xl animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-[280px] h-[280px] rounded-full border border-apple-blue/30 flex items-center justify-center">
                <div className="w-[220px] h-[220px] rounded-full border border-apple-blue/50 flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full bg-apple-blue/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-apple-black flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-apple-blue to-purple-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CameraSection;
