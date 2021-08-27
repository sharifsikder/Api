const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}

loadBuddies()
const displayBuddies = itemes => {


const items = itemes.results;

const buddyesDiv = document.getElementById('buddyes')
for(const item of items){

    const p = document.createElement('p');
    p.innerText = `Name :${item.name.title} ${item.name.first} ${item.name.last} Email : ${item.email}`
    buddyesDiv.appendChild(p)
}
}

