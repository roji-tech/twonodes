export const ContactUs = () => {
  return (
    <div className="mywrapper w-full min-h-[262px] py-[60px] bg-white flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="self-stretch h-[142px] flex-col justify-center items-center gap-[45px] flex">
        <div className="w-full justify-between items-center inline-flex">
          <div className="w-full flex-col justify-start items-center gap-[18px] inline-flex">
            <div className="max-w-[706px] text-center text-zinc-950 text-[50px] font-extrabold font-['Bricolage Grotesque'] leading-[64px]">
              Contact Us
            </div>
            <div className="max-w-[982px] text-center text-neutral-600 text-base font-normal font-['Bricolage Grotesque'] leading-[30px]">
              Discover how our innovative GIS solution revolutionizes the
              representation of extent and survey information. Experience
              seamless management and retrieval of Survey Plans like never
              before!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OurMap = () => {
  return (
    <section className="mywrapper w-full">
      <div className="w-full min-h-[797px] py-24 bg-white grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center lg:justify-items-stretch">
        <div className="flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="flex-col justify-start items-start gap-[15px] flex">
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="w-5 h-[0px] border-2 border-sky-950"></div>
              <div className="text-sky-950 text-xl font-medium font-['Bricolage Grotesque'] leading-[34px]">
                Our Location
              </div>
            </div>
            <div className="max-w-[442px] text-zinc-950 text-[28px] font-semibold font-['Bricolage Grotesque'] leading-[45px]">
              Location: 58,Kudirat Abiola Way Oregun, Ikeja, Lagos.
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-zinc-950 text-xl font-medium font-['Bricolage Grotesque'] leading-[34px]">
              Reach Out On:
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-center gap-3.5 inline-flex">
                <div className="w-12 h-12 bg-sky-950/opacity-10 rounded-[30px] flex-col justify-center items-center inline-flex">
                  <div className="w-6 h-6 relative" />
                </div>
                <div className="text-neutral-600 text-xl font-medium font-['Bricolage Grotesque'] leading-7">
                  +234-706-9227-677
                </div>
              </div>
              <div className="justify-start items-center gap-3.5 inline-flex">
                <div className="w-12 h-12 bg-sky-950/opacity-10 rounded-[30px] flex-col justify-center items-center inline-flex">
                  <div className="w-6 h-6 relative">
                    <img
                      className="w-5 h-[18px] left-[2px] top-[3px] absolute"
                      src="https://via.placeholder.com/20x18"
                    />
                  </div>
                </div>
                <div className="text-neutral-600 text-xl font-medium font-['Bricolage Grotesque'] leading-7">
                  info@twonodetechnologies.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-full max-w-[657px] max-h-[605px] rounded-[10px]"
          src="https://via.placeholder.com/657x605"
        />
      </div>
    </section>
  );
};
