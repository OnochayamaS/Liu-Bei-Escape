        
function sendemail(){

    let topic = document.getElementById("topic").value;
    let detail = document.getElementById("detail").value;
    let email = document.getElementById("email").value;
    let messageemail = "";
    
    messageemail = "Details " + detail + " From " + email;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "27388@tpn.ac.th",
        Password : "9480DE3C9BDFEA2F45055123200EF0F0BB67",
        To : '27388@tpn.ac.th',
        From : '27388@tpn.ac.th',
        Subject : topic,
        Body : messageemail,
    }).then(
      message => alert(message)
    );

};