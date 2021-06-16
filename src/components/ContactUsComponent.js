import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
      agree: false,
      contacType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
    console.log(name, "and ", value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    alert("Form submitted successfully");
  };

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters";
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
      errors.telnum = "Tel. Number should contain only numbers";

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.telNum,
      this.state.email
    );

    return (
      <div className="container">
        <div className="row">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Contact Us</h3>
              <hr />
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a
                role="button"
                className="btn btn-info"
                href="skype:example123?chat"
              >
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
            <div className="col-12 col-md-9">
              <Form>
                <FormGroup row>
                  <Label htmlFor="firstName" md={2}>
                    First Name:{" "}
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      valid={errors.firstname === ""}
                      invalid={errors.firstname !== ""}
                      onBlur={this.handleBlur("firstname")}
                      placeholder="First Name"
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.firstname}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastName" md={2}>
                    Last Name:{" "}
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      valid={errors.lastname === ""}
                      invalid={errors.lastname !== ""}
                      onBlur={this.handleBlur("lastname")}
                      placeholder="Last Name"
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.lastname}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="telNum" md={2}>
                    Tel Number:{" "}
                  </Label>
                  <Col md={10}>
                    <Input
                      type="tel"
                      id="telNum"
                      name="telNum"
                      valid={errors.telnum === ""}
                      invalid={errors.telnum !== ""}
                      onBlur={this.handleBlur("telnum")}
                      placeholder="Telephone Name"
                      value={this.state.telNum}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.telnum}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>
                    Email:{" "}
                  </Label>
                  <Col md={10}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your Email Id"
                      valid={errors.email === ""}
                      invalid={errors.email !== ""}
                      onBlur={this.handleBlur("email")}
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label>
                        <Input
                          type="checkbox"
                          id="agree"
                          name="agree"
                          value={this.state.agree}
                          onChange={this.handleInputChange}
                        />
                        May we contact you?
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 3, offset: 1 }}>
                    <Input
                      type="select"
                      name="contacType"
                      value={this.state.contacType}
                      onChange={this.handleInputChange}
                    >
                      <option>Tel. </option>
                      <option>Email</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="message" md={2}>
                    Your Feedback:{" "}
                  </Label>
                  <Col md={10}>
                    <Input
                      type="textarea"
                      id="message"
                      name="message"
                      rows="12"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button
                      type="submit"
                      color="primary"
                      onClick={this.handleSubmit}
                    >
                      Send Feedback
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
