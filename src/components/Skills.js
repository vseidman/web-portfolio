import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.png";
import meter8 from "../assets/img/meter8.png";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt=""/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt=""/>
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt=""/>
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt=""/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt=""/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter6} alt=""/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter7} alt=""/>
                                    <h5>PosgreSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} alt=""/>
                                    <h5>Flask</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}