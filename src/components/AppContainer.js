import React, { Component } from 'react';
import VacationFinder from "./VacationFinder";
import { Container } from 'reactstrap';
import { Row, Col } from "reactstrap";
import PackageProviders from "./PackageProviders";
import Members from "./Members";
import CustomFilter from "./CustomFilter";
import 'bootstrap/dist/css/bootstrap.css';
import NavigationPane from "./NavigationPane";
class AppContainer extends Component {

    render() {
        return (
            <div>
                <Container>
                <NavigationPane/>
                </Container>
                <Container>
                    <Row>
                    <VacationFinder/>
                    <PackageProviders/>
                    </Row>
                </Container>

                <Container>
                    <Row>
                    <Members/>
                    <CustomFilter/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AppContainer;