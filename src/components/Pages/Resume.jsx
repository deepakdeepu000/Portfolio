import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap , faBookOpen } from '@fortawesome/free-solid-svg-icons';


const education = [
  {
    name: "Aditya University",
    timeline: "2021 - present",
    study: "Bachelor's in Artificial Intelligence & Machine Learning",
  },
  {
    name: "Sri Chaitanya Jr College",
    timeline: "2019 - 2021",
    study: "Intermediate - MPC",
  }
];

const experience = [
  {
    title: "Team Lead - Quiz Application Development",
    timeline: "March 2024",
    description: "Led a team of 6 students to develop a dynamic quiz application using React and Node.js. Oversaw the entire project lifecycle, from planning and design to implementation and testing. The application featured randomized questions, real-time scoring, and a responsive UI."
  },
  {
    title: "DevOps Engineer Intern",
    timeline: "June 2023 - August 2023",
    description: "Worked on automating cloud infrastructure using AWS, Jenkins, Docker, and Ansible. Implemented CI/CD pipelines for deploying applications efficiently."
  },
  {
    title: "AI/ML Project - Facial Recognition System",
    timeline: "2023",
    description: "Developed a facial recognition system using Python, OpenCV, and deep learning techniques. Successfully created a model that achieved 95% accuracy."
  }
];

const skills = [
  { name: "Wed Development" , level: "80%" },
  { name: "React & Nodejs", level: "70%"},
  { name: "AWS & Cloud Computing", level: "85%" },
  { name: "Database Management (SQL & NoSQL)", level: "70%" },
  { name: "DevOps Tools (Docker, Jenkins, Ansible)", level: "75%" },
];

const ResumeComponent = () => {
    return (
      <>
        <article class="resume active">

        <header>
          <h2 class="h2 article-title">Resume</h2>
        </header>

        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              < FontAwesomeIcon  icon={ faGraduationCap } />
            </div>

            <h3 class="h3">Education</h3>
          </div>
          <ol class="timeline-list">
                {education.map((item) => (
                  <li class="timeline-item">

                    <h4 class="h4 timeline-item-title">{item.name} </h4>

                    <span>{item.timeline}</span>

                    <p class="timeline-text">
                      {item.study}
                    </p>

                  </li>
                ))}
          </ol>
        </section>

        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
            <FontAwesomeIcon icon={faBookOpen} />
            </div>

            <h3 class="h3">Experience</h3>
          </div>

          <ol class="timeline-list">
                {experience.map((item) => (
                  <li class="timeline-item">

                    <h4 class="h4 timeline-item-title">{item.title} </h4>

                    <span>{item.timeline}</span>

                    <p class="timeline-text">
                      {item.description}
                    </p>

                  </li>
                ))}
          </ol>
        </section>

        <section class="skill">

          <h3 class="h3 skills-title">My skills</h3>

          <ul class="skills-list content-card">
            {skills.map((skill) => (
              <li class="skills-item">

                <div class="title-wrapper">
                  <h5 class="h5">{skill.name}</h5>
                  <data value={parseInt(skill.level)}>{skill.level}</data>
                </div>

                <div class="skill-progress-bg">
                  <div class="skill-progress-fill" style={{width: skill.level }}></div>
                </div>

              </li>
            ))}
          </ul>

        </section>

      </article>
    </>
    );
};

export default ResumeComponent;
