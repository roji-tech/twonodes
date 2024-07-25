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
            <div className="text-center text-[#0c0e12] text-[28px] lg:text-[32px] font-extrabold leading-[54px]">
              Featured News
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-10 flex">
        <div className="self-stretch flex-col justify-start items-start gap-[10px] flex">
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-[#0c0e12] text-lg font-medium">
              Wednesday, July 17, 2024 · 2 Min Read
            </div>
            <div className="self-stretch text-[#0c0e12] text-4xl font-semibold leading-[70px]">
              Same Subscription with more capabilities with ArcGIS Pro and
              ArcOnline licenses.
            </div>
          </div>
          <div className="self-stretch">
            <span className="text-[#0c0e12] text-xl font-normal leading-[30px]">
              TwoNode Technologies is thrilled to announce a long-term
              partnership with sambus geospatial, the official distributor for
              ESRI products. <br />
              This partnership is to provide ultra-specific capabilities{" "}
              <b className="text-2xl italic inline-block">beyond your imagination.</b>
              <br />
              What you stand to benefit:
              <br />
            </span>
            <ul className="text-[#0c0e12] text-xl font-normal leading-[30px] list-inside list-disc p-3">
              <li>
                ArcGIS Pro Advanced, extensions, and dozens of ready-to-use apps
              </li>
              <li>
                ArcGIS Living Atlas of the World with maps and data on thousands
                of topics, including access to foundational content from Esri{" "}
              </li>
              <li>Software updates</li>
              <li>
                Unlimited access to self-paced e-learning through the Esri
                Training website
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full gap-8 flex flex-col items-center justify-center">
          <img className="self-center max-h-[501.43px]" src="/fea1.png" />
          <div className="max-w-full w-full justify-evenly gap-7 items-center flex flex-wrap">
            <img className="max-w-[570px] max-h-[430px]" src="/fea2.png" />

            <img className="max-w-[570px] max-h-[430px]" src="/fea3.png" />
          </div>
        </div>
        <div className="w-full h-[0px] opacity-50 border border-[#4e5055]"></div>
        <div className="w-full justify-between items-center flex">
          <div className="justify-start items-center gap-[25px] flex">
            <img
              className="w-[61px] h-[61px] rounded-full"
              src="feaAvatar.png"
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

          <div className="justify-end items-center gap-3 flex">
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.428711"
                width="36"
                height="36"
                rx="18"
                fill="#001F3F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7145 16.9132H18.5715V17.8382C18.839 17.3062 19.525 16.8282 20.5555 16.8282C22.531 16.8282 23 17.8872 23 19.8302V23.4287H21V20.2727C21 19.1662 20.7325 18.5422 20.0515 18.5422C19.107 18.5422 18.7145 19.2147 18.7145 20.2722V23.4287H16.7145V16.9132ZM13.285 23.3437H15.285V16.8282H13.285V23.3437ZM15.5715 14.7037C15.5716 14.8713 15.5383 15.0373 15.4737 15.192C15.4091 15.3467 15.3143 15.487 15.195 15.6047C14.9532 15.845 14.6259 15.9795 14.285 15.9787C13.9447 15.9785 13.6182 15.8443 13.376 15.6052C13.2571 15.4871 13.1627 15.3466 13.0982 15.1919C13.0337 15.0372 13.0003 14.8713 13 14.7037C13 14.3652 13.135 14.0412 13.3765 13.8022C13.6184 13.5628 13.9451 13.4286 14.2855 13.4287C14.6265 13.4287 14.9535 13.5632 15.195 13.8022C15.436 14.0412 15.5715 14.3652 15.5715 14.7037Z"
                fill="white"
              />
            </svg>

            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.928711"
                width="35"
                height="35"
                rx="17.5"
                stroke="#001F3F"
              />
              <path
                d="M20.6068 19.0534L20.9181 17.2437H18.9726V16.0693C18.9726 15.5743 19.2443 15.0915 20.1156 15.0915H21V13.5509C21 13.5509 20.1976 13.4287 19.4302 13.4287C17.8281 13.4287 16.781 14.2956 16.781 15.8646V17.244H15V19.0537H16.781V23.4287H18.9726V19.0537L20.6068 19.0534Z"
                fill="#001F3F"
              />
            </svg>
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.928711"
                width="35"
                height="35"
                rx="17.5"
                stroke="#001F3F"
              />
              <path
                d="M18.0001 13.4287C16.6421 13.4287 16.4719 13.4345 15.9385 13.4588C15.4063 13.4831 15.0429 13.5676 14.7248 13.6912C14.396 13.819 14.1172 13.99 13.8392 14.2679C13.5612 14.5459 13.3903 14.8248 13.2625 15.1536C13.1389 15.4716 13.0544 15.8351 13.0301 16.3673C13.0057 16.9006 13 17.0709 13 18.4288C13 19.7867 13.0057 19.957 13.0301 20.4903C13.0544 21.0225 13.1389 21.386 13.2625 21.704C13.3903 22.0328 13.5613 22.3117 13.8392 22.5897C14.1172 22.8676 14.396 23.0386 14.7248 23.1664C15.0429 23.29 15.4063 23.3745 15.9385 23.3988C16.4719 23.4231 16.6421 23.4289 18.0001 23.4289C19.358 23.4289 19.5283 23.4231 20.0616 23.3988C20.5938 23.3745 20.9573 23.29 21.2753 23.1664C21.6041 23.0386 21.883 22.8676 22.161 22.5897C22.4389 22.3117 22.6099 22.0328 22.7377 21.704C22.8613 21.386 22.9458 21.0225 22.9701 20.4903C22.9944 19.957 23.0002 19.7867 23.0002 18.4288C23.0002 17.0709 22.9944 16.9006 22.9701 16.3673C22.9458 15.8351 22.8613 15.4716 22.7377 15.1536C22.6099 14.8248 22.4389 14.5459 22.161 14.2679C21.883 13.99 21.6041 13.819 21.2753 13.6912C20.9573 13.5676 20.5938 13.4831 20.0616 13.4588C19.5283 13.4345 19.358 13.4287 18.0001 13.4287ZM18.0001 14.3296C19.3352 14.3296 19.4933 14.3347 20.0205 14.3588C20.5081 14.381 20.7728 14.4625 20.949 14.5309C21.1824 14.6217 21.3489 14.73 21.5239 14.905C21.6989 15.0799 21.8072 15.2465 21.8979 15.4799C21.9664 15.6561 22.0479 15.9208 22.0701 16.4083C22.0941 16.9356 22.0993 17.0937 22.0993 18.4288C22.0993 19.7639 22.0941 19.922 22.0701 20.4493C22.0479 20.9368 21.9664 21.2015 21.8979 21.3777C21.8072 21.6111 21.6989 21.7777 21.5239 21.9526C21.3489 22.1276 21.1824 22.2359 20.949 22.3266C20.7728 22.3951 20.508 22.4766 20.0205 22.4988C19.4934 22.5229 19.3353 22.528 18.0001 22.528C16.6649 22.528 16.5068 22.5229 15.9796 22.4988C15.4921 22.4766 15.2274 22.3951 15.0512 22.3266C14.8178 22.2359 14.6512 22.1276 14.4763 21.9526C14.3013 21.7777 14.1929 21.6111 14.1022 21.3777C14.0338 21.2015 13.9523 20.9368 13.9301 20.4493C13.906 19.922 13.9009 19.7639 13.9009 18.4288C13.9009 17.0937 13.906 16.9356 13.9301 16.4083C13.9523 15.9208 14.0338 15.6561 14.1022 15.4799C14.1929 15.2465 14.3013 15.0799 14.4762 14.905C14.6512 14.73 14.8178 14.6217 15.0512 14.5309C15.2274 14.4625 15.4921 14.381 15.9796 14.3588C16.5069 14.3347 16.665 14.3296 18.0001 14.3296"
                fill="#001F3F"
              />
              <path
                d="M18.0012 20.0959C17.0807 20.0959 16.3345 19.3497 16.3345 18.4292C16.3345 17.5087 17.0807 16.7625 18.0012 16.7625C18.9217 16.7625 19.6679 17.5087 19.6679 18.4292C19.6679 19.3497 18.9217 20.0959 18.0012 20.0959ZM18.0012 15.8616C16.5831 15.8616 15.4336 17.0112 15.4336 18.4292C15.4336 19.8473 16.5831 20.9968 18.0012 20.9968C19.4193 20.9968 20.5688 19.8473 20.5688 18.4292C20.5688 17.0112 19.4193 15.8616 18.0012 15.8616ZM21.2703 15.7602C21.2703 16.0916 21.0016 16.3602 20.6703 16.3602C20.3389 16.3602 20.0703 16.0916 20.0703 15.7602C20.0703 15.4288 20.3389 15.1602 20.6703 15.1602C21.0016 15.1602 21.2703 15.4288 21.2703 15.7602Z"
                fill="#001F3F"
              />
            </svg>

            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.928711"
                width="35"
                height="35"
                rx="17.5"
                stroke="#001F3F"
              />
              <path
                d="M24 14.6125C23.5506 14.8166 23.074 14.9506 22.586 15.01C23.0943 14.6976 23.4847 14.2028 23.6685 13.6133C23.1852 13.9074 22.6565 14.1146 22.1051 14.2259C21.656 13.7353 21.0162 13.4287 20.3081 13.4287C18.9484 13.4287 17.8461 14.559 17.8461 15.9532C17.8461 16.151 17.8679 16.3437 17.9098 16.5285C15.8637 16.4232 14.0497 15.4182 12.8354 13.8908C12.6235 14.2637 12.5021 14.6974 12.5021 15.16C12.5021 16.0358 12.9367 16.8085 13.5973 17.2612C13.2064 17.2487 12.824 17.1404 12.4822 16.9454C12.482 16.956 12.482 16.9666 12.482 16.9772C12.482 18.2003 13.3306 19.2207 14.4569 19.4526C14.0943 19.5537 13.714 19.5685 13.3451 19.4959C13.6583 20.4988 14.5676 21.2287 15.6449 21.2491C14.8023 21.9262 13.7407 22.3298 12.5873 22.3298C12.3885 22.3298 12.1926 22.3178 12 22.2945C13.0895 23.0108 14.3836 23.4287 15.7739 23.4287C20.3024 23.4287 22.7786 19.5819 22.7786 16.2459C22.7786 16.1364 22.7763 16.0276 22.7715 15.9193C23.2535 15.562 23.6695 15.1195 24 14.6125Z"
                fill="#001F3F"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
