import React from "react";

function Region() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold ">NORTH AMERICA</p>
          <div className="text-lg sm:text-xl mt-2">
            <p>
              <a
                href="/pdf/japan.pdf"
                // target="_blank"
                rel="noopener noreferrer"
              >
                USA
              </a>
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">EUROPE</p>
          <div className="text-lg sm:text-xl flex flex-col mt-2 ">
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              UK
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              Germany
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              Sweden
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              Finland
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              Estonia
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">
            AUSTRALIA
          </p>
          <div className="text-lg sm:text-xl flex flex-col mt-2">
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              Australia
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              New zealand
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">ASIA</p>
          <div className="text-lg sm:text-xl flex flex-col mt-2">
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              China
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              India
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              Japan
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              Korea
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              Singapore
            </a>
            <a
              href="/pdf/japan.pdf"
              // target="_blank"
              rel="noopener noreferrer"
            >
              Taiwan
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <p className="text-right">
          * Click on the destination to see more details.
        </p>
      </div>
    </div>
  );
}

export default Region;
