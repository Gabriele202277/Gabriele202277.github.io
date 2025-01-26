// fetchSnippet.js

/**
 * Fetches a Python file and displays a code snippet with syntax highlighting.
 * @param {string} filePath - The path to the Python file.
 * @param {number} startLine - The line number to start (1-based).
 * @param {number} endLine - The line number to end (inclusive, 1-based).
 * @param {string} targetElementId - The ID of the HTML element to display the snippet in.
 */

function fetchAndDisplaySnippet(filePath, startLine, endLine, targetElementId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not fetch file: ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            // Split the file into lines
            const lines = data.split('\n');

            // Extract the specified lines (convert to 0-based for JavaScript slicing)
            const snippet = lines.slice(startLine - 1, endLine).join('\n');

            // Set the snippet into the target HTML element
            const targetElement = document.getElementById(targetElementId);
            if (targetElement) {
                targetElement.textContent = snippet;

                // Highlight the code using Prism.js
                Prism.highlightElement(targetElement);
            } else {
                console.error(`Element with ID "${targetElementId}" not found.`);
            }
        })
        .catch(error => console.error('Error:', error));
}
