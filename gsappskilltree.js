$(document).ready(function(){
    
    
    
    var accentColor = "{color:Accent}".replace(/[^0-9A-Za-z]+/g, '');  

    
    console.log(accentColor);
    /*$("img.SKILLTREE_imagemap_Map").mapster({
        fill: false,
        stroke: true,
        strokeOpacity: 1,
        strokeColor: accentColor,
        strokeWidth: 3, 
        clickNavigate: true,
        fade: false 
    });*/
    
      
    var url = document.URL
    var spliturl = url.split("{Host}");

    if(spliturl[1] == "/") {
        $("body").addClass("frontpage"); 
    }

    
    
    var maphilightoptions = {
        fill: false,
        stroke: true,
        strokeOpacity: 0.8,
        strokeColor: accentColor,
        strokeWidth: 6, 
        fade: false
    };
    
    $("img.SKILLTREE_imagemap_Map").maphilight(maphilightoptions);
    
    
    if(typeof(spliturl[1]) != 'undefined') {
        var taggedpostfix = spliturl[1].split("/tagged/");
        console.log(taggedpostfix);
        if(taggedpostfix.length > 1) { 
            var thistagged = taggedpostfix[1];
            //thistagged = name of tag we're currently on
            
            // if it's a single video, grab it and id current video
            $("map area[href*='" + thistagged + "']").attr("id","currentarea");
            // and then highlight the current video
            $("#currentarea").attr("data-maphilight",'{alwaysOn:true, strokeOpacity: 1}');
            
            // if it's a course, grab current courses
            $("map area." + thistagged).addClass("currentselection");    
            
            //highlight current courses
            $(".currentselection").attr("data-maphilight",'{strokeOpacity: 0.5}');
            
            // oh, also highlight current course link
            $("#courselinks a#" + thistagged).addClass("courselinkscurrent")
            console.log(thistagged);
            /* var data = $('#currentarea').data('maphilight');
            console.log(data);
            $('#currentarea').data('maphilight', data).trigger('alwaysOn.maphilight'); */
 

        }
        
    }

    // when you mouse over courses
    $('#courselinks a').mouseover(function(e) {
        console.log("mousing over" + $(this).attr("id"));
                
        $('.' + $(this).attr("id")).mouseover();
        }).mouseout(function(e) {
             //$(".currentselection").attr("data-maphilight",'{"alwaysOn":true, "strokeOpacity": 0.25}');
        console.log("mousing out" + $(this).attr("id"));

            $('.' + $(this).attr("id")).mouseout();

     })
});
