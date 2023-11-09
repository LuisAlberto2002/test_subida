$.get("http://localhost:3000/peliculas?token=ok",function(data){
        console.log("Data: ",data);

        const table= $(`
        <table>
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>synopsis</th>
                <th>genre</th>
                <th>duration</th>
                <th>director</th>
                <th>actors</th>
            </tr>
        </table>`);
        data.forEach(d => {
            table.append(`
                <tr>
                    <td>${d._id}</td>
                    <td>${d.name}</td>
                    <td>${d.synopsis}</td>
                    <td>${d.genre}</td>
                    <td>${d.duration}</td>
                    <td>${d.director}</td>
                    <td>${d.actors}</td>

                </tr>

            `);
        });
        table.attr("border", "1");
        table.appendTo("#container");
})
$.post("url", data,
    function (data, textStatus, jqXHR) {
        
    },
    "dataType"
);