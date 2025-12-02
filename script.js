function updateProfile() {
document.getElementById("displayName").textContent = document.getElementById("name").value;
document.getElementById("displayAddress").textContent = document.getElementById("address").value;
document.getElementById("displayGender").textContent = document.getElementById("gender").value;
document.getElementById("displayGrade").textContent = document.getElementById("grade").value;


const hobbyText = document.getElementById("hobbies").value;
const hobbies = hobbyText.split(',').map(h => h.trim());


const hobbyList = document.getElementById("hobbyList");
hobbyList.innerHTML = "";


hobbies.forEach(hobby => {
const li = document.createElement("li");
li.textContent = hobby;
hobbyList.appendChild(li);
});


alert("Profile updated!");
