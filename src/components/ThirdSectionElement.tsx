export default function ThirdSectionElement(props: { className: string }) {
  return (
    <section className={"description_3 " + props.className} id="contact">
      <div style={{ marginTop: "10px", height: "100%", paddingBottom: "70px" }}>
        <h1>Connect with me</h1>
        <div className="border" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <table className="third_table">
            <tr>
              <td>
                <a
                  href="https://www.linkedin.com/in/mani-s-6460901b1/"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ fontSize: "50px", color: "#0a66c2" }}
                  ></i>
                </a>
              </td>
              <td>
                <a href="mailto:manisankar.nambaruw@gmail.com">
                  <i
                    className="fa-solid fa-envelope"
                    style={{ fontSize: "50px", color: "#fc4955" }}
                  ></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/manisankarnambaruw" target="_blank">
                  <i
                    className="fa-brands fa-square-github"
                    style={{ fontSize: "50px", color: "#ddd" }}
                  ></i>
                </a>
              </td>
              <td>
                <a href="https://twitter.com/ManiNambaru" target="_blank">
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "50px", color: "#0a66c2" }}
                  ></i>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
}
