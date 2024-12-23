
document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const candidates = document.getElementsByName('candidate');
    let selectedCandidate = '';

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].checked) {
            selectedCandidate = candidates[i].value;
            break;
        }
    }

    if (selectedCandidate) {
        document.getElementById('result').innerText = `Thank you for voting for ${selectedCandidate}!`;
        // Here you can add code to send the vote to a server or store it
    } else {
        document.getElementById('result').innerText = 'Please select a candidate before voting.';
    }
});