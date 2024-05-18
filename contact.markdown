---
layout: page
title: Contact
permalink: /contact/
---
<form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xvoeyjdo" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Votre nom complet</label>
    <input type="text" name="name" id="full-name">
    <label for="email-address">Votre adresse Email</label>
    <input type="email" name="_replyto" id="email-address" required="">
    <label for="message">Votre Message</label>
    <textarea rows="5" name="message" id="message" required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <input type="submit" value="Envoyer">
</form>
<style>
#fs-frm input,
#fs-frm textarea,
#fs-frm fieldset,
#fs-frm optgroup,
#fs-frm label,
#fs-frm legend,
#fs-frm ::placeholder {
  font-size: .825rem;
  margin-bottom: .5rem;
  padding-top: .2rem;
  display: flex;
  align-items: baseline;
}
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm #card-element {
border: 1px solid rgba(0,0,0,0.2);
background-color: rgba(255,255,255,0.9);
padding: .75em 1rem;
margin-bottom: 1.5rem;
}
#fs-frm input:focus,
#fs-frm select:focus,
#fs-frm textarea:focus {
background-color: white;
outline-style: solid;
outline-width: thin;
outline-color: gray;
outline-offset: -1px;
}
#fs-frm [type="text"],
#fs-frm [type="email"] {
width: 100%;
}
#fs-frm [type="button"],
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
width: auto;
cursor: pointer;
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
}
#fs-frm [type="button"]:focus,
#fs-frm [type="submit"]:focus,
#fs-frm [type="reset"]:focus {
outline: none;
}
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
margin-bottom: 0;
}
</style>




