// window.onload = function(){
//     // alert("hi");
// };

let imageURL_Array = [
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/372073/60ad2eda9638fa38.jpg"
];


$(function(){
    var lastRandomNumber;
    $("input").on("click",function(){
      var numberOfListItem = $("li").length;
      var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
      // Avoid successive duplicates
      while (lastRandomNumber == randomChildNumber) {
        randomChildNumber = Math.floor(Math.random()*numberOfListItem);
      }
      console.log(randomChildNumber);
      lastRandomNumber = randomChildNumber;
      $("h1").text($("li").eq(randomChildNumber).text());
      $("img").attr("src",imageURL_Array[randomChildNumber]);
    });
  });