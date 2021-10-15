
document.addEventListener('DOMContentLoaded', function(){
    console.log('the dom had loaded')
    let page = 1;
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${page}`)
    .then(result=>result.json())
    .then(result=>{result.forEach(monster=>renderMonsters(monster))})
    .then(addMonster)

    function renderMonsters(data){
        const container = document.getElementById('monster-container')
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const li1 = document.createElement('li')
        const h3 = document.createElement('h3')
        li.innerHTML = data.age;
        li1.innerHTML = data.description;
        h3.innerHTML = data.name;
        container.appendChild(ul);
        ul.appendChild(h3);
        ul.appendChild(li);
        ul.appendChild(li1);
        
    }
    function addMonster(){
        //create form
        const addMonster = document.querySelector('#create-monster');
        const monsterForm = document.createElement('form');
        addMonster.appendChild(monsterForm);
        //create button
        const button = document.createElement('button');
        button.innerHTML = 'Add Monster';
        monsterForm.appendChild(button)
        //create name input
        const name = document.createElement('input');
        name.id = 'name'
        name.placeholder = 'Name'
        monsterForm.appendChild(name);
        //create age input
        const age = document.createElement('input');
        age.id = 'age'
        age.placeholder = 'Age';
        monsterForm.appendChild(age);
        //create description input
        const descrip = document.createElement('input');
        descrip.id = 'descrip'
        descrip.placeholder = 'Monster Description';
        monsterForm.appendChild(descrip);
    }
    //addMonster();
    const addMonsters = document.querySelector('#create-monster')
    addMonsters.addEventListener('click', (event)=>{
        event.preventDefault();
        let name = document.getElementById('name');
        let age = document.getElementById('age');
        let description = document.getElementById('descrip');

        fetch(`http://localhost:3000/monsters`, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
                },
            body:JSON.stringify({ 
                name, 
                age, 
                description})
    })
    .then(data=>{
        console.log(data);
    })
    
     })
    const forward =  document.getElementById('forward');
    forward.addEventListener('click', (event)=>{
        //event.preventDefault();
        //document.querySelector('#monster-container').reset();
        fetch(`http://localhost:3000/monsters/?_limit=50&_page=${page+1}`)
        .then(result=>result.json())
        .then(result=>{result.forEach(monster=>renderMonsters(monster))})
        

    })
    })