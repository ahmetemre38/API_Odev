//let selectUsers = document.createElement('select');
//selectUsers.name = "selectUsers";
//selectUsers.id = "selectUsers";
//document.body.appendChild(selectUsers);
let selectUsers = document.getElementById("selectUsers"); 
const usersInfo = axios.get('https://jsonplaceholder.typicode.com/users/');
usersInfo.then(response => {
    //console.log(response.data);
    let users = response.data;   
    users.forEach(user => {
        let selectOption = document.createElement('option');
        selectOption.value = user.id;
        selectOption.text = user.id + ' ' + user.name;
        selectUsers.appendChild(selectOption);         
    });
});

selectUsers.addEventListener('change', (event) => {
    
    tblTask.childNodes.forEach(child =>{
        tblTask.removeChild(child);
    });

    const taskInfo = axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${event.target.value}`);
    taskInfo.then(resTask => {
        console.log(resTask.data);
        let tasks = resTask.data; 
        tasks.forEach(task => {
            let tr = document.createElement('tr');
            tr.Id = task.id;
            let tdId = document.createElement('td');
            tdId.innerText = task.id;
            tr.appendChild(tdId);
            let tdTitle= document.createElement('td');
            tdTitle.innerText = task.title;
            tr.appendChild(tdTitle);
            let tdComp= document.createElement('td');
            tdComp.innerText = task.completed;
            tr.appendChild(tdComp);
            tblTask.appendChild(tr);
        });    
    });
});





