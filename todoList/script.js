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



