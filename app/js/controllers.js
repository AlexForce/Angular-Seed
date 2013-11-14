'use strict';

//The list of modules which will be used
eventsApp.controller("AppCtrl", 
                function AppCtrl(){
                        
                        var promise= Kinvey.init({
                                appKey: 'kid_VeqEMPqrmO',
                                appSecret: 'dc714511920f40baa8cad20588ca418b'
                        });
                        
                        var activeUser;
                        
                        
                        
                        
                        promise.then(function(activeUser){
                                console.log(activeUser);
                                        
                                         //Verify that the application is connect to server 
                                var ping= Kinvey.ping();
                                ping.then(function(response){
                                        console.log("Ping worked:");
                                        console.log(response);
                                        
                                        
                                        
                                      
                                }, function(error){
                                        console.error(error);
                                        
                                });
                                
                                
                                
                              //Creating an active user
                              activeUser = Kinvey.User.signup({
                                                username: 'AlexForce',
                                                password: 'AlexForce1'          
                                           }, {
                                              success: function(response){
                                                      alert("Login in");
                                                      console.log(response);
                                              
                                                      
                                              }
                                           });
                                           
                            //Save data
                             db= Kinvey.DataStore.save("trial", {
                                      _id:1,
                                      prop:'value'
                              }, {
                                   sucess: function(reponse){
                                           alert("data saved");
                                           console.log(response);
                                   }
                              });
                                
                        }, function (error){
                                console.error(error);
                        });
     });
