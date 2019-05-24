import React from "react";

import aptoLogo from "./AptoLogo.webp";
import WorkExperience from "./work-experience/work-experience";
import galvanizeLogo from "./galvanize-logo.svg";
import flowhubLogo from "./Flowhub_Logo.svg";
import latitude40Logo from "./latitude40-logo.png";
import nasaLogo from "./nasa-logo.svg";

import "./work-experience-list.css";

const jobs = [
  {
    title: "Full Stack Engineer at Apto",
    logo: aptoLogo,
    dates: "August 2018 - April 2019",
    content: [
      "Apto provides a custom Customer Relationship Managment (CRM) tool that commercial real estate brokers use to find clients, schedule appointments, and close deals on large and small buildings throughout the United States.",
      "I was part of a team that was created in order to troubleshoot a scaling problem that was causing  the customer dashboard to not load sometimes. This team (three people in total) was given a month to determine why the issue was occuring, come up with a list of possible solutions and then implement as many of them as possible.",
      "As I always opt for data-first we spent most of the time researching what was happening and fully understanding the problem. This went into a presentation that was given to the board of directors. We also used the data to determine several possible solutions and which ones were the most valuable to the customers to implement. Those were put into place and the scaling crisis was averted.",
      "Before that internal team was disbanded we also created dashboards and alerts so that we could tell if another crisis was going to happen before it would."
    ]
  },
  {
    title: "Lead Instructor and Principle Full-Stack Developer at Galvanize",
    logo: galvanizeLogo,
    dates: "November 2015 - August 2018",
    content: [
      "I led over three six-month cohorts of students as they were learning how to program, create web applications and find jobs. This was a leadership position so not only was I teaching lessons as an instructor, I was also managing a small team that involved full-time instructors and resident instructors (previous students who were being payed to work with us for another cohort. They would teach lessons, interface with the classrooms, and continue their education).",
      "Galvanize was also where I got most of my teaching skills. Teaching is so much more that just standing in front of a class and talking. It's mostly about collecting data and finding out where each student is and then ensuring that they are getting what they need to get in order to learn as much as possible in the shortest period of time. I have turned the teaching skill into a mentoring skill that I still use as often as possible."
    ]
  },
  {
    title: "Software Developer at Flowhub",
    logo: flowhubLogo,
    dates: "January 2015 - October 2015",
    content: [
      "I started working with Flowhub before they had an office, in the front-end developers basement. The three of us (Front-end, back end [me], and iOS) created the applications that Flowhub used to get funding and the first few customers.",
      "I learned a lot about how software teams can work together in creating prototypes that can also be used on site with customers. I also learned some of the business of what kind of customers a business would want and why they may or may not pay for the service."
    ]
  },
  {
    title: "Software Developer at Latitude40",
    logo: latitude40Logo,
    dates: "September 2014 - April 2015",
    content: [
      "Latitude40 is a consulting agency that builds web and native applications for startups and individuals. I was a part of a two person team where we were developing web applications using Node.js and Angular for clients. This involved working with the sales team to help sell the agencies abilities, estimate the cost of the project, and then build the project for the client.",
      "I learned how to work remote here, as the company only rents office space when we had meetings. This is a crucial skill that I still use to this day whenever I'm working at home or on travel. I also learned how to work with non-technical clients, helping them understand what they are asking for and then creating solutions that solve their problems.",
      "Also, I learned the rules to Cricket. A fun investigation for a client that didn't end up working with us."
    ]
  },
  {
    title:
      "Senior Systems Administrator at Adnet Systems (contract for NASA Advanced Supercomputing)",
    logo: nasaLogo,
    dates: "April 2006 - May 2014",
    content: [
      "This was a full-time salaried position for Adnet Systems, however I was onsite with a team of six other system administrators at Ames Research Center.",
      "While troubleshooting computer problems that the scientists and administrators were having was part of the job description, a big part of managing the servers and automating the maintenance of over two-hundres Red-Hat Linux and Mac OS X systems. I spend a lot of time on the Mac backup and upgrade systems to make sure that we could keep the computers data safe while also having the latest security patches installed.",
      "I learned a lot about architecting systems that cannot go down while also reducing the risk of being hacked. Most of this kind of architecture relies on a larger budget, however I can still use this knowledge to increase security when designing new systems."
    ]
  }
];

function WorkExperienceList() {
  return (
    <section className="WorkExperienceList">
      <h1>Where I've provided value</h1>
      {jobs.map(job => (
        <div key={job.title}>
          <WorkExperience
            logo={job.logo}
            title={job.title}
            dates={job.dates}
            content={job.content}
          />
        </div>
      ))}
    </section>
  );
}

export default WorkExperienceList;
