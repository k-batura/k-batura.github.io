// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const experiences = [
    {
      title: "DevOps Engineering Intern",
      company_name: "IBM",
      icon: "",
      iconBg: "white",
      date: "May 2022 - August 2022",
      points: [
        "Developing and maintaining web applications using Java Spring and other related technologies.",
        "Collaborating with cross-functional teams including designers, Business Analysts, and other developers to create high-quality products.",
        "Implementing scalable REST APIs using Spring framework ensuring robust architechture.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Tangerine",
      icon: "",
      iconBg: "white",
      date: "May 2022 - August 2022",
      points: [
        "Developing and maintaining web applications using Java Spring and other related technologies.",
        "Collaborating with cross-functional teams including designers, Business Analysts, and other developers to create high-quality products.",
        "Implementing scalable REST APIs using Spring framework ensuring robust architechture.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  return (
    <section id="experiences" className=" body-font">
      <div className="container px-5 py-10 mx-auto  lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-white-500 bg-gray-900 text-center text-3xl font-medium title-font mb-4 text-white">
            Work Experience
          </h1>
          <p className="lg:w-2/3 text-white-500 bg-gray-900 mx-auto leading-relaxed text-base">
            As of now, I have built 2 fully functioning apps and this website.
            But don't worry, there more to come!
          </p>

          <div className="mt-12 flex">
            <VerticalTimeline lineColor="#22C55E">
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{
                    background: experience.iconBg,
                    borderColor: "#22C55E",
                  }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full ">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "10px",
                    borderStyle: "solid",
                    borderBottomColor: "#22C55E",
                    boxShadow: "none",
                    background: "#3F3D56",
                  }}
                >
                  <div>
                    <h3 className="text-white text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-white font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-white font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
