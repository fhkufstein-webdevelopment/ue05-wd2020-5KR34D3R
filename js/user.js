$(document).ready(function() {

    var userListBody = $('.userList tbody')[0];

    //@todo store and somehow update the current number of users




    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here
        let newRow = userListBody.insertRow();
        let inputValue = document.getElementById("username");

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        let txtNodeCount = document.createTextNode(userListBody.rows.length);
        let txtNodeName = document.createTextNode(inputValue.value);
        let button = document.createElement("button");
        let buttonI = document.createElement("i");

        button.type = "button";


        button.classList.add('btn', 'btn-secondary', 'btn-danger', 'deleteTrigger');
        button.title = "Löschen";
        buttonI.classList.add('fa', 'fa-trash');
        button.appendChild(buttonI);

        cell1.appendChild(txtNodeCount);
        cell2.appendChild(txtNodeName);
        cell3.appendChild(button);
        inputValue.value = "";
        return false;
        $('.btn').load('.btn');
    });

    $(document).on('click', '.btn-danger',function (event) {
        var loeschneJaNein = confirm('Moechen Sie den Datensatz loeschen?');
        if(loeschneJaNein == true){
            ($(event.target).closest("tr")).remove();
            for(let i = 0,row;row = userListBody.rows[i]; i++){
                row.cells[0].innerHTML = i+1;
            }
        }
    });


    //maybe some code follows here

});