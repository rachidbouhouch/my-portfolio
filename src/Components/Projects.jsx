import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import ComingSoon from "../assets/coming-soon.jpg";

const Projects = () => {
  return (
    <div
      className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 max-w-4xl gap-2 mx-auto"
      id="projects"
    >
      <div className="max-w-md bg-color ring-1 ring-gray-100/10 rounded-lg shadow">
        <div className="p-5">
          <div className="grid grid-cols-2 gap-0">
            <div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Soon ...
              </h5>
            </div>

            <div className="flex gap-x-6 text-gray-100 justify-end">
              <a
                href="#"
              >
                <BsGithub className="text-2xl" />
              </a>

              <a
                href="#"
              >
                <BsGlobe className="text-2xl" />
              </a>
            </div>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Description
          </p>
        </div>
      </div>
      </div>
  );
};
export default Projects;
