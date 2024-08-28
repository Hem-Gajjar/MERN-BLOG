import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex w-full border border-gray-500  p-2 rounded-2xl gap-2">
      <div className="flex-1  content-center items-center rounded-2xl justify-center text-center text-xl">
        <h1 className="text-2xl ">Best JS Course ever existed</h1>
        JavaScript: From Zero to Hero, One Line at a Time!
        <Button className="theme-button mt-4 mx-auto">Buy Now</Button>
      </div>
      <div className="flex-1 items-center justify-center text-center p-5 max-h-50 rounded-2xl">
        <img
          src="https://www.learnfly.com/img/post_img/1335475250_1_5ev1xmjs2-sj4ddejfdnqa.png"
          alt=""
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default CallToAction;
