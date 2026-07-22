let users = [];
let editIndex = -1;

function addOrUpdateUser() {
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let age = document.getElementById("age").value;
    let graduated = document.getElementById("graduated").checked;

    if (firstName == "" || lastName == "" || age == "") {
        alert("Please Fill All Fields");
        return;
    }

    let user = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        graduated: graduated
    };

    if (editIndex == -1) {
        users.push(user);
    } else {
        users[editIndex] = user;
        editIndex = -1;
        document.getElementById("addBtn").innerHTML = "Add User";
    }
    clearInputs();
    displayUsers(users);

}

function displayUsers(arr) {
    let cartona = "";
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <tr>
            <td>${arr[i].firstName}</td>
            <td>${arr[i].lastName}</td>
            <td>${arr[i].age}</td>
            <td>${arr[i].graduated ? "Yes" : "No"}</td>
            <td>
                <button class="updateBtn" onclick="updateUser(${users.indexOf(arr[i])})">
                    Update
                </button>
                <button class="deleteBtn" onclick="deleteUser(${users.indexOf(arr[i])})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    }
    document.getElementById("tbody").innerHTML = cartona;
}

function clearInputs() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("graduated").checked = false;
}

function deleteUser(index) {
    users.splice(index, 1);
    displayUsers(users);
}

function updateUser(index) {
    document.getElementById("firstName").value = users[index].firstName;
    document.getElementById("lastName").value = users[index].lastName;
    document.getElementById("age").value = users[index].age;
    document.getElementById("graduated").checked = users[index].graduated;
    editIndex = index;
    document.getElementById("addBtn").innerHTML = "Update User";

}

function searchUser() {
    let text = document.getElementById("search").value.toLowerCase();
    let filteredUsers = users.filter(function(user) {
        return (
            user.firstName.toLowerCase().includes(text) ||
            user.lastName.toLowerCase().includes(text)
        );
    });

    displayUsers(filteredUsers);

}
function filterGraduated() {
    let checked = document.getElementById("filterGraduate").checked;
    if (checked) {
        let result = users.filter(function (user) {

            return user.graduated == true;
        });
        displayUsers(result);
    } else {
        displayUsers(users);
    }


    
}