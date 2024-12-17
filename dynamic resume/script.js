// Listen for the button click event
document.getElementById('generate-btn').addEventListener('click', function() {
    // Collect values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Check if all fields are filled
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill out all required fields!");
        return;
    }

    // Parse skills into an array
    const skillArray = skills.split(',').map(skill => skill.trim());

    // Generate the resume content
    const resumeOutput = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <h2>Summary</h2>
        <p>${summary}</p>

        <h2>Education</h2>
        <p>${education}</p>

        <h2>Work Experience</h2>
        <p>${experience}</p>

        <h2>Skills</h2>
        <ul>
            ${skillArray.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;

    // Display the resume
    const outputDiv = document.getElementById('resume-output');
    outputDiv.innerHTML = resumeOutput;
    outputDiv.style.display = "block";
});
