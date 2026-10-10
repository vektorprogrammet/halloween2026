import React from "react";

const EndPage = () => {
  return (
    <>
      <section className="bg-linear-300/oklab from-[#000000] via-[#411710] to-[#E34F37] flex min-h-screen items-center justify-center">
        <div className="flex w-[1000px] gap-4 flex-col py-3 px-4 flex px-4 py-2">
          <div className="flex aspect-video overflow-hidden w-full items-center  flex-col justify-center">
            <video className="w-full h-full" controls autoPlay>
              <source src="public\Hamter.mp4" type="video/mp4"/>
              Something wrong happened with the video
            </video>
          </div>
          <div className="bg-[#17101f] flex border rounded-md px-4 py-2 items-center flex-col justify-center">
            <p className="text-white font-creepster  text-4xl text-center">
              Thanks for playing
            </p>
            <p className="text-white font-creepster text-9xl text-center">
              <span className="text-[#FF7841]">Happy</span> Halloween
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EndPage;
