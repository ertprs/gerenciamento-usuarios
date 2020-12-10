var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

function addLine(dataUser)
{
    document.getElementById("tableUsers").innerHTML += `
                                                        <td>
                                                            <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
                                                        </td>
                                                        <td>${dataUser.name}</td>
                                                        <td>${dataUser.email}</td>
                                                        <td>${dataUser.admin}</td>
                                                        <td>${dataUser.date}</td>
                                                        <td>
                                                            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                                                            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                                                        </td>
                                                    `;
}

document.getElementById("form-user-create").addEventListener("submit", function(e){
    e.preventDefault();
    
    fields.forEach(field => {
        if(field.name === "gender")
        {
            if(field.checked)
            {   // forma de criar o json de maneira dinâmica
                user[field.name] = field.value;
            }
        }
        else
        {
            user[field.name] = field.value;
        }
    });

    addLine(user);
});
