import Link from "next/link";

export const OurGallery = () => {
  return (
    <div className="mywrapper w-full min-h-[1038px] py-[68px] bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-full self-stretch min-h-[902px] flex-col justify-start items-center gap-10 flex">
        <div className="flex-col justify-start items-center gap-5 flex">
          <div className="flex-col justify-start items-center gap-[15px] flex">
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="w-5 h-[0px] border-2 border-sky-950"></div>
              <div className="text-sky-950 text-xl font-medium leading-[34px]">
                Our Gallery
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
              <div className="text-center text-zinc-950 text-[32px] font-extrabold leading-[54px]">
                Take A View of Our Gallery
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center  items-center gap-[20px]">
          <img
            className="w-full max-w-[270.229px] max-h-[652px]"
            src="/homegal1.png"
            alt=""
          />
          <img
            className="w-full max-w-[270.229px] max-h-[652px]"
            src="/homegal2.png"
            alt=""
          />
          <img
            className="w-full max-w-[270.229px] max-h-[652px]"
            src="/homegal3.png"
            alt=""
          />
          <img
            className="w-full max-w-[270.229px] max-h-[652px]"
            src="/homegal4.png"
            alt=""
          />
        </div>

        <Link
          href={"/gallery"}
          className="w-[257px] h-[67px] px-5 py-6 bg-sky-950 rounded-[50px] justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-white text-lg font-semibold">Load More</div>
        </Link>
      </div>
    </div>
  );
};