import KgSvg from "../assets/svgs/KG_01.svg";

export default function FirstSectionElement() {
  return (
    <section id="home">
      <div className="description">
        <h1>Hello, I'm Mani</h1>
        <h1>a Fullstack Developer</h1>
        <p>
          Fond of creating web applications and bringing them to life using code
          & develop mobile applications
        </p>
        <button>Download Resume</button>
      </div>
      <div style={{ position: "relative" }}>
        <img src={KgSvg} />
      </div>
    </section>
  );
}
