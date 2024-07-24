import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";



export const Revolutionizing = () => {
  return (
    <section className="RevolutionizingBg mywrapper h-max py-16 bg-black">
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex"></div>
        <div className="flex flex-col h-full justify-center">
          <div className="pb-4 justify-start items-center gap-[15px] inline-flex">
            <div className="w-5 h-[0px] border-2 border-white"></div>
            <div className="text-white text-xl font-medium leading-[34px]">
              Our Services
            </div>
          </div>
          <div className="pb-6 items-center inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="justify-center items-center inline-flex">
                <div className="text-sky-500 text-[50px] font-extrabold leading-[54px]">
                  Revolutionizing
                </div>
              </div>
              <div className="self-stretch text-white text-[50px] font-extrabold leading-[54px]">
                Industry Based
                <br />
                Geospatial Solutions
              </div>
            </div>
          </div>
          <div className="pb-10 text-white text-lg font-normal leading-[30px]">
            Discover the art of seamless data management and visualization,
            tailored for your needs. Unleash the power of geospatial
            intelligence with ease.
          </div>

          <Link
            href="#"
            className="bg-white max-w-[470px] grid place-items-center w-full h-[60px] gap-[10px] rounded-[30px] text-[18px] font-semibold leading-[30px] text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export const SignUpforOurSurvey = ({ url = "/login" }) => {
  return (
    <div className="mywrapper w-full min-h-[374px] pt-[60px] pb-24 bg-white flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="self-stretch h-[254px] flex-col justify-start items-center gap-[45px] flex">
        <div className="w-full justify-between items-center inline-flex">
          <div className="w-full flex-col justify-start items-center gap-[18px] inline-flex">
            <div className="text-center text-sky-950 text-[50px] font-extrabold leading-[64px]">
              Sign Up for Our Survey Data Management
            </div>
            <div className="w-[90%] text-center text-sky-950 text-base font-normal leading-[30px]">
              Don't miss out on the latest in GIS technology and insights.
              Subscribe to our newsletter and be the first to know about new
              features, industry trends, and expert tips.
            </div>
          </div>
        </div>
        <Link
          target="_blank"
          href={url}
          className="max-w-[257px] w-full px-5 py-6 grid place-items-center bg-sky-950 rounded-[50px]"
        >
          <div className="text-white text-lg font-semibold">Subscribe</div>
        </Link>
      </div>
    </div>
  );
};

export const BelovedClientsSayings = () => {
  const testimonials = [
    {
      imgSrc: "/saying1.png",
      text: "I am truly impressed by TwoNode Technologies' innovative GIS solution. It is a game-changer in the industry, offering new ways to access and manage survey-based data anywhere in the world.",
      author: "Surv. Adebule Mariam - FOMSSURVEY",
    },
    {
      imgSrc: "saying2.png",
      text: "It's truly wonderful to come across a solution that efficiently and effectively addresses the challenges we face. The convenience of storing and retrieving our records in a well-organized system is truly unmatched.",
      author: "Karimah Dolapo - STENIK CONSULT",
    },
    {
      imgSrc: "saying3.png",
      text: "I have always seen GIS as a fantasy but here we are a company really using GIS to solve the problem of Survey Based Data Management.",
      author: "Aderayo - DOT POINTS",
    },
  ];

  return (
    <div className="mywrapper bg-black w-full py-16 min-h-[592px] flex-col justify-start items-center gap-[70px] inline-flex">
      <div className="text-center text-white text-[50px] font-extrabold leading-[54px]">
        What Our Beloved Clients Are Saying
      </div>

      <div className="flex w-full justify-center overflow-hidden items-start gap-[30px]">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-7">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="p-3 basis-full md:basis-1/2 2xl:basis-1/3"
              >
                <div className="w-full flex justify-center">
                  <div className="px-5 py-10 bg-white rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-center gap-5 flex">
                      <img
                        className="w-[72px] h-[72px] rounded-full border border-sky-950"
                        src={testimonial.imgSrc}
                        alt={`Testimonial from ${testimonial.author}`}
                      />
                      <div className="flex-col justify-center items-center gap-2.5 flex">
                        <div className="justify-start items-center gap-1 inline-flex" />
                        <div className="w-[330px] text-center text-neutral-600 text-base font-normal leading-7">
                          {testimonial.text}
                        </div>
                      </div>
                      <div className="text-center text-sky-950 text-base font-medium leading-7">
                        {testimonial.author}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export const FeaturedNews = () => {
  return (
    <div className="mywrapper w-full min-h-[623px] px-[135px] py-[70px] bg-gray-50 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="self-stretch min-h-[483px] flex-col justify-start items-start gap-[50px] flex">
        <div className="self-stretch text-neutral-900 text-5xl font-semibold capitalize">
          Featured News
        </div>
        <div className="grid justify-items-center lg:grid-cols-2 gap-10">
          <img
            className="max-w-[565px] w-full max-h-[375px] rounded-[10px]"
            src="FeaturedNews.png"
          />
          <div className="self-stretch flex-col justify-start items-start gap-[45px] inline-flex">
            <div className="self-stretch h-[260px] flex-col justify-start items-start gap-[30px] flex">
              <div className="self-stretch text-neutral-900 text-xl font-medium leading-[35px]">
                Same Subscription with more Capabilities with ArcGIS Pro and
                ArcOnline Licenses
              </div>
              <div className="self-stretch text-neutral-900 text-base font-normal leading-[30px]">
                TwoNode Technologies is thrilled to announce a long-term
                partnership with sambus geospatial, the official distributor for
                ESRI products.
                <br />
                This partnership is to provide ultra-specific capabilities
                beyond your imagination.
              </div>
            </div>
            <Link
              href={"/featurednews"}
              className="px-5 py-2.5 bg-sky-950 rounded-[5px] justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-white text-lg font-normal leading-7">
                Read More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

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
          <div className="flex justify-center md:justify-start items-center gap-2.5">
            <img
              className="w-[270.23px] h-[652px] rounded-2xl"
              src="gal1.png"
            />
          </div>
          <div className="w-full md:w-[270.54px] flex flex-col justify-start items-start gap-[30px]">
            <div className="w-full flex justify-center md:justify-start items-center gap-2.5">
              <img
                className="max-w-[270.23px] max-h-[382px] rounded-2xl"
                src="gal2.png"
              />
            </div>
            <div className="w-full min-h-60 flex flex-col justify-start items-start gap-2.5">
              <img
                className="max-w-[auto] max-h-60 rounded-2xl"
                src="gal3.png"
              />
            </div>
          </div>
          <div className="w-full md:min-w-[270.54px] flex flex-col justify-start items-start gap-[30px]">
            <div className="w-full h-60 flex flex-col justify-start items-start gap-2.5">
              <img
                className="max-w-[270.23px] h-60 rounded-2xl"
                src="gal4.png"
              />
            </div>
            <div className="w-full flex justify-center md:justify-start items-center gap-2.5">
              <img
                className="max-w-[270.23px] max-h-[382px] rounded-2xl"
                src="gal5.png"
              />
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-2.5">
            <img
              className="max-w-[270.23px] min-h-[652px] rounded-2xl"
              src="gal6.png"
            />
          </div>
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
