$(document).ready(function(){
    var url="https://api.track-covid19.in/reports_v2.json";
    $.getJSON(url,function(data){
            
        var activecases=data.active;
        var confirmedcases=data.confirmed;
        var recoveredcases=data.recovered;
        var deaths=data.dead;
      
     
        $("#active").append(activecases);
        $("#conf").append(confirmedcases);
        $("#recovered").append(recoveredcases);
        $("#deaths").append(deaths);
        
        var state=[] ,active =[] , confirmed=[], recovered=[] , dead=[];
        $.each(data.states,function(id,obj){
            state.push(obj.name);
            confirmed.push(obj.confirmed);
            dead.push(obj.dead);
            recovered.push(obj.recovered);
        })
      
         
        var mychart=document.getElementById("chart").getContext('2d')
        
        var chart=new Chart(mychart,{
            
            type:'line',
          
            
            data:{
                     labels:state,
                     datasets:[ {
                       
                                  label:"deaths", 
                                  data:dead,
                                  backgroundColor:'#ff0047',
                                  minBarLength:10
        
                                },
                         
                         
                         {
                                label:"confirmed cases", 
                                  data:confirmed,
                                  backgroundColor:'#ffd047',
                                   minBarLength:10
        
                                } ,
                               
                            
                               
                                  {
                                  label:"recovered", 
                                  data:recovered,
                                  backgroundColor:'green',
                                  minBarLength:10
        
                                }
                               
                               
                             ]
            
                },  
            
            
       
            
       
           options:{}      
        })

        
        
        
        }) 
            
    })