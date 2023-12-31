import "./App.css";
import SecondSectionElement from "./components/SecondSectionElement";
import FirstSectionElement from "./components/FirstSectionElement";
import { useLayoutEffect, useState } from "react";
import ThirdSectionElement from "./components/ThirdSectionElement";

function App() {
  const [sectionElement, setSectionElement] = useState(
    window.location.hash || "#home"
  );
  const [visited, setVisited] = useState<string[]>([]);

  useLayoutEffect(() => {
    // hash change
    const hashChange = () => {
      setSectionElement(window.location.hash);
    };
    window.addEventListener("hashchange", hashChange);

    return () => {
      window.removeEventListener("hashchange", hashChange);
    };
  }, []);

  useLayoutEffect(() => {
    // scroll change
    const scrollChange = (_: any) => {
      const sFirsty = document.getElementById("home")?.getBoundingClientRect();
      const sTwoy = document.getElementById("skills")?.getBoundingClientRect();
      const sThirdy = document
        .getElementById("contact")
        ?.getBoundingClientRect();

      if ((sThirdy?.y || 0) <= 40) {
        setSectionElement("#contact");
        setVisited((s: string[]): string[] => {
          if (!s.includes("#contact")) {
            return [...s, "#contact"];
          }
          return s;
        });
      } else if ((sTwoy?.y || 0) <= 40) {
        setVisited((s: string[]): string[] => {
          if (!s.includes("#skills")) {
            return [...s, "#skills"];
          }
          return s;
        });
        setSectionElement("#skills");
      } else if ((sFirsty?.y || 0) <= 20) {
        setSectionElement("#home");
      }
    };

    window.addEventListener("scroll", scrollChange, false);

    return () => window.removeEventListener("scroll", scrollChange);
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="#home">
            <p>
              Ma<span style={{ color: "#fc4955" }}>n</span>i
            </p>
          </a>

          <div className="header_inner_container">
            <a
              href="#home"
              style={{
                fontWeight: sectionElement === "#home" ? "bold" : "normal",
              }}
            >
              Home
            </a>
            <a
              href="#skills"
              style={{
                fontWeight: sectionElement === "#skills" ? "bold" : "normal",
              }}
            >
              Skills
            </a>
            <a
              href="#contact"
              style={{
                fontWeight: sectionElement === "#contact" ? "bold" : "normal",
              }}
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <FirstSectionElement />
        <SecondSectionElement
          className={visited.includes("#skills") ? "active" : ""}
        />
        <ThirdSectionElement
          className={visited.includes("#contact") ? "active" : ""}
        />
        <div className="controller">
          <div
            onClick={() => {
              window.location.href = "#home";
            }}
            style={{
              backgroundColor:
                sectionElement === "#home" ? "#fc4955" : "transparent",
            }}
          ></div>
          <div></div>
          <div
            onClick={() => {
              window.location.href = "#skills";
            }}
            style={{
              backgroundColor:
                sectionElement === "#skills" ? "#fc4955" : "transparent",
            }}
          ></div>
          <div></div>
          <div
            onClick={() => {
              window.location.href = "#contact";
            }}
            style={{
              backgroundColor:
                sectionElement === "#contact" ? "#fc4955" : "transparent",
            }}
          ></div>
        </div>

        <footer>
          <nav>
            <a
              href="#home"
              style={{
                color: sectionElement === "#home" ? "#fc4955" : "#ddd",
              }}
            >
              <i className="fa-solid fa-house" style={{ fontSize: "20px" }}></i>
            </a>
            <a
              href="#skills"
              style={{
                color: sectionElement === "#skills" ? "#fc4955" : "#ddd",
              }}
            >
              <i
                className="fa-solid fa-terminal"
                style={{ fontSize: "20px" }}
              ></i>
            </a>
            <a
              href="#contact"
              style={{
                color: sectionElement === "#contact" ? "#fc4955" : "#ddd",
              }}
            >
              <i
                className="fa-regular fa-address-card"
                style={{ fontSize: "20px" }}
              ></i>
            </a>
          </nav>
        </footer>
      </main>
    </>
  );
}

export default App;
