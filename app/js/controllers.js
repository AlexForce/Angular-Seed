'use strict';

//The list of modules which will be used
eventsApp.controller("AppCtrl",
    function AppCtrl(){
              $scope.events=[{
                        id: 1,
                        name:"Solomon",
                        imageUrl:"img/default.png",
                        date: "2013-12-12",
                        time: "12:12:00",
                        description: "A simple event trial",
                        status:'label-warning'
                },
                {        id: 2,
                        name:"Peter",
                        imageUrl:"img/car.jpg",
                        date: "2013-12-12",
                        time: "12:12:00",
                        description: "A simple event trial",
                        status:'label-success'
                },
                {
                        id: 3,
                        name:"Medullan Event",
                        imageUrl: 'img/default.png',
                        date: '2014-12-12',
                        time: '1:1:1',
                        description: 'A simple event to ... not sure as yet',
                        status:'label-important'
                }
                ];
                

                        
                       
    });
