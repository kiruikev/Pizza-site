// var large = document.getElementById("Large").value();
// var small = document.getElementById("small").value();
// var medium = document.getElementById("Medium").value();
// var crispy = document.getElementById("Crispy").value();
// var stuffed = document.getElementById("Stuffed").value();
// var gluten = document.getElementById("Gluten").value();
// var bacon = document.getElementById("Bacon").value();
// var sausage = document.getElementById("Sausage").value();
// vvar pepperoni = document.getElementById("Pepperoni").value();var large = document.getElementById("Large").value();
// $(document).ready(function() {
//     $("#proced").click(function(){
//         function results(size) {
//             this.size = size
       
//           }
//           var size = document.getElementById("pizza-size")

//     })

// })
// function order(size, crust, topping) {
//     this.size = size;
//     this.crust = crust;
//     this.topping = topping
  // }

$(document).ready(function() {
    $("#proced").click(function(event){
        event.preventDefault();
        $(".results").show(function(){
          var size = document.getElementById("pizza-size")
          var size__output = size.options[size.selectedIndex].value 
          var crust = document.getElementById("Crust")
          var crust_output = crust.options[crust.selectedIndex].value 
          var topping = document.getElementById("topping")
          var topping__output = topping.options[topping.selectedIndex].value 
          var sz = parseInt(size__output)
          var top = parseInt(crust_output)
          var cr = parseInt(topping__output)
          
          var amount = (sz + top + cr)
          $(".inputs").show(function(){
            $("#Yes").click(function(){
              prompt("Where do you Live: ")
              alert("You will pay" + " " + amount + "When rider comes")
              
            })
            $(".no").click(function(){
              alert("You will pay " + amount)
            })

          //  let calc = $(".results").text("Your total amount is  " + crust_output  + topping__output + ")")
           
          
        })
      })

})
         
     

            
       
})
