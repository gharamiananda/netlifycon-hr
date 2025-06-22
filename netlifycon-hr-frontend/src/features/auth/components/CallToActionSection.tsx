const CallToActionSection = () => {
  return (
    <section>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="cta-box-gradient bg-dark rounded-[30px] relative overflow-hidden px-4 py-20 lg:py-25 z-[999]">
          {/* Background shapes */}
          <span className="absolute bottom-0 left-0 -z-[1]">
            <img
              src="https://ai-tool-tailwind.preview.uideck.com/images//grid.svg"
              alt="grid"
            />
          </span>
          <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-[1]">
              <img
                src="https://ai-tool-tailwind.preview.uideck.com/images//blur-22.svg"
                alt="blur"
                className="max-w-none"
              />
            </span>
            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-[1]">
              <img
                src="https://ai-tool-tailwind.preview.uideck.com/images//blur-23.svg"
                alt="blur"
                className="max-w-none"
              />
            </span>
            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-[1]">
              <img
                src="https://ai-tool-tailwind.preview.uideck.com/images//blur-24.svg"
                alt="blur"
                className="max-w-none"
              />
            </span>
          </div>

          {/* Star background */}
          <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-[1] -bottom-25 left-1/2 -translate-x-1/2">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>

          {/* Content */}
          <div className="wow fadeInUp text-center">
            <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
              <img
                src="https://ai-tool-tailwind.preview.uideck.com/images//icon-title.svg"
                alt="icon"
              />
              <span className="hero-subtitle-text">Try our tool for Free</span>
            </span>

            <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
              What are you waiting for?
            </h2>

            <p className="max-w-[714px] mx-auto font-medium mb-9">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>

            <a
              href="#"
              className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Get Started for Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
