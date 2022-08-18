import {Container, Row, Col} from 'reactstrap'
// import { FontAwesomeIcon } from 'font-awesome'

const About = () => {

    return(
        <div className='body1'>
        <Container>
            <div id="about" className='box'>
            <Row className='box-text'>
                About Me
            </Row>
            <Row>
                <div class="col align-items-center justify-content-center " id="box1">
                    <div class="row">
                        <div class="col">
                            <h2>What I Can Do.</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <ul>
                                {/* <li><FontAwesomeIcon icon={('html5')}/></li> */}
                                <li><i class="fab fa-html5 fa-5x"></i></li>
                                <li><i class="fab fa-css3 fa-5x"></i></li>
                                <li><i class="fab fa-bootstrap fa-5x"></i></li>
                                <li><i class="fab fa-react fa-5x"></i></li>
                                <li><i class="fab fa-mdb fa-5x"></i></li>
                                <li><i class="fab fa-node-js fa-5x"></i></li>
                                <li><i class="fab fa-github fa-5x"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col align-items-center justify-content-center " id="box2">
                    <div class="row">
                        <div class="col">
                            <h2>Who I am.</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p class="lead">I grew up in Colorado exploring all of the wonders and hobbies
                                of each
                                season. I continue to be a nature lover, craft addict, and travel enthusiast. My
                                background in
                                physics and in education encapsulates my strongest skills as a developer: I possess an
                                inherent
                                love of learning & deep curiosity to understand the "why" as well as a finely-tuned
                                ability to
                                communicate ideas to others. My craft mind and my math mind make magic.</p>
                        </div>
                    </div>
                </div>
            </Row>
            </div>
        </Container>
        </div>
    )
}

export default About