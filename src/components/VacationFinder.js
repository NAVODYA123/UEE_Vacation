import React from "react";
import { Card, CardHeader, CardBody,CardTitle, CardSubtitle,CardImg, CardText, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Radio,Table,Jumbotron } from "reactstrap";
import{InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import{Container } from "reactstrap";

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
                                    <Form><FormGroup>
                                        <Label for="arrivaldate">Arrival Date</Label>
                                        <InputGroup>
                                            <Input type="date">Arrival Date</Input>
                                            <InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>

                                        <FormGroup>
                                            <Label for="deaparturedate">Departure Date</Label>
                                            <InputGroup>
                                                <Input type="date">Departure Date</Input>
                                                <InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup inline>
                                            <Label for="arrivaldate">Vacation period</Label>
                                            <InputGroup>
                                                <Input type="text"></Input>
                                                <InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
                                            </InputGroup>
                                            <Label for="Days">Days</Label>
                                            <InputGroup>
                                                <Input type="text"></Input>
                                                <InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
                                            </InputGroup>
                                            <Label for="Days">Months</Label>
                                            <InputGroup>
                                                <Input type="text"></Input>
                                                <InputGroupAddon addonType="append"><InputGroupText>To the Right!</InputGroupText></InputGroupAddon>
                                            </InputGroup>
                                            <Label for="Days">Destination</Label>
                                            <Input type="select"></Input>

                                        </FormGroup>


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
