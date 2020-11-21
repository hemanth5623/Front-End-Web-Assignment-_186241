// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    // Find a <form> element with id="addForm":
    var form = document.getElementById('addForm');
    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTable");
    
    var tableHead = document.getElementById("table-head")
    console.log(tableHead.style['display'])
    //Add on submit event for the form
    form.addEventListener('submit',formTable);
    //Add on click event for the cross button
    table.addEventListener('click', removeItem);
    
    //Declare an empty array to store entries submitted from the form using objects
    var c = [];
    
    //function formTable that will be called on clicking submit button
    function formTable(e){    
        //prevent Default charateristics of submit button to get the values submitted
        e.preventDefault();
        
        //Declare an object with some random default values
        var emp = {'Name':'hemanth' ,'EmployeeId': 'XYZ1234','Department':'Chemical','EmailId':'rohitsharma@gmail.com','DateofJoining':'11/11/2020'};
        
        //Declare five variables to get values submitted in the form
        var nameValue = document.getElementById("name").value;
        var empIdValue = document.getElementById("empId").value;
        var depValue = document.getElementById("Department").value;
        var emaIdValue = document.getElementById("emaId").value;
        var dojValue = document.getElementById("doj").value;
        
        //Assign the values stored in variables to the object  
        emp.Name = nameValue;
        emp.EmployeeId = empIdValue;
        emp.Department = depValue;
        emp.EmailId = emaIdValue;
        emp.DateofJoining = dojValue;
        
        //Add the object to the array by using push() property
        c.push(emp);
        
        //store the length of the array in a variable 
        var index = c.length;
        

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow();

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        // Add some text to the new cells:
        cell1.innerHTML = c[index-1].Name;
        cell2.innerHTML = c[index-1].EmployeeId;
        cell3.innerHTML = c[index-1].Department;
        cell4.innerHTML = c[index-1].EmailId;
        cell5.innerHTML = c[index-1].DateofJoining;

        // Create del button element
        var deleteBtn = document.createElement('button');
        // Add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        // Append text node
        deleteBtn.appendChild(document.createTextNode('X'));
        // Append button to new row
        row.appendChild(deleteBtn);
        // Append row to table
        table.appendChild(row);

        document.getElementById('id01').style.display='none';
        tableHead.style['display'] = ''
        document.getElementById('addForm').reset();

    }
    // Remove item
       function removeItem(e){
       if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var row = e.target.parentElement;
          table.removeChild(row);
    }
  }
}