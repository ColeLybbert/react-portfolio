import { Switch } from "antd";

import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

import { useState } from "react";

import { useSpring, animated, useTransition } from "@react-spring/web";

export default function MainPage() {
  const [Menu, setMenu] = useState(true);
  const [aboutMe, setAboutMe] = useState(true);
  const [Skills, setSkills] = useState(true);
  const [Projects, setProjects] = useState(true);
  const [Education, setEducation] = useState(true);
  const [isActive, setActive] = useState(false);
  const [textActive, setTextActive] = useState(false);
  const [backgroundActive, setBackgroundActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive);
    setTextActive(!textActive);
    setBackgroundActive(!backgroundActive);
  };

  if (!backgroundActive) {
    document.body.style.backgroundColor = "#1d1d1d";
  } else {
    document.body.style.backgroundColor = "white";
  }

  const menuTranstion = useTransition(Menu, {
    from: { x: -1000, display: "none" },
    enter: { x: 0, display: "block" },
    leave: [{ opacity: 0 }, { display: "none" }],
  });

  const aboutMeTranstion = useTransition(aboutMe, {
    from: { x: 1000, display: "none" },
    enter: { x: 0, display: "block" },
    leave: [{ opacity: 0 }, { display: "none" }],
  });

  const SkillsTranstion = useTransition(Skills, {
    from: { x: 1000, display: "none" },
    enter: { x: 0, display: "block" },
    leave: [{ opacity: 0 }, { display: "none" }],
  });

  const ProjectsTranstion = useTransition(Projects, {
    from: { x: 1000, display: "none" },
    enter: { x: 0, display: "block" },
    leave: [{ opacity: 0 }, { display: "none" }],
  });

  const EducationTranstion = useTransition(Education, {
    from: { x: 1000, display: "none" },
    enter: { x: 0, display: "block" },
    leave: [{ opacity: 0 }, { display: "none" }],
  });

  const navBarDown = useSpring({
    from: { y: -200 },
    to: { y: 0 },
    config: { duration: 1000 },
  });

  const menu1Right = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { duration: 400 },
  });

  const menu2Right = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { duration: 600 },
  });

  const menu3Right = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { duration: 800 },
  });

  const menu4Right = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { duration: 1000 },
  });

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <animated.nav
          className={isActive ? "dark" : "light"}
          style={{
            color: "whitesmoke",
            display: "flex",
            alignItems: "center",
            width: "100%",
            ...navBarDown,
          }}
        >
          <h1
            className={textActive ? "dark" : "light"}
            style={{
              margin: "0 25% 0 5%",
              width: "40%",
            }}
          >
            Cole Lybbert
          </h1>
          <a
            href="https://github.com/ColeLybbert"
            style={{
              width: "10%",
            }}
          >
            {" "}
            <GithubOutlined className={isActive ? "dark" : "light"} />
          </a>
          <a
            href="https://www.linkedin.com/in/cole-lybbert-a58542239/"
            style={{
              width: "10%",
            }}
          >
            {" "}
            <LinkedinOutlined className={isActive ? "dark" : "light"} />
          </a>

          <Switch
            defaultChecked
            onChange={ToggleClass}
            style={{
              width: "5%",
            }}
          />
        </animated.nav>

        <div className="menu">
          {menuTranstion((style, item) =>
            item ? (
              <animated.div id="menu-items" style={style}>
                <animated.p
                  onClick={() => {
                    setMenu((v) => !v);
                    setAboutMe((v) => !v);
                  }}
                  className={
                    textActive ? "menu-item darkText" : "menu-item lightText"
                  }
                  style={{
                    ...menu1Right,
                  }}
                >
                  About Me
                </animated.p>

                <animated.p
                  onClick={() => {
                    setMenu((v) => !v);
                    setSkills((v) => !v);
                  }}
                  className={
                    textActive ? "menu-item darkText" : "menu-item lightText"
                  }
                  style={{
                    ...menu2Right,
                  }}
                >
                  Skills
                </animated.p>
                <animated.p
                  onClick={() => {
                    setMenu((v) => !v);
                    setProjects((v) => !v);
                  }}
                  className={
                    textActive ? "menu-item darkText" : "menu-item lightText"
                  }
                  style={{
                    ...menu3Right,
                  }}
                >
                  Projects
                </animated.p>
                <animated.p
                  onClick={() => {
                    setMenu((v) => !v);
                    setEducation((v) => !v);
                  }}
                  className={
                    textActive ? "menu-item darkText" : "menu-item lightText"
                  }
                  style={{
                    ...menu4Right,
                  }}
                >
                  Education
                </animated.p>
              </animated.div>
            ) : (
              ""
            )
          )}
          {aboutMeTranstion((style, item) =>
            item ? (
              ""
            ) : (
              <animated.div
                className={
                  textActive ? " content-item menu-item darkText" : " content-item menu-item lightText"
                }
                style={style}
              >
                <p
                  className={
                    textActive ? "content darkText" : "content lightText"
                  }
                >
                  My name is Cole Lybbert, I am a Front End Developer located in
                  North Bend, Washington. I have been training to become a
                  Front-End Developer for 2 years.
                </p>
                <button
                  className={textActive ? "darkText" : "lightText"}
                  onClick={() => {
                    setMenu((v) => !v);
                    setAboutMe((v) => !v);
                  }}
                >
                  {" "}
                  Back To Home{" "}
                </button>
              </animated.div>
            )
          )}

          {SkillsTranstion((style, item) =>
            item ? (
              ""
            ) : (
              <animated.div className=" content-item menu-item" style={style}>
                <p
                  className={
                    textActive ? "content darkText" : "content lightText"
                  }
                >
                  I first learned HTML and CSS over 2 years ago, then I began
                  learning Javascript, Node.js, and began learning React.js.
                  From there I learned many other things like SASS, Async JS,
                  Test Driven Development with Jest, GitHub, Web APIs, Build
                  Tools, Single Page Web Apps, and more.
                </p>
                <button
                  className={textActive ? "darkText" : "lightText"}
                  onClick={() => {
                    setMenu((v) => !v);
                    setSkills((v) => !v);
                  }}
                >
                  {" "}
                  Back To Home{" "}
                </button>
              </animated.div>
            )
          )}

          {ProjectsTranstion((style, item) =>
            item ? (
              ""
            ) : (
              <animated.div
                className={
                  textActive ? " content-item menu-item darkText" : " content-item menu-item lightText"
                }
                style={style}
              >
                <p
                  className={
                    textActive ? "content darkText" : "content lightText"
                  }
                >
                  <a href="https://github.com/ColeLybbert/fend-final">
                    Udacity Final
                  </a>
                </p>
                <button
                  className={textActive ? "darkText" : "lightText"}
                  onClick={() => {
                    setMenu((v) => !v);
                    setProjects((v) => !v);
                  }}
                >
                  {" "}
                  Back To Home{" "}
                </button>
              </animated.div>
            )
          )}

          {EducationTranstion((style, item) =>
            item ? (
              ""
            ) : (
              <animated.div
                className={
                  textActive ? " content-item menu-item darkText" : " content-item menu-item lightText"
                }
                style={style}
              >
                <p
                  className={
                    textActive ? "content darkText" : "content lightText"
                  }
                >
                  I completed my General Education Degree from Spokane Community
                  College in 2021. I just completed my Front End NanoDegree in
                  2023 where I learned most of my skills.
                </p>
                <button
                  className={textActive ? "darkText" : "lightText"}
                  onClick={() => {
                    setMenu((v) => !v);
                    setEducation((v) => !v);
                  }}
                >
                  {" "}
                  Back To Home{" "}
                </button>
              </animated.div>
            )
          )}

          <animated.div className="aboutMeContent"></animated.div>
          <div
            className={
              backgroundActive
                ? "menu-background-pattern lightBackground"
                : "menu-background-pattern darkBackground"
            }
          ></div>
        </div>
      </div>
    </>
  );
}
