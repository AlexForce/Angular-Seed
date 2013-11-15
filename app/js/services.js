'use strict';

/* Services */


// Demonstrate how to register services
//Creating a server which will provide the data for the Controller
eventsApp.factory('eventData', function($resource){
	
        //A resource used to async data from url. and store it.
        var resource = $resource('/data/event/:id',{id:'@id'});
        var data =[{
                        id: 3,
                        name:"Solomon",
                        imageUrl:"img/default.png",
                        date: "2013-12-12",
                        time: "12:12:00",
                        description: "A simple event trial",
                        status:'label-warning',
                        complete:true
                        },
                        {        id: 1,
                        name:"Peter",
                        imageUrl:"img/car.jpg",
                        date: "2013-12-12",
                        time: "12:12:00",
                        description: "A simple event trial",
                        status:'label-success',
                        complete: false,
                        },
                        {
                        id: 3,
                        name:"Medullan Event",
                        imageUrl: 'img/default.png',
                        date: '2014-12-12',
                        time: '1:1:1',
                        description: 'A simple event to ... not sure as yet',
                        status:'label-important',
                        complete: true
                        }];

                var userAuth={  name:'Solomon',
                                password:'Perkins'
                        };

            return{


                        //Event CRUD
                        getAllEvents: function(){
                                
                                //Used to query the data
                                //$resource.query();

                                return data;
                          
                        },

                        viewEvent : function(eventId){
                                 return data[eventId-1];
                                
                        },
                        updateEvent: function(){
                                //Used when data gets submitted 
                                return data;
                        },
                        deleteEvent: function(eventId){
                                //Will be used to remove this event from the object.
                                
                                return data[eventId-1]=null?true: false;



                        },


                        //LOGIN
                        logoutEvent: function(){
                                return null;
                        },
                        loginEvent: function($scope){
                                return userAuth;
                        }


                };

        
})
