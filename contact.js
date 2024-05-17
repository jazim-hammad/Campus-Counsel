function sendMessage() {
  var parms = {
    first: document.getElementById("first").value,
    last: document.getElementById("last").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_1l7tefi";
  const templateID = "template_ibhik63";

  emailjs
    .send(serviceID, templateID, parms)
    .then((res) => {
      document.getElementById("first").value = "";
      document.getElementById("last").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Message Sent!");
    })

    .catch((err) => console.log(err));
}
