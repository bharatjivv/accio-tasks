document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); 

    const form = event.target;
    const firstName = form["First Name"].value;
    const lastName = form["Last Name"].value;
    const phoneNumber = form["Phone Number"].value;
    const emailId = form["Email ID"].value;

    alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`);
};


