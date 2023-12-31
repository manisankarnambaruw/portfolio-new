export default function SecondSectionElement(props: { className: string }) {
  return (
    <section className={"description_2 " + props.className} id="skills">
      <div style={{ marginTop: "10px" }}>
        <h1>Skill Set</h1>
        <div className="border" />

        <div className="skills_container">
          <div className="skill_content">
            <div>
              <i
                className="fa-brands fa-github"
                style={{ color: "#fc4955", fontSize: "30px" }}
              />
            </div>
            <p style={{ marginTop: "10px", fontSize: "20px " }}>
              Git Version Control
            </p>
            <p style={{ marginTop: "10px" }}>
              I have worked on Github, Gitlab, Bitbucket to commit, push and
              merge changes of my work.
            </p>
          </div>

          <div className="skill_content">
            <div>
              <i
                className="fa-solid fa-mobile-screen-button"
                style={{ color: "#fc4955", fontSize: "30px" }}
              />
            </div>
            <p style={{ marginTop: "10px", fontSize: "20px " }}>
              Mobile development
            </p>
            <p style={{ marginTop: "10px" }}>
              I have worked on creating mobile apps using React Native.
            </p>
          </div>

          <div className="skill_content">
            <div>
              <i
                className="fa-solid fa-globe"
                style={{ color: "#fc4955", fontSize: "30px" }}
              />
            </div>
            <p style={{ marginTop: "10px", fontSize: "20px " }}>
              Web Development
            </p>
            <p style={{ marginTop: "10px" }}>
              I have 5+ years of experience in developing web applications using
              ReactJs on Frontend and Spring Boot on Backend.
            </p>
          </div>

          <div className="skill_content">
            <div>
              <i
                className="fa-solid fa-server"
                style={{ color: "#fc4955", fontSize: "30px" }}
              />
            </div>
            <p style={{ marginTop: "10px", fontSize: "20px " }}>
              Backend Development
            </p>
            <p style={{ marginTop: "10px" }}>
              I have 4+ years of experience in developing backend applications
              using serveral frameworks like Spring Boot, Ruby on rails.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
