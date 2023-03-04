$.getJSON("https://randomuser.me/api/", function(data) {
  // Iterar sobre todos los elementos con la ID especificada
  $("[id='nombre'], [id='telefono'], [id='email']").each(function() {
    // Actualizar el contenido del elemento utilizando los datos del JSON
    if (this.id === "nombre") {
        var firstName = data.results[0].name.first;
        var lastName = data.results[0].name.last;
        var fullName = firstName + " " + lastName;
      $(this).text(fullName);
    } else if (this.id === "telefono") {
        var telefono = data.results[0].cell;
      $(this).text("Telefono: " + telefono);
    } else if (this.id === "email") {
        var email = data.results[0].email;
        $(this).text("Email: " + email);
    }
    var imagen = data.results[0].picture.large; 
    $("#imagen").attr("src" ,imagen);

  });
});