fetch("https://jsonplaceholder.typicode.com/todos").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
                if(data.length>0){
                    var temp = "";
                    data.forEach((u)=>{
                        temp += "<tr>";
                       
                        temp += "<td>" + u.id + "</td>";
                        temp +=  "<td>" + u.userId + "</td>";
                        temp += "<td>" + u.title + "</td>";
                        if(u.completed == false){
                            temp += `<td><input  type="checkbox" class="check"/> </td>`;
                            
                        }
                        else{
                            temp += `<td><input  type="checkbox" class="check" checked/> </td>`;
                           
                        }
                    })
                    document.getElementById("data").innerHTML=temp;
                }
            }
        )
    }
)




// $(document).ready(function(){
//     $.getJSON("https://jsonplaceholder.typicode.com/todos", function(data){
//         var tasks='';
//         $.each(data, function(key, value){
//             tasks += "<tr>";
//             tasks += "<td>" + value.userId + "</td>";
//             tasks += "<td>" + value.id + "</td>";
//             tasks += "<td>" + value.title + "</td>";
//             if(value.completed == false){
//                 tasks += `<td><input type="checkbox" class="check" /><td>`;
//             }
//             else{
//                 tasks += `<td><input type="checkbox" class="check" checked /><td>`;
//             }
//             tasks += "</tr>";
//         })
//         $("#tasks").append(tasks);
//     })
// })




// $(function () {

//     try {
//         let count = [];
//         $("table").on("change", ":checkbox", function () {
            
//             var chkstatus=this.checked;
//             let index=count.indexOf(this.id);
//             let arritem=this.id;
//             console.log(arritem,index);
//             console.log(index);
           
//             var promise2 = new Promise(function (resolve, reject) {

//                 console.log(this.id);
//                 if(chkstatus === true)
//                 {
//                     if(index==-1){
//                         count.push(arritem);
//                     }
                   
                   
//                 }
//                 else {
//                     if(index!=-1){
//                         count.splice(index,1);
//                     }
                   
//                 }
//                 console.log(count,chkstatus);
//                 if (count.length==5) {
//                     resolve("Congrats! 5 Tasks have been successfully completed!");
                   
//                 }
//             });
//             promise2
//                 .then(function (r) {
//                     alert(r);
//                     count = [];
//                 });
//         });
        
//         let table = document.getElementById("table")
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 let List = JSON.parse(this.responseText);
//                 let item = List;
                
//                 let output = "<caption></caption><tr><th>User Id</th><th>Id</th><th>Title</th><th>Completed</th></tr>";
//                 for (let i = 0; i < item.length; i++) {
//                     output += "<tr>";
//                     output += "<td>" + item[i].userId + "</td>";
//                     output += "<td>" + item[i].id + "</td>";
//                     output += "<td>" + item[i].title + "</td>";
                    
//                     output += "<td><input type='checkbox' id='chkbox"+ item[i].id +"'" + ((item[i].completed == true) ? 'checked disabled' : '') + " ></td>";
                    
//                 }
//                 table.innerHTML = output;
//             }
//         }
//         xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
//         xhttp.send();
        
//     }
//     catch (e) {
//         document.getElementById("listdiv").innerHTML = e;
//     }
//     $("#logoutid").click(function(){location.replace("index.html");});
    
// });
