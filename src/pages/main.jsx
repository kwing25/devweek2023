import React from "react";

export default function Main() {
  return (
    <div>


      <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Finding Home</span>
          </h1>
          <p className="text-md mt-4 text-gray-400">
            Immigrant & Refugee Resources
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Encontrar hogar - Refugiado inmigrante
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="https://source.unsplash.com/collection/764827/800x600"
            className="w-1/2 rounded-lg"
            alt="Tree"
          />
          <div>
            <img
              src="https://source.unsplash.com/collection/764827/800x600"
              className="mb-8 rounded-lg"
              alt="Tree"
            />
            <img
              src="https://source.unsplash.com/collection/764827/800x600"
              className="rounded-lg"
              alt="Tree"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
