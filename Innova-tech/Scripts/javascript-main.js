//varibles
var x = 0;

const pageStyle = document.documentElement.style;

// var intervalID =  window.setInterval(loginForm, 100);


    $(".login-form-button").click(function(){



var user = $(".input-user").val();
        var passw = $(".input-password").val();


        var datos = {
            "username": user,
            "password": passw
            
        }
        if(loginCounter==0){

            $.ajax({

                url: "login.php",
                data: datos,
                success: function(respuesta){
                   console.log(respuesta)
                }
                
                
        
        })

        }
        else{
            $.ajax({

                url: "registro.php",
                data: datos,
                success: function(respuesta){
                   console.log(respuesta)
                    
                }
                
                
        
        })



        }
      
        


     


    })


//Cambio de letra - function
// $("#button-theme").click(function switchTheme(){
  
//     if(x==0){
//         pageStyle.setProperty('--color-main', 'black');
//         pageStyle.setProperty('--color-secondary', 'white')
//         pageStyle.setProperty('color', 'white'); 
//         // $("div").css('color','white')
//         $("#button-theme").removeClass("button-theme-primary")
//         $("#button-theme").addClass("button-theme-secondary")
//         $("i").css("color", "white")
//         $(".start-button").css('color','--green-main')

        
//         x=1;

//     }
//     else{
//         pageStyle.setProperty('--color-main', 'white');
//         pageStyle.setProperty('color', 'black'); 
//         $("#button-theme").removeClass("button-theme-secondary")
//         $("#button-theme").addClass("button-theme-primary")
//         // $("div").css('color','black')
//         $("i").css("color", "white")
//         $(".start-button").css('color','--green-main')
//         x=0;
//         } 
    
    
// })


// function themefontcolor(){
 
//     if(window.innerWidth<=800){
//         $(".home").addClass("home-null")
//         $(".home").removeClass("home")

//         $(".contact").addClass("contact-null")
//         $(".contact").removeClass("contact")

//         $(".about-us").addClass("about-us-null")
//         $(".about-us").removeClass("about-us")

//         $(".opinions").addClass("opinions-null")
//         $(".opinions").removeClass("opinions")
        
//     }
//     else{

//         $(".home-null").addClass("home")
//             $(".home-null").removeClass("home-null") 

//             $(".contact-null").addClass("contact")
//             $(".contact-null").removeClass("contact-null")
    
//             $(".about-us-null").addClass("about-us")
//             $(".about-us-null").removeClass("about-us-null")
    
//             $(".opinions-null").addClass("opinions")
//             $(".opinions-null").removeClass("opinions-null")


//         if($("#button-theme").hasClass("button-theme-primary")){

//             $(".home").css("color","black")
//             $(".opinions").css("color","black")
//             $(".contact").css("color","black")
//             $(".about-us").css("color","black")
//         }
//         else{

//             $(".home").css("color","white")
//             $(".opinions").css("color","white")
//             $(".contact").css("color","white")
//             $(".about-us").css("color","white")
//         }

       
       
//     }

    
    
// }

//event theme switch

// $("#button-theme").click(function() { 
//     if($("#button-theme").hasClass("button-theme-primary")){

//         //Cambios del theme a oscuro

//         $("#button-theme").removeClass("button-theme-primary")
//         $("#button-theme").addClass("button-theme-secondary")

//         $("#body").css("background-color", "var(--bg-color-secondary-black)")

//         $(".menu-box").css("background-color", "var(--bg-color-secondary-black)")

//         $(".menu-theme-primary").addClass("menu-theme-secondary")
//         $(".menu-theme-primary").removeClass("menu-theme-primary")

//     }
//     else{
//         //Theme default
//         $("#button-theme").removeClass("button-theme-secondary")
//         $("#button-theme").addClass("button-theme-primary")

//         $("#body").css("background-color", "var(--bg-color-white)")

