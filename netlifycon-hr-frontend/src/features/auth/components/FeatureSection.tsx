"use client";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="overflow-hidden pt-[70px] lg:pt-[90px] xl:pt-[110px] scroll-mt-[70px]"
    >
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* Section Title */}
        <div
          className="wow fadeInUp text-center"
          style={{ visibility: "visible" }}
        >
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img
              src="https://ai-tool-tailwind.preview.uideck.com/images//icon-title.svg"
              alt="icon"
            />
            <span className="hero-subtitle-text">Some of Main Features</span>
          </span>
          <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-5xl">
            Key Features of Our Tool
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium text-white/80">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>

        <div className="relative">
          {/* Connecting lines */}
          <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block" />
          <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block" />

          {/* Row 1 */}
          <div className="flex flex-wrap justify-center">
            {[
              {
                title: "Intelligent Writing Assistance",
                desc: "Our AI writing tool analyzes your content, suggests improvements.",
                icon: "icon-01.svg",
              },
              {
                title: "Grammar and Spell Check",
                desc: "Say goodbye to embarrassing typos and grammar mistakes",
                icon: "icon-02.svg",
              },
              {
                title: "Plagiarism Detection",
                desc: "Originality is key, and our AI writing tool helps you maintain it",
                icon: "icon-03.svg",
              },
            ].map((feature, i) => (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1" />
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                    <img
                      src={`https://ai-tool-tailwind.preview.uideck.com/images//${feature.icon}`}
                      alt="icon"
                    />
                  </span>
                  <h4 className="font-semibold text-lg text-white mb-4">
                    {feature.title}
                  </h4>
                  <p className="font-medium text-white/80">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="features-row-border w-full h-[1px]" />

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center">
            {[
              {
                title: "Voice to Text Conversion",
                desc: "Transform your spoken words into written text easily & effortlessly",
                icon: "icon-04.svg",
              },
              {
                title: "Style and Tone Adaptation",
                desc: "Whether you need a professional, or positive tone it has everyone",
                icon: "icon-05.svg",
              },
              {
                title: "Content Generation",
                desc: "Need inspiration or assistance with generating content?",
                icon: "icon-06.svg",
              },
            ].map((feature, i) => (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180" />
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                    <img
                      src={`https://ai-tool-tailwind.preview.uideck.com/images//${feature.icon}`}
                      alt="icon"
                    />
                  </span>
                  <h4 className="font-semibold text-lg text-white mb-4">
                    {feature.title}
                  </h4>
                  <p className="font-medium text-white/80">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
