var j = 1;
function add() {
    var head1 = String (prompt("Please Enter the Heading"));
    var item1 = Number(prompt("Enter Number of Tasks (Enter Only Number)"));
    var arr1 =  new Array();
    for (var i = 0; i < item1; i++) {
        arr1[i] = prompt("ENTER " + (i+1) + " ELEMENT");
    }
    var boxd = document.getElementById("boxdiv");
    var box1 = document.createElement("div");
    box1.className = "box auto";
    box1.innerHTML += `<h3>${head1}</h3>`;
    for (var i = 0; i < item1; i++) {
        if(arr1[i]!=""){
            box1.innerHTML += `<h4>             
                                <input type="checkbox" id="id${j}" onclick="checkl()">
                                <label for="id${j}" id="label${j}">${arr1[i]}</label>
                        </h4>`;
            j++;
        }
    }
    if((head1!=="" && item1!=null))
            boxd.appendChild(box1); 
    }

    function checkl() {
        for (var i = 1; i <= j; i++) {
            var checkb = document.getElementById("id" + i);
            if (checkb.checked == true) {
                document.getElementById("label" + i).style.textDecorationLine = "line-through";
                document.getElementById("label" + i).style.color = "#C2C2C2";
            } else {
                document.getElementById("label" + i).style.textDecorationLine = "none";
                document.getElementById("label" + i).style.color = "#424242";
            }
        };
    }