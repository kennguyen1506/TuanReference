$(document).ready(function () {
"use strict";

//toggle sidebar active class onclick
$('#sidebarCollapse').on('click', function(){
     $('#sidebar').toggleClass('active');
     $('.fade_item').toggleClass('active_item');
});

$('#sidebarToggle').on('click', function(){
    $('#sidebar').toggleClass('respactive');
});

//toggle submenu button animation
$(".sidebar-dropdown").on('click', function(){
    $(this).find('.side-drop-toggler').toggleClass("button_fadeUp");
});

$(".side-list").on('click', function(){
    $(this).find('.sub-drop-toggler').toggleClass('button_fadeUp');
});

//toggle sidebar active class onhover
$("#sidebar").on('mouseover',function(){
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }
});






//toggle checkboxes all checked
$("#checkAll").click(function(){
    $('input:checkbox').not(this).prop('checked', this.checked);
});






//return calendar
var d = new Date();
var months = ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December",];
document.getElementById("date-display").innerHTML = d.getDate() + " " + months[d.getMonth()]; 



//data and styling for chart1
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januar', 'February', 'March', 'April', 'June', 'July','August','September','October'],
        datasets: [{
            label: 'Sale stats',
            data: [21, 19, 20, 20, 22, 23,26, 19, 20, 17],
            pointRadius:0,
            backgroundColor: [
                '#6b7db3',
            ],
            borderColor: [
                '#99ffff',
            ],
            borderWidth: 5,
            lineTension:0,
        }]
    },

    options: {
        responsive: true,
        scales: {
            xAxes: [{
                ticks: {
                    display: false //this will remove only the label
                },
                gridLines: {
                    display: false //this will remove only the label
                },
            }],
            yAxes: [{
                ticks: {
                    display: false //this will remove only the label
                },
                 gridLines: {
                    display: false //this will remove only the label
                },
            }],
        },
        legend:{
          display: false
        }



    }
});

//data and styling for chart2
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januar', 'February', 'March', 'April', 'June', 'July','August','September','October'],
        datasets: [{
            label: 'Sale stats',
            data: [21, 19, 20, 20, 22, 23,26, 19, 20, 17],
            pointRadius:0,
            backgroundColor: [
                '#99ff99',
            ],
            borderColor: [
                '#6bb36b',
            ],
            borderWidth: 5,
            lineTension:0,
        }]
    },

    options: {
        scales: {
            xAxes: [{
                ticks: {
                    display: false //this will remove only the label
                },
                gridLines: {
                    display: false //this will remove only the label
                },
            }],
            yAxes: [{
                ticks: {
                    display: false //this will remove only the label
                },
                 gridLines: {
                    display: false //this will remove only the label
                },
            }],
        },
        legend:{
          display: false
        }



    }
});


//data and styling for chart3
var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januar', 'February', 'March', 'April', 'June', 'July','August','September','October'],
        datasets: [{
            label: 'Sale stats',
            data: [21, 19, 20, 20, 22, 23,26, 19, 20, 17],
            pointRadius:0,
            backgroundColor: [
                '#3655b3',
            ],
            borderColor: [
                '#4d4dff',
            ],
            borderWidth: 5,
            lineTension:0,
        }]
    },

    options: {
        scales: {
            xAxes: [{
                ticks: {
                    display: false //this will remove only the label
                },
                gridLines: {
                    display: false //this will remove only the label
                },
            }],
            yAxes: [{
                ticks: {
                    display: false //this will remove only the label
                },
                 gridLines: {
                    display: false //this will remove only the label
                },
            }],
        },
        legend:{
          display: false
        }
    }
});
    
//styling for datatable
$('#myTable').DataTable({
    "pagingType": "full_numbers",
    searching:false,
    ordering:false,
    language: {"lengthMenu": " _MENU_" },
    dom: '<"top>rt<"bottom"lfp><"clear">',
    "scrollY":"400px",
    "scrollCollapse": true,
    "oLanguage": {
      "oPaginate": {
        "sFirst":"<<",
        "sPrevious": "<",
        "sNext":">",
        "sLast":">>",
      },
    }

}

);


    
});