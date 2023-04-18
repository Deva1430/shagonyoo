$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount= topic.length;

    let millisecsPerDay = 24*60*60*1000;
    
    for(var x=0;x<topicCount;x++){
        var d = new Date(startDate.getTime()+7*x*millisecsPerDay);
        $("#courseTable").append("<tr>"+
            `<td>${x+1}</td>`+
            `<td>${d.getMonth()+"/"+d.getDay()}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>");
        }
    }
    );

