import React, { useState } from "react";

const ProjectComponent = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Machine Learning",
    "Applications",
    "Web Development",
    "Web Design" // Added Web Design to match the projects
  ];

  const projects = [
    { title: "Quiz App", category: "Web Development", image: "./assets/images/projects/quizapp.png" , Link: "https://github.com/deepakdeepu000/Quizen-AI_Quiz_App"},
    { title: "Fake Currency Detection", category: "Applications & Machine Learning", image: "./assets/images/projects/objectdetection.png", Link: "" },
    { title: "Customer Churn Analysis", category: "Machine Learning", image: "./assets/images/projects/customerchurn.jpg", Link: "https://github.com/deepakdeepu000/Customer-Churn_detection" },
    { title: "Object Recognition", category: "Applications", image: "./assets/images/projects/facereko.png",  Link: "https://github.com/deepakdeepu000/Object-Detection"},
    { title: "To-do-List", category: "Web Design", image: "./assets/images/projects/todolist.png", Link: "https://github.com/deepakdeepu000/to-do-list"},
    { title: "ChatBot", category: "Web Development & Machine Learning", image: "./assets/images/projects/chatbot.png", Link: "https://github.com/deepakdeepu000/Webpage-ChatBot"}
  ];

  // Function to determine if the project matches the active category
  const matchesCategory = (project) => {
    if (activeCategory === "All") return true;
    const projectCategories = project.category.split(" & ");
    return projectCategories.includes(activeCategory);
  };

  const filteredProjects = projects.filter(matchesCategory);

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={category === activeCategory ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select">
            <div className="select-value">Select category</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories.map((category) => (
              <li className="select-item" key={category}>
                <button onClick={() => setActiveCategory(category)}>{category}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.length === 0 ? (
            <li className="project-item">No projects found</li>
          ) : (
            filteredProjects.map((project, index) => (
              <li
                className="project-item active"
                key={project.title}  // Ideally use a unique ID if available
                data-filter-item
                data-category={project.category.toLowerCase()}
              >
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))
          )}
        </ul>
      </section>
    </article>
  );
};

export default ProjectComponent;

