const loadUser = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}


const displayUser = (users) =>{
    const divContainer = document.getElementById('loadUser');
    for(const user of users){
        const userdiv = document.createElement('div');
        console.log(user)
        userdiv.classList.add('user-class');
        userdiv.innerHTML = `
        <img src="${user.picture.large}" alt="">
        <h2>Name : ${user.name.title}. ${user.name.first} ${user.name.last}</h2>
        <p>Email : ${user.email}</P>
        <P>Location : ${user.location.city}, ${user.location.country}</p>
        
        `;
        divContainer.appendChild(userdiv);
    }
}
loadUser();