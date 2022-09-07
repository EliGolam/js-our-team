// Initial Handshake
console.log('DEBUG - script.js: OK!');

// 2d Array of Team Members Data
const teamMembersData = [
    ['Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'],
    ['Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'],
    ['Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'],
    ['Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'],
    ['Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'],
    ['Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg']
]

// Array containing the Team Members
const team = [];


// FOR loop to create a TeamMember object for each 
// team member and add them to the team array
for(let member of teamMembersData) {
    team.push(new TeamMember(...member));
}



/* ****************************************************************** */
// Milestone 1: 
// Print on console the information of each team member
for(let member of team) {
    let person = `
        Team Member: ${member.name}
            Position: ${member.position}
            Photo: ${member.photo} 
    `
    console.log(person);
}



/* ****************************************************************** */
// Milestone 2: 
// Print the information on DOM

// Initialize DOM elements
const container = document.getElementById('test_team-members');


for(let member of team) {
    createCardDOM(member, container);
}