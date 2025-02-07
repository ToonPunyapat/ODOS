import React from "react";

function Title() {
  return (
    <div>
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
        <span className="text-[red]">ODOS </span>
        <span className="text-[black] dark:text-[white]">: </span>
        <span className="text-[black] dark:text-[white]">Summer Camp</span>
      </p>
      <p className="text-[black] dark:text-white text-lg text-justify md:text-2xl lg:text-3xl max-w-md md:max-w-lg lg:max-w-4xl leading-relaxed mt-7 mb-10 text-left indent-8 px-4">
        The “One District, One Scholarship Summer Camp” project aims to create
        equal educational opportunities for all Thai youth from every district
        throughout Thailand, especially in remote areas, including Bangkok,
        through granting scholarships to study and learn modern digital
        technologies abroad, as well as gaining real work experience in
        world-class companies and visiting leading technology companies abroad,
        so that these youths have digital skills and can bring back the
        knowledge and skills they have gained to develop the country.
      </p>
    </div>
  );
}

export default Title;
