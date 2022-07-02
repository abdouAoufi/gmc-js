const title = document.getElementById("title");
const list = document.getElementById("student-list");

// ! ASYNC REQUEST

const responseCallback = (response) => {
    console.log("Response arrived from the server", response.status);
};

const responseError = (error) => {
    console.log("Response arrived from the server", error);
};
const server = "https://reqq-ress.herokuapp.com/fetch";

fetch(server)
    .then((response) => {
        response.json().then((data) => {
            title.innerText = data.message;
            const ul = document.createElement("ul");
            data.students.forEach((student) => {
                const li = document.createElement("li");
                li.innerText = student.toUpperCase();
                ul.appendChild(li);
            });
            list.append(ul);
        });
    })
    .catch(responseError);