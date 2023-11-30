let data = [];

function submit() {
  let username = document.getElementById("Name").value;
  let usermessage = document.getElementById("Message").value;
  let innerdata = {
    name: username,
    message: usermessage,
    child: [],
  };
  data.push(innerdata);
  showans();
}

function showans() {
  let ans = document.getElementById("ans");
  ans.innerHTML = "";
  for (let index = 0; index < data.length; index++) {
    console.log(data[index]);
    let ansdiv = document.createElement("div");
    ansdiv.id = `ansdiv${index}`;
    ans.appendChild(ansdiv);
    let Uname = document.createElement("p");
    Uname.id = `Uname${index}`;
    Uname.innerHTML = "Name :" + data[index].name;
    ansdiv.appendChild(Uname);
    let Umessage = document.createElement("p");
    Umessage.id = `Umessage${index}`;
    Umessage.innerHTML = "Message :" + data[index].message;
    ansdiv.appendChild(Umessage);
    let replybtn = document.createElement("button");
    replybtn.id = `replybtn${index}`;
    replybtn.innerHTML = "Reply";
    ansdiv.appendChild(replybtn);
    replybtn.addEventListener("click", replyfunc);
    let childreply = data[index].child[index];
    // let replymessage = document.createElement("p");
    // replymessage.id = `replymessage${index}`;
    // ansdiv.appendChild(replymessage);
    if (data[index].child.length > 0) {
      for (let i = 0; i < data[index].child.length; i++) {
        let replymessage = document.createElement("p");
        replymessage.id = `replymessage${index}`;
        ansdiv.appendChild(replymessage);
        replymessage.innerHTML =
          "&nbsp &nbsp &nbsp  reply :" + data[index].child[i];
        ansdiv.appendChild(replymessage);
        // let nreplybtn = document.createElement("button");
        // nreplybtn.id = `nreplybtn${i}`;
        // nreplybtn.innerHTML = "Reply";
        // ansdiv.appendChild(nreplybtn);
      }
    }
  }
}

function replyfunc(e) {
  console.log(e.target.id);
  let id = e.target.id.slice(8);
  console.log(id);
  let ansdiv = document.getElementById(`ansdiv${id}`);
  let replyinput = document.createElement("input");
  replyinput.id = `replyinput${id}`;
  replyinput.setAttribute("type", "text");
  ansdiv.appendChild(replyinput);
  let submitbtn = document.createElement("button");
  submitbtn.id = `submitbtn${id}`;
  submitbtn.innerHTML = "submit";
  submitbtn.addEventListener("click", submitfunc);
  ansdiv.appendChild(submitbtn);
}
function submitfunc(u) {
  let id = u.target.id.slice(9);
  let currentinput = document.getElementById(`replyinput${id}`);
  let currentinputvalue = currentinput.value;
  currentinput.style.display = "none";
  let replybtnremove = document.getElementById(`replybtn${id}`);
  replybtnremove.style.display = "none";
  let submitbtnremove = document.getElementById(`submitbtn${id}`);
  data[id].child.push(currentinputvalue);
  submitbtnremove.style.display = "none";
  // let Umessage = document.createElement("p");
  // Umessage.id = `Umessage${id}`;

  // Umessage.innerHTML = "Message :" + data[id].child[id];
  // let ansdiv = document.getElementById(`ansdiv${id}`);
  // ansdiv.appendChild(Umessage);
  showans();
}
