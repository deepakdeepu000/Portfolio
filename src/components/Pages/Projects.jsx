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
    { title: "Quiz App", category: "Web Development", image: "./assets/images/projects/quizapp.png" },
    { title: "Object Detection", category: "Applications & Machine Learning", image: "./assets/images/projects/objectdetection.png" },
    { title: "Customer Churn Analysis", category: "Machine Learning", image: "./assets/images/projects/customerchurn.jpg" },
    { title: "Facial Recognition", category: "Applications", image: "./assets/images/projects/facereko.png"},
    { title: "To-do-List", category: "Web Design", image: "./assets/images/projects/todolist.png" },
    { title: "Summary", category: "Web Development", image: "./assets/images/project-7.png" },
    { title: "Task Manager", category: "Applications", image: "./assets/images/project-8.jpg" },
    { title: "Arrival", category: "Web Development", image: "./assets/images/project-9.png" },
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
                <a href="#">
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

