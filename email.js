function sendMail() {
  var parms = {
    email: document.getElementById("email").value,
  };
  const serviceID = "service_8crh1dk";
  const templateID = "template_aj7q42e";

  emailjs
    .send(serviceID, templateID, parms)
    .then((res) => {
      document.getElementById("email").value = "";
      console.log(res);
      alert("Thank You For subscribing!");
    })

    .catch((err) => console.log(err));
}
