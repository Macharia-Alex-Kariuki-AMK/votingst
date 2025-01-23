

// Fetch candidates data from backend (simulated for now)
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes("presiding")) {
        loadCandidates();
    }
});

function loadCandidates() {
    // Simulated candidates data (this will be replaced with actual data from backend)
    const candidates = [
        {
            name: "John Doe",
            seat: "School President",
            admissionNumber: "123456",
            photo: "img/john_doe.jpg" // Replace with the correct path
        },
        {
            name: "Jane Smith",
            seat: "Finance CS",
            admissionNumber: "789012",
            photo: "img/jane_smith.jpg" // Replace with the correct path
        }
    ];

    const candidatesList = document.getElementById('candidatesList');
    candidatesList.innerHTML = ''; // Clear any existing data

    candidates.forEach(candidate => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${candidate.photo}" alt="${candidate.name}" width="100" height="100">
            <p><strong>Name:</strong> ${candidate.name}</p>
            <p><strong>Seat:</strong> ${candidate.seat}</p>
            <p><strong>Admission Number:</strong> ${candidate.admissionNumber}</p>
        `;
        candidatesList.appendChild(li);
    });
}

// Handle form submission for candidate registration
document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting to a server

    const name = document.getElementById('name').value;
    const admissionNumber = document.getElementById('admissionNumber').value;
    const seat = document.getElementById('seat').value;
    const photo = document.getElementById('photo').files[0];

    if (name && admissionNumber && seat && photo) {
        alert("Candidate registered successfully!");
        // You would send this data to the backend via an API in a real scenario.
    } else {
        alert("Please fill in all fields and upload a photo.");
    }
});
