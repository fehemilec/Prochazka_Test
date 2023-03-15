import React from "react";
import "../../App.css";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="cont-div">
      <h1 className="contact">Kontakt</h1>
      <div className="contact-form">
        <form action="/action_page.js">
          <label for="fname">Křestní jméno</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Křestní jméno"
          />

          <label for="lname">Příjmení</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Příjmení"
          />

          <label for="email">E-mail</label>
          <input type="text" id="email" name="lastname" placeholder="E-mail" />

          <label for="message">Zpráva</label>
          <textarea
            id="message"
            name="lastname"
            placeholder="Zde popište svůj požadavek"
          ></textarea>

          <button type="submit" value="Submit">
            Předložit
          </button>
        </form>
      </div>
    </div>
  );
}
