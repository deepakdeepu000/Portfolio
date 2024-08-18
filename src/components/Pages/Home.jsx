import React, {useState , useRef , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose,
         faQuoteLeft,
         faAnglesRight
    } from '@fortawesome/free-solid-svg-icons';



const SkillList = [
  { label: "HTML", image: "./assets/images/skills/html.png" },
  { label: "CSS", image: "./assets/images/skills/css.png" },
  { label: "JavaScript", image: "./assets/images/skills/javascript.png" },
  { label: "React", image: "./assets/images/skills/react.png" },
  { label: "Node", image: "./assets/images/skills/node.png" },
  { label: "MongoDB", image: "./assets/images/skills/mongodb.png" },
  { label: "aws", image: "./assets/images/skills/aws.png" },
  { label: "Python", image: "./assets/images/skills/python.png" },
  { label: "cpp", image: "./assets/images/skills/cpp.png" },
];

const Certificates = [
  { 
    label: "AWS Certified Cloud Pactitinoer",
    date: "2021-06-14",
    image: "./assets/images/certificate-1.png",
    content: "AWS Certified Solutions Architect credential demonstrates expertise in designing distributed systems and applications on AWS. It verifies proficiency in deploying, managing, and operating scalable systems on the AWS cloud platform."
  },
  { 
    label: "Microsoft Certified: Azure Fundamentals",
    date: "2021-06-14",
    image: "./assets/images/certificate-3.png",
    content: "The Microsoft Certified: Azure Fundamentals certification validates foundational knowledge of cloud services and how those services are provided with Microsoft Azure. It is ideal for individuals seeking to understand basic cloud concepts and Azure."
  },
  { 
    label: "IT Python Specilist",
    date: "2021-06-14",
    image: "./assets/images/certificate-2.png",
    content: "The Python for Data Science certification demonstrates proficiency in Python programming and its applications in data science. It covers key areas such as data manipulation, visualization, and analysis using Python libraries."
  },
  { 
    label: "CCNA (Cisco Certified Network Associate)",
    date: "2021-06-14",
    image: "./assets/images/certificate-4.png",
    content: "The CCNA certification validates skills in networking fundamentals, IP connectivity, IP services, security fundamentals, and automation. It demonstrates the ability to install, configure, and troubleshoot networks."
  }
];


const HomeComponent = () => {

  const [isModelOpened, setModelOpened] = useState(false);
  const [selectedcertificate, setSelectedCertificate] = useState({});


  const handleModalOpened = (certificate) => {
    setSelectedCertificate(certificate);
    setModelOpened(true);
  }

  const handleModalClosed = () => {
    setModelOpened(false);
    setSelectedCertificate({});
  }

  return (
      <>
      <article class="about  active">

      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>
          I am an AWS Cloud Engineer and Full-Stack Engineer with extensive experience in developing and deploying scalable solutions. 
          My expertise spans across both backend and frontend technologies, leveraging AWS services to build robust, cloud-native applications. 
        </p>

        <p>
          With a passion for turning complex problems into elegant, user-friendly solutions, 
          I thrive on creating intuitive designs and efficient systems that drive business success.
        </p>
      </section>

      <section class="service">

        <h3 class="h3 service-title">What i'm doing</h3>

        <ul class="service-list">

          <li class="service-item">

            <div class="service-icon-box">
              <img src="./assets/images/icon-design.svg" alt="design icon" width="40"></img>
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Web design</h4>

              <p class="service-item-text">
                The most modern and high-quality design.
              </p>
            </div>

          </li>

          <li class="service-item">

            <div class="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40"></img>
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Web development</h4>

              <p class="service-item-text">
                High-quality development of sites.
              </p>
            </div>

          </li>

          <li class="service-item">

                    <div class="service-icon-box">
                      <img src="./assets/images/icon-aws.svg" alt="AWS icon" width="40"></img>
                    </div>
                  
                    <div class="service-content-box">
                      <h4 class="h4 service-item-title">AWS Cloud Solutions</h4>
                  
                      <p class="service-item-text">
                        Expertise in designing and deploying scalable cloud solutions using AWS services.
                      </p>
                    </div>
                  
                  </li>
                  
                  <li class="service-item">
                  
                    <div class="service-icon-box">
                      <img src="./assets/images/icon-devops.svg" alt="DevOps icon" width="40"></img>
                    </div>
                  
                    <div class="service-content-box">
                      <h4 class="h4 service-item-title">DevOps Engineering</h4>
                  
                      <p class="service-item-text">
                        Streamlining development and operations through automation and continuous integration.
                      </p>
                    </div>
                  
                  </li>
         </ul>

      </section>



      <section class="certifications">

        <h3 class="h3 certifications-title">Certificates</h3>

        <ul class="certifications-list has-scrollbar">
          {Certificates.map((certificate, index) =>(
              <li class="certifications-item" onClick={() => handleModalOpened(certificate)}>
              <div class="content-card" >

                <figure class="certifications-avatar-box">
                    <img src={certificate.image} alt="certificate" width="60"></img>
                </figure>

                <h4 class="h4 certifications-item-title" >{certificate.label}</h4>

                <div class="certifications-text" >
                  <p>
                    {certificate.content}
                  </p>
                </div>

              </div>
            </li>
          ))}

        </ul>

      </section>


      {isModelOpened && selectedcertificate && (

        <div class="modal-container active"  onClick={handleModalClosed} >

        <div class="overlay  active" ></div>

        <section class="certifications-modal">

          <button class="modal-close-btn" >
              <FontAwesomeIcon icon={faClose} />
          </button>

          <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
                <img src={selectedcertificate.image} alt="certificate" width="80"></img>
            </figure>
                <FontAwesomeIcon className='modal-quote-item' icon={faQuoteLeft} />
          </div>

          <div class="modal-content">

            <h4 class="h3 modal-title" >{selectedcertificate.label}</h4>

            <time datetime="2021-06-14">{selectedcertificate.date}</time>

            <div >
              <p>
                {selectedcertificate.content}
              </p>
              <a href='#'>
                <button className='modal-btn-item'>View Certificate <FontAwesomeIcon icon={faAnglesRight} /></ button>
              </a>
            </div>

          </div>

        </section>
        </div>

      )}

    <section className="skills-about">
        <h3 className="h3 skills-title-ab">Skills</h3>
        <ul className="skills-list-ab has-scrollbar" >  
            {SkillList.map((skill, index) => (
              <li className="skills-item-ab" key={index}>
                <img src={skill.image} alt={skill.label} width="80" />
              </li>
            ))}
        </ul>
      </section>
    </article>

    </>
  );
};

export default HomeComponent;



{/* <section class="clients">

        <h3 class="h3 clients-title">Clients</h3>

        <ul class="clients-list has-scrollbar">

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-1-color.png" alt="client logo"></img>
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-2-color.png" alt="client logo"></img>
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-3-color.png" alt="client logo"></img>
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-4-color.png" alt="client logo"></img>
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-5-color.png" alt="client logo"></img>
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-6-color.png" alt="client logo"></img>
            </a>
          </li>

        </ul>

      </section> */}