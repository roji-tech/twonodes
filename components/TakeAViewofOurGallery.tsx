const TakeAViewofOurGallery = () => {
  const Images = [
    "/gal1.png",
    "/gal2.png",
    "/gal3.png",
    "/gal4.png",
    "/gal5.png",
    "/gal6.png",
    "/gal7.png",
    "/gal8.png",
  ];

  return (
    <div className="mywrapper min-h-[2072px] py-[71px] bg-white flex-col justify-start items-center gap-[47px] inline-flex">
      <div className="w-full flex-col justify-start items-center gap-5 flex">
        <div className="flex-col justify-start items-center gap-[15px] flex">
          <div className="justify-start items-center gap-[15px] inline-flex">
            <div className="w-5 h-[0px] border-2 border-[#001f3f]"></div>
            <div className="text-[#001f3f] text-xl font-medium font-['Bricolage Grotesque'] leading-[34px]">
              Our Gallery
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[18px] flex">
            <div className="text-center text-[#0c0e12] text-[32px] font-extrabold font-['Bricolage Grotesque'] leading-[54px]">
              Take A View of Our Gallery
            </div>
          </div>
        </div>
      </div>
      <div className="w-full self-stretch min-h-[1780px] gap-[30px] grid lg:grid-cols-2 grid-cols-1 justify-items-center">
        {Images.map((imgUrl, index) => (
          <div key={index} className="w-full p-3 flex justify-center">
            <img className="w-full max-w-[570px] max-h-[430px]" src={imgUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TakeAViewofOurGallery;