// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const experiences = [
    {
      title: "Developer Intern",
      company_name: "IBM",
      icon: "/ibm_logo.jpeg",
      iconBg: "white",
      date: "May 2023 - August 2024",
      points: [
        "Slashed costs by $120,000+ annually by re-provisioning IBM Cloud assets, leveraging Terraform and Ansible playbooks",
        "Implemented Python Cronjobs and Bash scripts to configure and optimize VMs and Hyper-Vs for clients, leading to a 20% improvement in system performance.",
        "Reduced container overhead by 30%, using Docker and Kubernetes to streamline deployment across multiple environments.",
        "Enhanced operational efficiency by over 60% utilizing Ansible Automation to create and manage YAML playbooks.",
        "Employed Red Hat Tower to execute playbooks, significantly reducing manual configuration efforts by 45%.",
        "Authored comprehensive runbooks for 800+ distinct alert types to configure PagerDuty alerts, greatly streamlining incident response processes",
        "Generated 1000+ internal pages using Markdown, Gatsby Carbon theme, and YAML, overhauling DevOpsdocumentation.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Tangerine (Scotiabank)",
      icon: "/tangerine_logo.jpeg",
      iconBg: "white",
      date: "May 2022 - August 2022",
      points: [
        "Assisted in migration of legacy monolith code-base to a distributed microservice Backend For Frontend (BFF) architecture pattern using Kotlin and Angular.js for the Tangerine mobile banking engineering department.",
        "Illustrated reliability through extensive RESTful API testing utilizing Postman and unit testing using Kotest.",
        "Ensured professional coding practices through utilization of ktLint linter and SonarCube Code Smells refinements.",
        "Participated in Scrum sprints utilizing JIRA software to resolve tickets and submit deliverables through Git Pull Requests.",
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
          <p className="lg:w-2/3 text-white-500 bg-gray-900 mx-auto leading-relaxed text-base text-center">
            I have 2 internships under my belt. Always looking for more!
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
                    width: "60px",
                    height: "60px",
                    margin: "0 auto",
                    transform: "translateX(-50%)",
                  }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full">
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
