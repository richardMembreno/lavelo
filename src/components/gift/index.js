import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

class Gift extends Component {
  state = {
    name: '',
    email: '',
    rsvp: '',
    error: {}
}

changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = ''

    this.setState({
        [e.target.name]: e.target.value,
        error
    })
}

subimtHandler = (e) => {
    e.preventDefault();

    const { name,
        email,
        rsvp, error } = this.state;

    if (name === '') {
        error.name = "Please enter your name";
    }
    if (email === '') {
        error.email = "Please enter your email";
    }
    if (rsvp === '') {
        error.rsvp = "Select your number of rsvp";
    }

    if (error) {
        this.setState({
            error
        })
    }
    if (error.name === '' && error.email === '' && error.email === '' && error.rsvp === '') {
        this.setState({
            name: '',
            email: '',
            rsvp: '',
            error: {}
        })
    }

    console.log(this.state);
    console.log(this.state.error.notes);
}

render() {

    const { name,email,rsvp, error } = this.state;
      return (
        <div id="rsvp" class="rsvp-area">
          <div className="gift-area">
              <div className="container">
              <div className="row mb-3">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 mb-5">
                            <div className="rsvp-wrap">
                                <div className="col-12">
                                    <div className="section-title section-title4 text-center">
                                        <h2>Invitación</h2>
                                        <p>Confirmar asistencia</p>
                                    </div>
                                </div>
                                <form onSubmit={this.subimtHandler}>
                                    <div className="contact-form form-style">
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" value={name} onChange={this.changeHandler} placeholder="Nombre*" id="fname" name="name" />
                                                <p>{error.name ? error.name : ''}</p>
                                            </div>
                                            <div className="col-12  col-sm-6">
                                                <input type="text" placeholder="Correo*" onChange={this.changeHandler} value={email} id="email" name="email" />
                                                <p>{error.email ? error.email : ''}</p>
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <textarea className="contact-textarea" value={rsvp} onChange={this.changeHandler} placeholder="Mensaje" name="notes"></textarea>
                                                <p>{error.rsvp ? error.rsvp : ''}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button id="submit" type="submit" className="submit">Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
        </div>
      );
    }
  }

export default Gift;