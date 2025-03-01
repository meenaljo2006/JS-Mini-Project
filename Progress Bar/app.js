document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const inputs = form.querySelectorAll("input");
    const progressBar = document.getElementById("progressBar");
    const progressRing = document.getElementById("progressRing");
    const progressText = document.getElementById("progressText");
    const circumference = 2 * Math.PI * 50;

    function updateProgress() {
        let filledFields = 0;
        inputs.forEach(input => {
            if (input.value.trim() !== "") {
                filledFields++;
            }
        });

        const progress = (filledFields / inputs.length) * 100;
        
        // Update Linear Progress Bar
        progressBar.style.width = progress + "%";
        progressBar.textContent = Math.round(progress) + "%";

        // Update Circular Progress Bar
        const offset = circumference - (progress / 100) * circumference;
        progressRing.style.strokeDashoffset = offset;
        progressText.textContent = Math.round(progress) + "%";
    }

    inputs.forEach(input => {
        input.addEventListener("input", updateProgress);
    });

    let btn = document.querySelector("button");

    btn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents form submission (if inside a form)

        let name = document.querySelector("#name").value;
        let address = document.querySelector("#address").value;
        let email = document.querySelector("#email").value;
        let phoneNumber = document.querySelector("#phone").value;

        form.innerHTML = `<h3>SUBMITTED INFORMATION</h3>
                            <p>Name: ${name}</p>
                            <p>Address: ${address}</p>
                            <p>Email: ${email}</p>
                            <p>Phone Number: ${phoneNumber}</p>`;
                    
        form.innerHTML.style.textAlign = "left";
        
    });

});
