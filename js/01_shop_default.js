var product_amount = 0;
var is_collect;

$(document).ready(function () {
  header_control();
  // --------------------
  $(".show_item .wish_icon").hide();
  // --------------------
  $(".show_item .si_cover").click(function () {
    $(location).attr("href", "02_00_shop_item.html");
  });
  // -------------------
  product_amount = $(" .show_item").length;
  console.log(product_amount);
  for (i = 1; i <= product_amount; i++) {
    product_hover(i);
    product_collect(i);
  }
  //
  is_collect = new Array(product_amount).fill("false");
  console.log(is_collect);
});

//
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
        $("#header .nav-link,.navbar-brand").css({ color: "white" });
        $("#header").css({ "background-color": "black" });
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
        $("#header .nav-link,.navbar-brand").css({ color: "black" });
        $("#header").css({ "background-color": "white" });
      }
    },
  });
}

// hover到圖片出現的效果
function product_hover(i) {
  $(" .show_item:nth-child(" + i + ")").on({
    mouseover: function () {
      $(" .show_item:nth-child(" + i + ") .si_label").toggleClass("color_none");
      $(" .show_item:nth-child(" + i + ") .si_pic").toggleClass("height_fill");
      $(" .show_item:nth-child(" + i + ") .si_cover").toggleClass("bg_show");
      $(".show_item:nth-child(" + i + ") .wish_icon").show();
    },
    mouseout: function () {
      $(" .show_item:nth-child(" + i + ") .si_label").toggleClass("color_none");
      $(" .show_item:nth-child(" + i + ") .si_pic").toggleClass("height_fill");
      $(" .show_item:nth-child(" + i + ") .si_cover").toggleClass("bg_show");
      if (is_collect[i - 1] == true) {
        $(".show_item:nth-child(" + i + ") .wish_icon").show();
      } else {
        $(".show_item:nth-child(" + i + ") .wish_icon").hide();
      }
    },
  });
}
//加入收藏效果變換
function product_collect(i) {
  $(".show_item:nth-child(" + i + ") .si_cover .wish_icon").click(function (
    event
  ) {
    if (is_collect[i - 1] == false) {
      is_collect[i - 1] = true;
      $(".show_item:nth-child(" + i + ") .si_cover .wish_icon img").attr({
        src: "./image/icon/05_wishlist_click.png",
      });
    } else {
      is_collect[i - 1] = false;
      $(".show_item:nth-child(" + i + ") .si_cover .wish_icon img").attr({
        src: "./image/icon/05_wishlist_gray.png",
      });
    }
    event.stopPropagation();
  });
}
