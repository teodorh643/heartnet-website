// Assuming you have a simple logout functionality and user details

const logoutButton = document.getElementById('logout');
const loggedUserFName = document.getElementById('loggedUserFName');
const loggedUserLName = document.getElementById('loggedUserLName');
const loggedUserEmail = document.getElementById('loggedUserEmail');

// Check if the user is logged in by getting their ID from localStorage
const loggedInUserId = localStorage.getItem('loggedInUserId');

if (loggedInUserId) {
    // Normally, you'd fetch the user data from your database here, but let's use mock data for now
    // Replace this with actual fetching logic from your database (e.g., Firebase or your backend)
    loggedUserFName.innerText = "John"; // Mock first name
    loggedUserLName.innerText = "Doe"; // Mock last name
    loggedUserEmail.innerText = "john.doe@example.com"; // Mock email
} else {
    console.log("No user is logged in.");
    // Optionally redirect to login page if no user is logged in
    window.location.href = 'index.html';
}

// Logout functionality
logoutButton.addEventListener('click', () => {
    // Clear the user from localStorage (or your session data)
    localStorage.removeItem('loggedInUserId');
    
    // Redirect the user to the login page (index.html)
    window.location.href = 'index.html';
});
