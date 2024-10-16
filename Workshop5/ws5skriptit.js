 // Exercise 1
        // Tsekkaa lomakkeen tiedot ja palauttaa alertilla tiedot 
        // jos tiedot ok palauttaa email osoitteen muutoin ilmoittaa virheestä
       

        function validateForm(event) {
            event.preventDefault(); // Estää lomakkeen lähettämisen

            var email = document.getElementsByName("email")[0].value;
            var comment = document.getElementsByName("comment")[0].value.trim();
            var isValid = true;

            // Virheviestit
            document.getElementById("emailError").innerText = "";
            document.getElementById("commentError").innerText = "";
            document.getElementsByName("email")[0].style.borderColor = "";
            document.getElementsByName("comment")[0].style.borderColor = "";
    
            if (email.length < 6 || email.length > 15 || email.indexOf("@") == -1) {
                document.getElementsByName("email")[0].style.borderColor = "red";
                document.getElementById("emailError").innerText = "Email address is invalid";   
                isValid = false;
            }
            if (comment.length == 0 || comment.length > 50) {
                document.getElementsByName("comment")[0].style.borderColor = "red";
                document.getElementById("commentError").innerText = "Comment is invalid";
                isValid = false;
            }      
            if (isValid) {
                alert("Email: " + email + "\nComment: " + comment);
        } 
    }

    // Exercise 2
    // Laskee jäsenyyden hinnan ja ilmoittaa mahdollisista alennuksista
    function calculateMembershipCost() {
        var type = document.getElementById("type").value;
        var years = parseInt(document.getElementById("years").value);
        var costPerYear = 0;

        switch (type) {
            case "basic":
                costPerYear = 10;
                break;
            case "premium":
                costPerYear = 15;
                break;
            case "gold":
                costPerYear = 20;
                break;
            case "platinum":
                costPerYear = 25;
                break;
        }

        var totalCost = costPerYear * years;
        var discountMessage = "";

        if (years > 1) {
            totalCost *= 0.8;  // 20% alennus
            discountMessage = "You get a 20% discount!";
        }
        if (years >= 5) {
            totalCost -= 5; // 5€ extra alennus
            discountMessage += " You get an extra 5€ discount!";
            alert("Olet spesiaaliasiakas, katso alennuksesi :)!");
        }
        
        document.getElementById("cost").value = totalCost.toFixed(2);
        document.getElementById("discountMessage").innerText = discountMessage;
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("submit").addEventListener("click", function(event) {;
            event.preventDefault();
            calculateMembershipCost();
        });
    });

    // Exercise 3
    // Laskee kirjojen hinnan ja ilmoittaa mahdollisista alennuksista
    function calculate() {
        var quantity = parseInt(document.getElementById("quantity").value);
        var price = parseFloat(document.getElementById("price").value);
        var tax = parseFloat(document.getElementById("tax").value);
        var discount = parseFloat(document.getElementById("discount").value);
        var shipping = parseFloat(document.getElementById("shipping").value);

        if (quantity > 100) {
            discount *= 2;
        }

        var total = quantity * price * (1 + tax / 100) * (1 - discount / 100) + shipping;

        document.getElementById("total").value = total.toFixed(2);
    }

    // Exercise 4
    // Näyttää piilotetut kentät valinnan mukaan
    function showContactDetailField() {
            const contactMethod = document.getElementById('contactMethod').value;
            const emailField = document.getElementById('emailField');
            const phoneField = document.getElementById('phoneField');
            const smsField = document.getElementById('smsField');

            // Piilota kaikki kentät ensin
            emailField.style.display = 'none';
            phoneField.style.display = 'none';
            smsField.style.display = 'none';

            // Näytä valitun yhteydenottotavan kenttä
            if (contactMethod === 'email') {
                emailField.style.display = 'block';
            } else if (contactMethod === 'phone') {
                phoneField.style.display = 'block';
            } else if (contactMethod === 'sms') {
                smsField.style.display = 'block';
            }
        }

        