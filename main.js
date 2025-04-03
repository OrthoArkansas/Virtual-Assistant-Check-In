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

        // Initialize the Teams meeting with Direct Guest Join
        initializeTeamsDirectGuestJoin();
    });

    // When end call button is clicked
    endCallButton.addEventListener('click', function () {
        callScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');

        // End the Teams meeting
        endTeamsMeeting();
    });
});

// Function to initialize Teams meeting with Direct Guest Join
function initializeTeamsDirectGuestJoin() {
    // // Your organization's Teams meeting information
    // // You'll need to replace these values with your actual meeting details
    // const tenantId = "your-tenant-id";           // Your Microsoft 365 tenant ID
    // const meetingId = "your-meeting-id";         // The meeting ID for your PSR group
    // const threadId = "your-thread-id";           // The thread ID if applicable
    // const organizerId = "psr-organizer-id";      // The organizer's ID

    // // Construct the Teams Direct Guest Join URL
    // // This URL format is for Direct Guest Join
    // const teamsJoinUrl = `https://teams.microsoft.com/l/meetup-join/${threadId}@thread.v2/0?context={"Tid":"${tenantId}","Oid":"${organizerId}","lm":"0","p":"0"}`;

    // Alternative: If you already have a full meeting URL, you can use it directly
    const teamsJoinUrl = "";

    // Create an iframe for the Teams meeting
    const teamsFrame = document.createElement('iframe');
    teamsFrame.width = '100%';
    teamsFrame.height = '100%';
    teamsFrame.allow = 'microphone; camera; fullscreen; display-capture; autoplay';
    teamsFrame.src = teamsJoinUrl;

    // Add the iframe to the container
    const teamsContainer = document.getElementById('teams-meeting');
    teamsContainer.innerHTML = '';
    teamsContainer.appendChild(teamsFrame);
    teamsContainer.style.display = 'block';

    // Optional: You can add event listeners to detect when the meeting ends
    teamsFrame.onload = function () {
        console.log("Teams meeting iframe loaded");
    };
}

// Function to end Teams meeting
function endTeamsMeeting() {
    const teamsContainer = document.getElementById('teams-meeting');
    teamsContainer.innerHTML = '';
    teamsContainer.style.display = 'none';
}