let total = 0;
function addToTotal(value) {
    total += value;
}

function fetchData(url) {
    return fetch(url); // I/O operation
}

// Impure function example: Saving user preferences to local storage
function saveUserPreferences(preferences) {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

// Example usage:
const userPreferences = {
    theme: 'dark',
    language: 'en',
    notifications: true
};

// Save user preferences
console.log(saveUserPreferences(userPreferences));
