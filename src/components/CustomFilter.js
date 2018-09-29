import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody,CardTitle, CardSubtitle,CardImg, CardText, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Radio,Table,Jumbotron } from "reactstrap";
import{InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import{Container } from "reactstrap";
import StarRating from "./StarRating";

class CustomFilter extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col >
                            <Card>
                                <CardHeader tag="h4">Custom Filter</CardHeader>
                                <CardBody>
                                    <Form>
                                        <Table borderless>
                                            <tr><td><Label for="cPrice">Compare by Price</Label></td>
                                                <td><Input type="checkbox" class="form-control"></Input></td>
                                            </tr>
                                            <tr><Label for="kids">Enter Budget range</Label></tr>
                                        </Table>
                                            <Table>
                                            <tr>
                                                <td> <Label for="adults">Min</Label></td>
                                                <td> <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>$</InputGroupText>
                                                        <Input type="number" class="form-control"></Input>
                                                    </InputGroupAddon>
                                                </InputGroup></td>
                                                <td> <Label for="kids">Max</Label></td>
                                                <td> <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>$</InputGroupText>
                                                        <Input type="number" class="form-control"></Input>
                                                    </InputGroupAddon>
                                                </InputGroup></td>
                                            </tr>
                                            </Table>
                                        <Table>
                                            <tr><td><Label for="cRating">Compare by Rating</Label></td>
                                                <td><Input type="checkbox" class="form-control"></Input></td>
                                            </tr>
                                        </Table>
                                        <div><StarRating/></div>
                                        <Button outline color="danger">Search</Button>
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

export default CustomFilter;
