var id = 0;
//var idg=0;
var flag1 = false, flag2 = false, flag = false, delflag = false
var inputform = document.getElementsByTagName("input");
//var icons=document.getElementsByTagName("i");
var icons = document.getElementsByClassName("del")
_dell = document.getElementsByClassName("deleted_row");
parent = document.getElementsByClassName("parent");
var node, node1, textnode, node2, textnode2, node3, textnode3, icoedit1, node4, icoedel1, node5, textnode4;

//icons.push(document.getElementById("del"));
var arr_Contact = [];


var sub = document.getElementsByTagName("button")[0];
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class Contact {


    constructor(Name, Email, Phone, _id) {
        this.Name = Name;
        this.Email = Email;
        this.Phone = Phone;
        this._id = ++id;

    };
};

class Contact_List {

    constructor() {

    };

    addContact(obj) {



        var table = document.getElementById("tb");
        if (sub.innerHTML == "Submit") {
            arr_Contact.push(obj)
            for (let i = 0; i < arr_Contact.length; i++) {
                node = document.createElement("tr");
                node.className = "parent"
                for (var key in arr_Contact[i]) {
                    if (key == "Name") {
                        node1 = document.createElement("td");

                        textnode = document.createTextNode(arr_Contact[i][key]);

                        node1.appendChild(textnode);

                        node.appendChild(node1);
                    }
                    if (key == "Email") {



                        node2 = document.createElement("td");
                        textnode2 = document.createTextNode(arr_Contact[i][key]);
                        node2.appendChild(textnode2);
                        node.appendChild(node2);

                    }

                    if (key == "Phone") {



                        node3 = document.createElement("td");
                        textnode3 = document.createTextNode(arr_Contact[i][key]);
                        node3.appendChild(textnode3);
                        node.appendChild(node3);


                    }



                }


            }
            node4 = document.createElement("td");
            icoedit1 = document.createElement("i");
            icoedel1 = document.createElement("i");
            // icons.push("i")
            icoedit1.className = "fas fa-pen";
            icoedel1.className = "fa fa-trash  del";
            for (let i = 0; i < id; i++) {
                icoedel1.innerText = i
            }

            for (let i = 0; i < id; i++) {
                icoedit1.innerText = i
              
            }
         
             


            node.appendChild(icoedit1);
            icoedit1.addEventListener("click", edit_iconfun)
            node.appendChild(icoedel1);

            icoedel1.addEventListener("click", delete_iconfun)
            table.appendChild(node);

            node5 = document.createElement("td");
            textnode4 = document.createTextNode(id);
            //node5.style.display="none"
            node5.className = "deleted_row";
            node5.style.display="none"
            node5.appendChild(textnode4);
            node.appendChild(node5);
        }
        else if (sub.innerHTML == "Edit") {


            arr_Contact[_id] = obj
            console.log("lenth",parent.length);

          
        if(delflag==false)
        {   console.log(delflag)
            console.log(_id);
            for (var i = 0; i < id; i++) {
                if (_id == i) {
                    for (var key in obj) {
                        if (key == "Name")
                            parent[i].children[0].innerHTML = obj[key]
                        if (key == "Email")
                            parent[i].children[1].innerText = obj[key]
                        if (key == "Phone")
                            parent[i].children[2].innerText = obj[key]

                    }
      
}   }}
            else{
                console.log(delflag);
                for (var i = 0; i < id; i++) {
                    if (_id == i) {
                        for (var key in obj) {
                            if (key == "Name")
                                parent[i-1].children[0].innerHTML = obj[key]
                            if (key == "Email")
                                parent[i-1].children[1].innerText = obj[key]
                            if (key == "Phone")
                                parent[i-1].children[2].innerText = obj[key]

                        }
                    }
                }
            }
          

               
                
            


            sub.innerHTML = "Submit"
            delflag=false
        }
        inputform[0].value=""
        inputform[1].value=""
        inputform[2].value=""


    };



    removeContact(_id) {


        //arr_Contact.splice(_id-1)


        delflag = true


        for (let i = 0; i < parent.length; i++) {


            if (parseInt(parent[i].children[4].innerText) == _id)
                parent[i].remove(parent[_id])
        }
        //id--;
    }


    editContact(_id, obj) {



    }




};




function edit_iconfun(e) {
    sub.innerHTML = "Edit"



    _id = parseInt(e.target.innerText)
    for (let i = 0; i < id; i++) {
        if (i == _id) {



            for (var key in arr_Contact[_id])
                if (key = "Name") {
                    inputform[0].value = arr_Contact[_id][key]

                }
            if (key = "Email") {

                inputform[1].value = arr_Contact[_id][key]
            }
            if (key = "Phone") {
                inputform[2].value = arr_Contact[_id][key]

            }
        }
    }
    var obj_contact1 = {
        Name: inputform[0].value,
        Email: inputform[1].value,
        Phone: inputform[2].value,

    }



    var obj_contact_list1 = new Contact_List()
    obj_contact_list1.editContact(parseInt(e.target.innerText), obj_contact1)





}





function delete_iconfun(e) {
    var obj_contact_list = new Contact_List()
    var respond = confirm("Are you Sure you want To delete");

    if (respond) {

        obj_contact_list.removeContact(parseInt(e.target.innerText))

    }
}




sub.addEventListener("click", function (e) {
    e.preventDefault();
    var obj_contact_list = new Contact_List()


    if (sub.innerHTML == "Submit") {
        if (inputform[0].value && inputform[1].value.match(mailformat) && inputform[2].value.length == 13) {
            Contact_obj = new Contact(inputform[0].value, inputform[1].value, inputform[2].value, id);

            //Object.defineProperty(Contact_obj,'id',{writable:false})


            obj_contact_list.addContact(Contact_obj)
                ;
        }
    }


    else if (sub.innerHTML = "Edit") {


        var obj = {
            Name: inputform[0].value,
            Email: inputform[1].value,
            Phone: inputform[2].value,

        }
        obj_contact_list.addContact(obj)}

});




for(var key in _dell)
{

    console.log(_dell[key]);
}