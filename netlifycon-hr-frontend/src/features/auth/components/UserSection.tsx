const UserSection = () => {
  return (
    <section
      x-data="{ 'showContent': false, 'scrollContent': false, }"
      className="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45 pb-20"
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* section title */}
        <div
          className="wow fadeInUp mb-15 text-center"
          style={{ visibility: "visible" }}
        >
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img
              src="https://ai-tool-tailwind.preview.uideck.com/images//icon-title.svg"
              alt="icon"
            />
            <span className="hero-subtitle-text"> Wall of love </span>
          </span>
          <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            What Our User Says
          </h2>
          <p className="max-w-[714px] mx-auto font-medium">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 max-h-[855px] overflow-hidden">
          {/* user column */}
          <div className="space-y-7.5">
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-01.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Machel Pildium
                  </h5>
                  <p className="font-medium text-sm">@machel</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-02.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Wilson Bator
                  </h5>
                  <p className="font-medium text-sm">@wilson</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-03.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Roger George
                  </h5>
                  <p className="font-medium text-sm">@roger</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-04.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Adison Dias
                  </h5>
                  <p className="font-medium text-sm">@adison</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-05.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Abram Lipshutz
                  </h5>
                  <p className="font-medium text-sm">@abram</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-06.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Jaylon Press
                  </h5>
                  <p className="font-medium text-sm">@jaylon</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-07.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Zain Franci
                  </h5>
                  <p className="font-medium text-sm">@zain</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-08.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Cristofer Carder
                  </h5>
                  <p className="font-medium text-sm">@cristofer</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-09.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Dulce Rosser
                  </h5>
                  <p className="font-medium text-sm">@dulce</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* user column */}
          <div className="space-y-7.5 hidden sm:block">
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-04.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Adison Dias
                  </h5>
                  <p className="font-medium text-sm">@adison</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-05.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Abram Lipshutz
                  </h5>
                  <p className="font-medium text-sm">@abram</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-06.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Jaylon Press
                  </h5>
                  <p className="font-medium text-sm">@jaylon</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-07.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Zain Franci
                  </h5>
                  <p className="font-medium text-sm">@zain</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-08.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Cristofer Carder
                  </h5>
                  <p className="font-medium text-sm">@cristofer</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-09.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Dulce Rosser
                  </h5>
                  <p className="font-medium text-sm">@dulce</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-01.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Machel Pildium
                  </h5>
                  <p className="font-medium text-sm">@machel</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-02.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Wilson Bator
                  </h5>
                  <p className="font-medium text-sm">@wilson</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-03.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Roger George
                  </h5>
                  <p className="font-medium text-sm">@roger</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* user column */}
          <div className="space-y-7.5 hidden lg:block">
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-07.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Zain Franci
                  </h5>
                  <p className="font-medium text-sm">@zain</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-08.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Cristofer Carder
                  </h5>
                  <p className="font-medium text-sm">@cristofer</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-09.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Dulce Rosser
                  </h5>
                  <p className="font-medium text-sm">@dulce</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-01.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Machel Pildium
                  </h5>
                  <p className="font-medium text-sm">@machel</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-02.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Wilson Bator
                  </h5>
                  <p className="font-medium text-sm">@wilson</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-03.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Roger George
                  </h5>
                  <p className="font-medium text-sm">@roger</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-04.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Adison Dias
                  </h5>
                  <p className="font-medium text-sm">@adison</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p className="mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-05.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Abram Lipshutz
                  </h5>
                  <p className="font-medium text-sm">@abram</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
            {/* user item */}
            <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
              <div className="flex items-center gap-4.5">
                <div className="max-w-[48px] w-full h-12 rounded-full">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//user-06.png"
                    alt="user"
                  />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Jaylon Press
                  </h5>
                  <p className="font-medium text-sm">@jaylon</p>
                </div>
              </div>
              <div className="user-divider relative my-6 w-full h-[1px]" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              {/* bg shapes */}
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute right-0 bottom-0 -z-1">
                  <img
                    src="https://ai-tool-tailwind.preview.uideck.com/images//blur-18.svg"
                    alt="blur"
                    className="max-w-none"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div :class="[ showContent ? 'sticky -u-mt-52 transition-opacity duration-300 opacity-0' : '', scrollContent ? '!opacity-100' : '' ]" className="inset-x-0 bottom-20 flex justify-center bg-gradient-to-t from-dark pt-32 pb-8 pointer-events-none absolute !opacity-100">
      <button :class="[ showContent ? 'transition-transform translate-y-4' : '', scrollContent ? 'translate-y-0' : '' ]" @click="showContent = !showContent" type="button" className="button-border-gradient hover:button-gradient-hover relative top-20 text-sm text-white font-semibold px-4.5 py-3 rounded-lg pointer-events-auto flex mx-auto -mt-7.5 ease-in duration-300 translate-y-0">
        <span x-text="showContent ? 'Okay, I get the point' : 'Show more...'">Show more...</span>
      </button>
    </div> */}
      </div>
    </section>
  );
};

export default UserSection;
