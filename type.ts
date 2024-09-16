let isEditable = false; // Track edit mode

document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
    event.preventDefault(); // Prevent form refresh

    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const number = (document.getElementById('number') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Profile picture
    const picFile = (document.getElementById('pic') as HTMLInputElement).files?.[0];
    let picURL = '';
    if (picFile) {
        picURL = URL.createObjectURL(picFile);
    }

    // Generate the resume HTML with editable fields
    const resumeHTML = `
        <div class="resume-container">
            <div class="left-section">
                <img src="${picURL}" alt="Profile Picture" class="profile-pic" id="profilePic"/>
                <h2 contenteditable="false" id="nameDisplay">${name}</h2>
                <p><strong>Email:</strong> <span contenteditable="false" id="emailDisplay">${email}</span></p>
                <p><strong>Phone:</strong> <span contenteditable="false" id="numberDisplay">${number}</span></p>
                <p><strong>Address:</strong> <span contenteditable="false" id="addressDisplay">${address}</span></p>
            </div>
            <div class="right-section">
                <h3>Education</h3>
                <p contenteditable="false" id="educationDisplay">${education}</p>
                <h3>Work Experience</h3>
                <p contenteditable="false" id="experienceDisplay">${experience}</p>
                <h3>Skills</h3>
                <p contenteditable="false" id="skillsDisplay">${skills}</p>
            </div>
        </div>
        <button id="editResumeButton">Edit Resume</button>
    `;

    const resumeContainer = document.getElementById('generatedResume') as HTMLDivElement;
    resumeContainer.innerHTML = resumeHTML;

    // Add event listener to toggle edit mode
    const editButton = document.getElementById('editResumeButton');
    editButton?.addEventListener('click', toggleEditMode);
});

// Function to toggle between "edit" and "view" mode
function toggleEditMode() {
    isEditable = !isEditable;

    // List of elements to toggle
    const elementsToEdit = [
        'nameDisplay', 'emailDisplay', 'numberDisplay', 'addressDisplay',
        'educationDisplay', 'experienceDisplay', 'skillsDisplay'
    ];

    elementsToEdit.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.setAttribute('contenteditable', isEditable.toString());
            element.style.border = isEditable ? '1px dashed #ccc' : 'none'; // Visual indicator
        }
    });

    // Update the button text based on the current mode
    const editButton = document.getElementById('editResumeButton') as HTMLButtonElement;
    editButton.textContent = isEditable ? 'Save Changes' : 'Edit Resume';
}
