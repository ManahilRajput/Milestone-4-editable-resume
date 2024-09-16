var _a;
var isEditable = false; // Track edit mode
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent form refresh
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Profile picture
    var picFile = (_a = document.getElementById('pic').files) === null || _a === void 0 ? void 0 : _a[0];
    var picURL = '';
    if (picFile) {
        picURL = URL.createObjectURL(picFile);
    }
    // Generate the resume HTML with editable fields
    var resumeHTML = "\n        <div class=\"resume-container\">\n            <div class=\"left-section\">\n                <img src=\"".concat(picURL, "\" alt=\"Profile Picture\" class=\"profile-pic\" id=\"profilePic\"/>\n                <h2 contenteditable=\"false\" id=\"nameDisplay\">").concat(name, "</h2>\n                <p><strong>Email:</strong> <span contenteditable=\"false\" id=\"emailDisplay\">").concat(email, "</span></p>\n                <p><strong>Phone:</strong> <span contenteditable=\"false\" id=\"numberDisplay\">").concat(number, "</span></p>\n                <p><strong>Address:</strong> <span contenteditable=\"false\" id=\"addressDisplay\">").concat(address, "</span></p>\n            </div>\n            <div class=\"right-section\">\n                <h3>Education</h3>\n                <p contenteditable=\"false\" id=\"educationDisplay\">").concat(education, "</p>\n                <h3>Work Experience</h3>\n                <p contenteditable=\"false\" id=\"experienceDisplay\">").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p contenteditable=\"false\" id=\"skillsDisplay\">").concat(skills, "</p>\n            </div>\n        </div>\n        <button id=\"editResumeButton\">Edit Resume</button>\n    ");
    var resumeContainer = document.getElementById('generatedResume');
    resumeContainer.innerHTML = resumeHTML;
    // Add event listener to toggle edit mode
    var editButton = document.getElementById('editResumeButton');
    editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener('click', toggleEditMode);
});
// Function to toggle between "edit" and "view" mode
function toggleEditMode() {
    isEditable = !isEditable;
    // List of elements to toggle
    var elementsToEdit = [
        'nameDisplay', 'emailDisplay', 'numberDisplay', 'addressDisplay',
        'educationDisplay', 'experienceDisplay', 'skillsDisplay'
    ];
    elementsToEdit.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.setAttribute('contenteditable', isEditable.toString());
            element.style.border = isEditable ? '1px dashed #ccc' : 'none'; // Visual indicator
        }
    });
    // Update the button text based on the current mode
    var editButton = document.getElementById('editResumeButton');
    editButton.textContent = isEditable ? 'Save Changes' : 'Edit Resume';
}
