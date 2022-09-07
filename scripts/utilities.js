// Initial Handshake
console.log('DEBUG - utilities.js: OK!');

// Team Member Object constructor 
class TeamMember {
    constructor(name, position, photo) {
        this.name = name;
        this.position = position;
        this.photo = photo;
    }
}


// Function: Create card in DOM
function createCardDOM(member, container) {
    // Create a card for each member
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-4'); 

    // Create the container for the DOM elements
    for (let property in member) {
        switch (property) {
            case 'name': {
                card.prepend(addCardElement(member[property], 'h2'));
                break;
            }
            case 'photo': {
                card.append(addCardElement(member[property], 'img', member.name));
                break;
            }
            default: {
                card.append(addCardElement(member[property], 'p'));
                break;
            }
        }
    }

    // Append the card to the container
    container.append(card);
}


// Function: Add Elements in Card
function addCardElement(content, elementType, imgAlt) {
    const element = document.createElement(elementType);
    if (elementType === 'img') {
        const elementClass = ['team-card_img', 'img-fluid'];
        // When it's an image we also add the img alt property for accessibility
        element.classList.add(...elementClass);
        element.src = `./assets/img/${content}`;
        element.alt = `photo of ${imgAlt}`;
    } else {
        element.classList.add('text-center');
        element.textContent = content;
    }
    return element;
}