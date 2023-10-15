let form = document.querySelector(".my-form");
let form_response=document.querySelector("#form_response");


function send_form(){

    let label=document.createElement("label");
    label.style.color="color: #242582";
    label.style.marginRight='7px';
    label.innerHTML=``

}




function first_response(writing){

    let label=document.createElement("label");
    let input=document.createElement("input");
    label.style.color="#242582";
    //label.style.color="white";
    label.innerHTML=`${writing}`
    label.style.marginRight="7px";
    input.style.color="#242582";
    input.style.backgroundColor="black";
    input.name="my-input"
    //input.form.autofocus=true;
    form.appendChild(label);
    form.appendChild(input)

}

first_response("hello")
form.addEventListener("submit", function (e) {
    let string_response;
    e.preventDefault() // This prevents the window from reloading
    let formdata = new FormData(this);
    let input_data = formdata.get("my-input");
    let paragraph=document.createElement("p");
    paragraph.style.color="white";
    paragraph.innerHTML+=`<p>${input_data}</p>`;
    form_response.appendChild(paragraph);
  
    first_response(input_data);
});
