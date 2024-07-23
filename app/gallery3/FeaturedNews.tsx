const FeaturedNews = () => {
  return (
    <div className="mywrapper min-h-[2004.43px] py-[71px] bg-white flex-col justify-start items-center gap-[47px] inline-flex">
      <div className="flex-col justify-start items-center gap-5 flex">
        <div className="flex-col justify-start items-center gap-[15px] flex">
          <div className="justify-start items-center gap-[15px] inline-flex">
            <div className="w-5 h-[0px] border-2 border-[#001f3f]"></div>
            <div className="text-[#001f3f] text-xl font-medium leading-[34px]">
              Our News
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[18px] flex">
            <div className="text-center text-[#0c0e12] text-[32px] font-extrabold leading-[54px]">
              Featured News
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[1712.43px] flex-col justify-start items-start gap-10 flex">
        <div className="self-stretch min-h-[536px] flex-col justify-start items-start gap-[35px] flex">
          <div className="self-stretch h-[186px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-[#0c0e12] text-lg font-medium">
              Wednesday, July 17, 2024 · 2 Min Read
            </div>
            <div className="self-stretch text-[#0c0e12] text-[50px] font-semibold leading-[70px]">
              Same Subscription with more capabilities with ArcGIS Pro and
              ArcOnline licenses.
            </div>
          </div>
          <div className="self-stretch">
            <span className="text-[#0c0e12] text-xl font-normal leading-[30px]">
              TwoNode Technologies is thrilled to announce a long-term
              partnership with sambus geospatial, the official distributor for
              ESRI products. <br />
              This partnership is to provide ultra-specific capabilities beyond
              your imagination.
              <br />
              What you stand to benefit:
              <br />
            </span>
            <span className="text-[#0c0e12] text-xl font-normal leading-[30px]">
              ArcGIS Pro Advanced, extensions, and dozens of ready-to-use apps
              <br />
              ArcGIS Living Atlas of the World with maps and data on thousands
              of topics, including access to foundational content from Esri{" "}
              <br />
              Software updates
              <br />
              Unlimited access to self-paced e-learning through the Esri
              Training website
            </span>
          </div>
        </div>
        <img
          className="self-stretch h-[501.43px]"
          src="https://via.placeholder.com/1168x501"
        />
        <div className="w-full justify-between items-center inline-flex">
          <div className="min-w-[570px] h-[430px] relative">
            <img
              className="max-w-[570px] h-[430px] left-0 top-0 absolute"
              src="https://via.placeholder.com/570x430"
            />
          </div>
          <div className="min-w-[570px] h-[430px] relative">
            <img
              className="max-w-[570px] h-[430px] left-0 top-0 absolute"
              src="https://via.placeholder.com/570x430"
            />
          </div>
        </div>
        <div className="w-full justify-start items-start gap-[673px] inline-flex">
          <div className="w-full h-[0px] opacity-50 border border-[#4e5055]"></div>
          <div className="justify-start items-center gap-[25px] flex">
            <img
              className="max-w-[61px] h-[61px] rounded-full"
              src="https://via.placeholder.com/61x61"
            />
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="self-stretch text-[#4e5055] text-base font-normal">
                Author
              </div>
              <div className="text-[#0c0e12] text-xl font-semibold">
                TwoNode Technologies
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-3 flex">
            <div className="w-9 h-9 relative">
              <div className="w-9 h-9 left-0 top-0 absolute bg-[#001f3f] rounded-[18px]" />
            </div>
            <div className="w-9 h-9 relative">
              <div className="w-9 h-9 left-0 top-0 absolute rounded-[18px] border border-[#001f3f]" />
            </div>
            <div className="w-9 h-9 relative">
              <div className="w-9 h-9 left-0 top-0 absolute rounded-[18px] border border-[#001f3f]" />
              <div className="w-2.5 h-2.5 left-[13px] top-[13px] absolute"></div>
            </div>
            <div className="w-9 h-9 relative">
              <div className="w-9 h-9 left-0 top-0 absolute rounded-[18px] border border-[#001f3f]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
