$(document).ready(function () {
  // --------------------------------
  set_show_menu_link();
  // --------------------------------
  header_control();
  // --------------------------------
  for (select_img = 1; select_img <= 6; select_img++) {
    show_left(select_img);
  }

  // --------------------------------
  $(".ni_shop").on({
    click: function () {
      console.log("'SHOP' CLICK!");
      show_menu();
      change_navbar();
    },
  });
});

// *控制 header navbar 的效果變化* //
function header_control() {
  $("#header").on({
    mouseover: function () {
      console.log("'navbar' hovered!!");
      // 根據 show menu 是否存在來設定 navbar的 mouseover效果
      if ($("#show_menu").is(".show_menu") == true) {
        console.log("show_menu->mouseover");
        $("#header .nav-link,.navbar-brand").css({ color: "white" });
        $("#header").css({ "background-color": "transparent" });
      } else {
        $("#header .nav-link,.navbar-brand").css({ color: "black" });
        $("#header").css({ "background-color": "white" });
      }
    },
    mouseout: function () {
      console.log("'navbar' out!");
      // 根據 show menu 是否存在來設定 navbar的 mouseout效果
      if ($("#show_menu").is(".show_menu") == true) {
        console.log("show_menu->mouseout");
        $("#header .nav-link,.navbar-brand").css({ color: "white" });
        $("#header").css({ "background-color": "transparent" });
      } else {
        $("#header .nav-link,.navbar-brand").css({ color: "white" });
        $("#header").css({ "background-color": "transparent" });
      }
    },
  });
}

// *控制 show menu 的展開* //
function show_menu() {
  if ($("#show_menu").is(".show_menu")) {
    // show menu已經展開
    $("#show_menu").addClass("show_menu_back");
    $("#show_menu_right").addClass("show_menu_right_back");
    $("#show_menu").toggleClass("show_menu");
    $("#show_menu_right").toggleClass("show_menu_right");
    $(".show_menu_nav").toggleClass("show_block");
    setTimeout(function () {
      $("#show_menu").addClass("show_none");
    }, 2000);
  } else {
    // show menu還沒有展開
    $("#show_menu").toggleClass("show_menu");
    $("#show_menu_right").toggleClass("show_menu_right");
    $("#show_menu").removeClass("show_menu_back");
    $("#show_menu_right").removeClass("show_menu_right_back");
    // $(".show_menu_nav").toggleClass("show_block");
    setTimeout(function () {
      $(".show_menu_nav").toggleClass("show_block");
    }, 600);
    $("#show_menu").removeClass("show_none");
    // $("#header").css({ position: "fixed" });
  }
}

// *控制當 show menu 展開時 header navbar的排版變化* //
function change_navbar() {
  $(".header_logo").toggleClass("order-first  col-lg-6");
  $(".header_left").toggleClass("ms-lg-5 me-lg-5");
  $(".header_right").toggleClass("me-lg-5");
  $("#navbar_container").toggleClass("justify-content-around");
}

// *控制 show menu 中的連結 hover 效果* //
function set_show_menu_link() {
  var show_link = $(".show_menu_nav li a").length;
  console.log(show_link);
  let link_text = 0;
  for (i = 0; i < show_link; i++) {
    link_text = $(".show_menu_nav li a")[i].innerText.replace(" ", "").length;
    $(".show_menu_nav ul li:nth-child(" + (i + 1) + ")").append(
      "<style>.show_menu_nav ul li:nth-child(" +
        (i + 1) +
        "):hover::after{width:" +
        link_text * 3 +
        "%;height:2px}</style>"
    );
  }
}
//
function show_left(p) {
  console.log(p);
  $(".show_menu_nav ul li:nth-child(" + p + ")").on({
    mouseover: function () {
      console.log("link hover");
      $("#show_menu_left img").attr({
        src: "./image/v_img" + p + ".jpg",
      });
      // $("#show_menu_left img").toggleClass("show_menu_left");
      // $("#show_menu_left img").removeClass("show_menu_left_back");
    },
    mouseout: function () {
      $("#show_menu_left img").attr({ src: "" });
      // $("#show_menu_left img").toggleClass("show_menu_left");
      // $("#show_menu_left img").addClass("show_menu_left_back");
    },
  });
  console.log(p + "end");
}
