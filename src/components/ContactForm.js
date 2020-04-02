import React, { Component } from "react";
import "../components/ContactForm.css";

export class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="container">
              <form>
                <label for="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />

                <label for="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                />

                <label for="subject">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "200px" }}
                ></textarea>

                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
