$(document).ready(function () {
  set_form_btn();
  // --------------------------------
  set_sidebar_link_icon();
  // --------------上傳物品圖片------------------
  // 主圖
  $("#mainInput").change(function () {
    console.log(this);
    $("#main_imgs").html(""); // 清除預覽
    readURL1(this);
  });
  // 附圖
  $("#subInput").change(function () {
    console.log(this);
    $("#sub_imgs").html(""); // 清除預覽
    readURL2(this);
  });
  // --------------上傳搭配圖片------------------
  // 主圖
  $("#mainLookInput").change(function () {
    console.log(this);
    $("#main_imgs").html(""); // 清除預覽
    readURL1(this);
  });
  // 附圖
  $("#subLookInput").change(function () {
    console.log(this);
    $("#sub_imgs").html(""); // 清除預覽
    readURL3(this);
  });
  // --------------------------------
  for (sidebar_link = 1; sidebar_link <= 4; sidebar_link++) {
    sidebar_link_hover(sidebar_link);
  }
  // --------------------------------
  $(".ni_shop").on({
    click: function () {
      console.log("'SHOP' CLICK!");
      show_menu();
      change_navbar();
    },
  });
  $(".active").addClass("shadow");
});

// ********************** function區 ********************** //

//
function set_sidebar_link_icon() {
  $("#sidebar .link ul li:nth-child(1) a").append(
    '<img src="./image/icon/00_homePage_black.png" alt="" />' +
      "<span>CLOTHING</span>"
  );
  $("#sidebar .link ul li:nth-child(2) a").append(
    '<img src="./image/icon/01_onSale_black.png" alt="" />' +
      " <span>ON SALE</span>"
  );
  $("#sidebar .link ul li:nth-child(3) a").append(
    '<img src="./image/icon/02_book_black.png" alt="" />' + "<span> LOOK</span>"
  );
  $("#sidebar .link ul li:nth-child(4) a").append(
    '<img src="./image/icon/03_dashboard_black.png" alt="" />' +
      "<span> DASHBOARD</span>"
  );
}
function sidebar_link_hover(i) {
  let img_src = "";
  $("#sidebar .link li:nth-child(" + i + ") a").on({
    mouseover: function () {
      $("#sidebar .link li:nth-child(" + i + ") a").addClass("bg-black  ");
      $("#sidebar .link li:nth-child(" + i + ") a").addClass("text-white");
      switch (i) {
        case 1:
          img_src = "./image/icon/00_homePage_white.png";
          break;
        case 2:
          img_src = "./image/icon/01_onSale_white.png";
          break;
        case 3:
          img_src = "./image/icon/02_book_white.png";
          break;
        case 4:
          img_src = "./image/icon/03_dashboard_white.png";
          break;
      }
      $("#sidebar .link li:nth-child(" + i + ") a img").attr("src", img_src);
    },
    mouseout: function () {
      $("#sidebar .link li:nth-child(" + i + ") a").removeClass("bg-black  ");
      $("#sidebar .link li:nth-child(" + i + ") a").removeClass("text-white");
      switch (i) {
        case 1:
          img_src = "./image/icon/00_homePage_black.png";
          break;
        case 2:
          img_src = "./image/icon/01_onSale_black.png";
          break;
        case 3:
          img_src = "./image/icon/02_book_black.png";
          break;
        case 4:
          img_src = "./image/icon/03_dashboard_black.png";
          break;
      }
      $("#sidebar .link li:nth-child(" + i + ") a img").attr("src", img_src);
    },
  });
}

function set_form_btn() {
  $("#item .form_btn button.btn1").on({
    mouseover: function () {
      $("#item .form_btn button.btn1").css({ "background-color": "#2a878f" });
      $("#title").css({ "background-color": "#2a878f" });
    },
    mouseout: function () {
      $("#item .form_btn button.btn1").css({ "background-color": "#6c9089" });
      $("#title").css({ "background-color": "#6c9089" });
    },
  });
}
// 主圖上傳
function readURL1(input) {
  var file_length = input.files.length;
  if (input.files && file_length == 1) {
    for (var i = 0; i < file_length; i++) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = $(
          `<img class='object-fit-cover' width='100%' height='100%'>`
        ).attr("src", e.target.result);
        $("#main_imgs").append(img);
      };
      reader.readAsDataURL(input.files[i]);
    }
  } else {
    alert("最多只能上傳1張照片!");
    var noPictures = $("<p>請重新選擇上傳檔案 !!</p>");
    $("#main_imgs").append(noPictures);
  }
}

// 附圖上傳
function readURL2(input) {
  var file_length = input.files.length;
  if (input.files && file_length >= 0 && file_length <= 8) {
    // var img_size = 100 / 3;
    for (var i = 0; i < file_length; i++) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = $(
          `<img class='object-fit-cover' width='25%' height='50%'>`
        ).attr("src", e.target.result);
        $("#sub_imgs").append(img);
      };
      reader.readAsDataURL(input.files[i]);
    }
  } else {
    alert("最多只能上傳8張照片!");
    var noPictures = $("<p>請重新選擇上傳檔案 !!</p>");
    $("#sub_imgs").append(noPictures);
  }
}
// 搭配單品附圖上傳
function readURL3(input) {
  var file_length = input.files.length;
  if (input.files && file_length >= 0 && file_length <= 6) {
    var img_size = 100 / 6;
    for (var i = 0; i < file_length; i++) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = $(
          `<img class='object-fit-cover' width='100%' height='${img_size}%'>`
        ).attr("src", e.target.result);
        $("#sub_imgs").append(img);
      };
      reader.readAsDataURL(input.files[i]);
    }
  } else {
    alert("最多只能上傳6張照片!");
    var noPictures = $("<p>請重新選擇上傳檔案 !!</p>");
    $("#sub_imgs").append(noPictures);
  }
}