//         $(".menu-box").css("background-color", "var(--bg-color-main-white)")

//         $(".menu-theme-secondary").addClass("menu-theme-primary")
//         $(".menu-theme-secondary").removeClass("menu-theme-secondary")

//         $(".home").css("color", "white")
        

//     }
//  })



 //Start button function

 function hoverstartbutton(){
     $(".arrow-button").css({"width":"240px","height":"47px","border-radius":"44px"})
     $(".start-button").css("color","white")
     $("#icon-start-button").removeClass("fa-solid fa-chevron-right")
     $("#icon-start-button").addClass("fa-solid fa-arrow-right")
    
 }
 function hoverstartbutton2(){
    $(".arrow-button").css({"width":"40px","border-radius":"44px","height":"47px"})
    $(".start-button").css("color","var(--green-main)");
    $("#icon-start-button").removeClass("fa-solid fa-arrow-right")
    $("#icon-start-button").addClass("fa-solid fa-chevron-right")
 }



//login functions
 function login(){

if($(".login-box").hasClass("hidden")){
    $(".login-box").removeClass("hidden");
    var blur = document.getElementById("home").classList.toggle('effect-blur');
}
}

function loginClose(){
    $(".login-box").addClass("hidden");
    $(".register-box").addClass("hidden");
    var blur = document.getElementById("home").classList.toggle('effect-blur');

}




    //  if($(".login-box").hasClass("hidden")){
    //      $(".login-box").removeClass("hidden");
    //      var blur = document.getElementById("section1").classList.toggle('effect-blur');
    //      console.log("hola")
      
         
    //  }
    //  else{
    //     $(".register-box").addClass("hidden");
    //      $(".login-box").addClass("hidden");
        
    //      console.log("adios")
    //      var blur = document.getElementById("section1").classList.toggle('effect-blur');
    //  }
    var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
    var loginCounter=0;



 function register(){
    document.getElementById('switcher').value="1";
    d=document.getElementById('switcher').value;
    
    
    if(loginCounter==0){

    if(ventana_ancho<800){

         $(".login-illustration").css('background','url(../images/study-from-books.png)')
         $(".login-illustration").css('background-size','cover')
         $(".login-title").text("Sign Up");
         document.getElementById('form-p').innerHTML="Have a account? <a href='#' onclick='register()'>Log in</a>";
   }
   else{
            $(".login-illustration").css('transform','translate(70%)')
            $(".login-illustration").css('background','url(../images/study-from-books.png)')
            $(".login-illustration").css('background-size','cover')
            $(".login-title").text("Sign Up");
            document.getElementById('form-p').innerHTML="Have a account? <a href='#' onclick='register()'>Log in</a>";
            $("input").addClass("positionv2")
            $(".icon-user").css('left','18%')
            $(".password-icon").css('left','18%')
            $(".sign-up-p").css('left','18%')
            $(".login-title").css('left','18%')
            $(".login-form-button").css('left','18%')
   }
   
    loginCounter=1;
   }
   else{
       if(ventana_ancho<800){
            $(".login-illustration").css('background','url(../images/welcome.png)')
            $(".login-illustration").css('background-size','cover')
            $(".login-title").text("Log In");
       }
       else{
           $(".login-illustration").css('background','url(../images/welcome.png)')
            $(".login-illustration").css('background-size','cover')
            $(".login-illustration").css('transform','translate(0%)')
            $(".login-title").text("Log In");
            $("input").removeClass("positionv2")
            $(".icon-user").css('left','58%')
            $(".password-icon").css('left','58%')
            $(".sign-up-p").css('left','58%')
            $(".login-title").css('left','58%')
            $(".login-form-button").css('left','60%')
            document.getElementById('form-p').innerHTML="Don´t Have a account? <a href='#' onclick='register()'>Sign up</a>";
       }
            
  
       document.getElementById("switcher").value="1";
   loginCounter=0;
   }
 }