import React, { Component } from 'react';
import VacationFinder from "./VacationFinder";
import { Container } from 'reactstrap';
import { Row, Col } from "reactstrap";
import PackageProviders from "./PackageProviders";
import Members from "./Members";
import CustomFilter from "./CustomFilter";
import 'bootstrap/dist/css/bootstrap.css';
import NavigationPane from "./NavigationPane";
import {Table} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
class AppContainer extends Component {

    render() {
        return (
            <div>
                <Table borderless>
                    <tr>
                        <td> <VacationFinder/></td>
                        <td> <PackageProviders/></td>
                    </tr>
                    <tr>
                        <td> <Members/></td>
                        <td> <CustomFilter/></td>
                    </tr>
                </Table>
                <Container>
                    <NavigationPane/>
                </Container>
            </div>
        );
    }
}

export default AppContainer;