import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Zohaib</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Data Scientist</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            AI, Machine Learning, Deep Learning, ANN, CNN and Computer Vision.
            <br />
          </p>
        </div>
        <a  href="/CV.pdf" download className="btn btn-primary">
         Get CV
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
