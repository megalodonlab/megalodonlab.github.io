const UI_SELECTORS = {
    form :            document.querySelector("#contact_form"),
    input_name :      document.querySelector("#contact_name"),
    input_email :     document.querySelector("#contact_email"),
    input_subject :   document.querySelector("#contact_subject"),
    input_message :   document.querySelector("#contact_message"),
}




UI_SELECTORS.form.addEventListener("submit", handleSubmit);


function handleSubmit(e) {
    e.preventDefault();

    const name    = UI_SELECTORS.input_name.value.trim();
    const email   = UI_SELECTORS.input_email.value.trim();
    const subject = UI_SELECTORS.input_subject.value.trim();
    const message = UI_SELECTORS.input_message.value.trim();

    if ( name == "" || email == "" || subject == "" || message == "" || !email.includes("@") )
        return;
    
    if ( Email )
        Email.send({
            Host : "smtp.gmail.com",
            Username : "jashangill3591@gmail.com",
            Password : "hzikeebegrpcgzqg",
            To : "jashangill3591@gmail.com",
            From : email,
            Subject : subject,
            Body : message
        })
        .then( message => {
            if (message == "OK"){
                clearInputs();
                alert("The email was successfully sent"); 
            }
            else 
                alert("Error: " + message );
        });
}

function clearInputs() {
    UI_SELECTORS.input_name.value = "";
    UI_SELECTORS.input_email.value = "";
    UI_SELECTORS.input_subject.value = "";
    UI_SELECTORS.input_message.value = "";
}