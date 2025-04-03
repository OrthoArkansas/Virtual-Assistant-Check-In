
document.addEventListener('DOMContentLoaded', function () {
    const welcomeScreen = document.getElementById('welcome-screen');
    const callScreen = document.getElementById('call-screen');
    const startCallButton = document.getElementById('start-call');
    const endCallButton = document.getElementById('end-call');
    const teamsContainer = document.getElementById('teams-meeting');

    // When start call button is clicked
    startCallButton.addEventListener('click', function () {
        welcomeScreen.classList.add('hidden');
        callScreen.classList.remove('hidden');

        // Initialize the Teams meeting with the specific PSR group
        initializeTeamsMeeting('your-group-id-here');
    });

    // When end call button is clicked
    endCallButton.addEventListener('click', function () {
        callScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');

        // End the Teams meeting
        endTeamsMeeting();
    });
});

// Function to initialize Teams meeting
function initializeTeamsMeeting(groupId) {
    // Clear the teams container first
    const teamsContainer = document.getElementById('teams-meeting');
    teamsContainer.innerHTML = '';

    // Create an iframe for the Teams meeting
    const teamsFrame = document.createElement('iframe');
    teamsFrame.width = '100%';
    teamsFrame.height = '100%';
    teamsFrame.allow = 'microphone; camera; fullscreen; display-capture';

    // Set the source URL for the Teams meeting
    // This URL format may vary based on your Teams setup
    teamsFrame.src = `https://teams.microsoft.com/l/meetup-join/meeting_${groupId}`;

    // Add the iframe to the container
    teamsContainer.appendChild(teamsFrame);
    teamsContainer.style.display = 'block';
}

// Function to end Teams meeting
function endTeamsMeeting() {
    const teamsContainer = document.getElementById('teams-meeting');
    teamsContainer.innerHTML = '';
    teamsContainer.style.display = 'none';
}