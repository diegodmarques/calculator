$( "#flexSwitchCheckChecked" ).on( "click", function( event ) {
    $('.btn').css('background-color', '#363636')
    $('.btn').css('color', 'white')
    $('body').css('background-color', 'black')
    $('.clear').css('background-color', 'red')
    $('.display').css('background-color', '#363636')
    $('.display').css('color', 'white')
  });



//  globais
  var display = document.getElementsByClassName('display')[0]
  var valor1 = null
  var valor2 = null
  var operator = null
  var duff = true
  var pressSignal = false
  
  // var arrayBtn = document.getElementsByClassName('btn')

  // for(i = 0; i < arrayBtn.length; i++){
  //   arrayBtn[i].addEventListener('click', fadeInOut(){
      

  //   })
  // }


   
    function addDisplay(event){
      let digito = event.target.textContent
      if(valor1 != null && duff){
        display.textContent = ''
        duff = false
      }
      display.textContent += digito
      pressSignal = false
    }
    
   var arrayNummbers = document.getElementsByClassName('numbers')

   for(i = 0; i < arrayNummbers.length; i++){
     arrayNummbers[i].addEventListener('click', addDisplay)
   }

   var clear = document.getElementsByClassName('clear')[0]
   clear.addEventListener('click', clearDisplay)

   function clearDisplay(){
    display.textContent = ''
    valor1 = null;
    valor2 = null;
    operator = null;
    duff = true
   }
   
  function calculate(e){
      valor2 =  +display.textContent 
      let aux = valor2
      display.textContent = operator() 
      valor1 = +display.textContent
      valor2 = null
      duff = true  //1
      if(e != null){
         operator = null;
         valor2 = aux
       
      }
      
  }

   var arrayOperators = document.getElementsByClassName('operators')
   for(i = 0; i < arrayOperators.length; i++){
     arrayOperators[i].addEventListener('click', addOperator)
    }
 
   function addOperator(e){
    //  operator = null
    if(operator != null && pressSignal == false){
        calculate()
    }
    let sinal = e.target.textContent
    valor1 = +display.textContent
    
    switch (sinal) {
          case '+':
          operator = function() { return valor1 + valor2}
          break;

          case '-':
          operator = () => { return valor1 - valor2}
          break;
          
          case 'x':
          operator = () => { return valor1 * valor2}
          break;

          case '/':
          operator = () => { return valor1 / valor2}
          break;
          
        default:
          break;
        } 
        pressSignal = true
      }
  var equal = document.getElementsByClassName('equal')[0]
  equal.addEventListener('click', calculate)
  