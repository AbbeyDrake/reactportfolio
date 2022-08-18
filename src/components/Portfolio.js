import {Container, Row, Col} from 'reactstrap'
import PortfolioCard from './PortfolioCard'
import { PROJECTS } from '../shared/projects'

const Portfolio = () => {

    return(
        <div className='body2'>
        <Container >
            <div  className='box'>
            <Row className='box-text'>
                Portfolio
            </Row>
            </div>

            <div id="portfolio">
            
            <Row className= 'ms-auto body-component'>
                {PROJECTS.map((project)=>{
                    return(
                    <Col xs='4' lg='2' className='md-3 mb-3' key = {project.id}>
                        <PortfolioCard project = {project}></PortfolioCard>
                    </Col>
                    )
                })}

            </Row>
            </div>
        </Container>
        </div>
    )
}

export default Portfolio