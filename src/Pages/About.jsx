import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
        possimus harum voluptatum natus laborum incidunt cumque corrupti ipsam
        temporibus perspiciatis repudiandae tenetur dolorem placeat alias
        perferendis beatae debitis provident. Obcaecati debitis officia
        architecto quos, explicabo est consequuntur ea libero quaerat
        consectetur nisi aperiam voluptatem fugit unde corrupti asperiores vel
        laborum.
      </p>
    </>
  );
};

export default About;
