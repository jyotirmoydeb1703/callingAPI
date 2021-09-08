const api_url = "https://jsonplaceholder.typicode.com/users";

async function getApiData(url) {

    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);

}

getApiData(api_url)

function show(data) {
    let tab =  `<tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USER NAME</th>
                <th>EMAIL</th>
                </tr>`;
       

    for (let r of data) {
        tab += `<tr> 
                <td>${r.id} </td>
                <td>${r.name}</td>
                <td>${r.username}</td> 
                <td>${r.email}</td>          
                </tr>`;
    }

    document.getElementById("employees").innerHTML = tab;
}  