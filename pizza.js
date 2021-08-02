
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
          var quantity = document.getElementById("quantity").value
          var f = parseInt(quantity)
          var amount = (sz + top + cr)
          var final = amount*f
          $(".inputs").show(function(){
            $("#Yes").click(function(){
              prompt("Where do you Live: ")
              var intrest = (300)
              var payment = final + intrest
              alert("You will pay" + " " + payment + "Delivery intrest is 300")
              
            })
            $(".no").click(function(){
              alert("You will pay " + final)
            })

          //  let calc = $(".results").text("Your total amount is  " + crust_output  + topping__output + ")")
           
          
        })
      })

})
         
     

            
       
})
