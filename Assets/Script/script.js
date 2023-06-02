
$('#currentDay').text(dayjs().format('MM, DD, YYYY'));
  
  $(document).ready(function () {
    
  
  
  $(".saveBtn").on("click", function() {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      console.log(text, time);
      localStorage.setItem(time, text);
      localStorage.getItem(time, text);
    });
  
    function rightTime() {
      var hourNow = dayjs().format('H');
      $('.time-block').each(function(event) {
        var timeSection = parseInt($(this).attr("id").split("-")[1]);

        if (timeSection == hourNow){
          $(this).addClass("present");
          $(this).removeclass("past");
          $(this).removeclass("future");
        }
        else if (timeSection < hourNow) {
          $(this).addClass("past");
          $(this).removeclass("present");
          $(this).removeclass("future");
        }
        else{
          $(this).addClass("future");
          $(this).removeclass("past");
          $(this).removeclass("present");
        }
      });
    };
 
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  
    
  rightTime();

  });
