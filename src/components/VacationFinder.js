import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody,CardTitle, CardSubtitle,CardImg, CardText, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Radio,Table,Jumbotron } from "reactstrap";
import{InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import{Container } from "reactstrap";
import Members from "./Members";

class VacationFinder extends React.Component {

    render() {
        return (
            <div>
                <Container>

                   <Row>
                        <Col >

                            <Card>
                                <CardHeader tag="h4">VacationFinder</CardHeader>
                                <CardBody>
                                    <Form>


                                   <FormGroup>

                                       <Table>
                                           <tr>
                                               <td> <Label for="arrivaldate">Arrival Date</Label></td>
                                               <td> <Input type="date"></Input></td>
                                           </tr>
                                           <tr>
                                               <td><Label for="deaparturedate">Departure Date</Label></td>
                                               <td> <Input type="date"></Input></td>
                                           </tr>
                                       </Table>
                                   </FormGroup>

                                    <Table borderless>
                                        <tr>
                                        <td> <Label>Vacation period</Label></td>
                                            <td><Input type="number" class="form-control"></Input></td>
                                            <td> <Label for="Days">Days</Label></td>
                                            <td><Input type="number" class="form-control"></Input></td>
                                            <td> <Label for="Months">Months</Label></td>
                                    </tr>
                                    </Table>

                                        <FormGroup>


                                            <Table>
                                                <tr>
                                                    <td> <Label for="Days">Destination</Label></td>
                                                    <td> <Input type="select"></Input></td>
                                                </tr>
                                            </Table>
                                           </FormGroup>
                                    <Button outline color="danger">Save Details</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                   </Row>


                </Container>
            </div>
        );
    }
}

export default VacationFinder;
