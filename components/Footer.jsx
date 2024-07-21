const Footer = () => {
  const Logo = (
    <svg
      width="59"
      height="74"
      viewBox="0 0 59 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M46.0488 0H59V13.0588H46.0488V0Z" fill="#001F3F" />
      <path d="M0 60.9412H12.9512V74H0V60.9412Z" fill="#001F3F" />
      <path
        d="M12.9512 53.6863L46.0488 20.3137L44.0137 18.2617L10.9161 51.6343L12.9512 53.6863Z"
        fill="#001F3F"
      />
    </svg>
  );

  return (
    <div className="mywrapper w-full min-h-[505px] py-[90px] bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-start gap-[35px] flex">
        <div className="flex-col justify-start items-start gap-[33px] flex">
          <div className="justify-start items-start gap-[205px] inline-flex">
            <div className="flex-col justify-start items-start gap-[25px] inline-flex">
              <div className="justify-start items-center gap-1.5 inline-flex">
                <div>
                  <span className="text-sky-950 text-[32px] font-bold font-['Bricolage Grotesque']">
                    TwoNode
                    <br />
                  </span>
                  <span className="text-sky-950 text-[22px] font-bold font-['Bricolage Grotesque'] leading-[17px]">
                    {Logo}
                  </span>
                  <span className="text-sky-950 text-2xl font-bold font-['Bricolage Grotesque']">
                    Technologies
                  </span>
                </div>
              </div>
              <div className="w-[378px] text-black text-base font-medium font-['Bricolage Grotesque'] leading-normal">
                Location: 58 ,Kudirat Abiola Way Oregun, Ikeja, Lagos.
              </div>
              <div className="justify-start items-start gap-3 inline-flex">
                <div className="w-9 h-9 relative">
                  <div className="w-9 h-9 left-0 top-0 absolute bg-sky-950 rounded-[18px]" />
                </div>
                <div className="w-9 h-9 relative">
                  <div className="w-9 h-9 left-0 top-0 absolute rounded-[18px] border border-sky-950" />
                </div>
                <div className="w-9 h-9 relative">
                  <div className="w-9 h-9 left-0 top-0 absolute rounded-[18px] border border-sky-950" />
                  <div className="w-2.5 h-2.5 left-[13px] top-[13px] absolute"></div>
                </div>
                <div className="w-9 h-9 relative">
                  <div className="w-9 h-9 left-0 top-0 absolute rounded-[18px] border border-sky-950" />
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-[150px] flex">
              <div className="flex-col justify-center items-start gap-6 inline-flex">
                <div className="text-stone-950 text-xl font-semibold font-['Bricolage Grotesque']">
                  Company
                </div>
                <div className="flex-col justify-start items-start gap-5 flex">
                  <div className="text-stone-950 text-base font-normal font-['Bricolage Grotesque'] leading-normal">
                    Home
                  </div>
                  <div className="text-stone-950 text-base font-normal font-['Bricolage Grotesque'] leading-normal">
                    About Us
                  </div>
                  <div className="text-stone-950 text-base font-normal font-['Bricolage Grotesque'] leading-normal">
                    Our Services
                  </div>
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-6 inline-flex">
                <div className="text-stone-950 text-xl font-semibold font-['Bricolage Grotesque']">
                  Links
                </div>
                <div className="flex-col justify-start items-start gap-5 flex">
                  <div className="text-stone-950 text-base font-normal font-['Bricolage Grotesque'] leading-normal">
                    Contact Us
                  </div>
                  <div className="text-stone-950 text-base font-normal font-['Bricolage Grotesque'] leading-normal">
                    Gallery
                  </div>
                  <div className="text-stone-950 text-base font-normal font-['Bricolage Grotesque'] leading-normal">
                    News
                  </div>
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-6 inline-flex">
                <div className="text-stone-950 text-xl font-semibold font-['Bricolage Grotesque']">
                  Resource
                </div>
                <div className="flex-col justify-start items-start gap-5 flex">
                  <div className="text-stone-950 text-base font-normal font-['Bricolage Grotesque'] leading-normal">
                    Login
                  </div>
                  <div className="text-stone-950 text-base font-normal font-['Bricolage Grotesque'] leading-normal">
                    Sign Up
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1165px] h-[0px] border border-violet-100"></div>
        </div>
        <div className="justify-start items-center gap-[188px] inline-flex">
          <div className="justify-start items-start gap-14 flex">
            <div className="justify-center items-center gap-3 flex">
              <div className="w-10 h-10 bg-sky-950 rounded-[25px] flex-col justify-center items-center inline-flex">
                <div className="w-5 h-5 relative" />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-stone-950 text-sm font-normal font-['Bricolage Grotesque'] leading-normal">
                  Have a question?
                </div>
                <div className="text-stone-950 text-sm font-semibold font-['Bricolage Grotesque'] leading-7">
                  +234-706-9227-677
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-3 flex">
              <div className="w-10 h-10 bg-sky-950 rounded-[25px] flex-col justify-center items-center inline-flex">
                <div className="w-5 h-5 relative">
                  <img
                    className="w-[16.67px] h-[15px] left-[1.67px] top-[2.19px] absolute"
                    src="https://via.placeholder.com/17x15"
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-stone-950 text-sm font-normal font-['Bricolage Grotesque'] leading-normal">
                  Email us at:
                </div>
                <div className="text-stone-950 text-sm font-semibold font-['Bricolage Grotesque'] leading-7">
                  info@twonodetechnologies.com
                </div>
              </div>
            </div>
          </div>
          <div className="text-right text-stone-950 text-base font-normal font-['Bricolage Grotesque'] leading-normal">
            Copyright © 2024 TwoNode Technologies | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
