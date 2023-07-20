function CloseFood() {
    document.getElementById("input_food2").style.display = "none";
    document.getElementById("scroll_height2").style.height = "450px";
  }

  function showAdd_food() {
    document.getElementById("scroll_height2").style.height = "280px";
    document.getElementById("addfood2").style.display = "block";
    document.getElementById("updatefood2").style.display = "none";
    document.getElementById("input_food2").style.display = "block";
    document.getElementById("foodAddNameInput").value = "";
    document.getElementById("foodAddNoteInput").value = "";
    document.getElementById("foodAddPriceInput").value = "";
    document.getElementById("foodAddImageInput").value = "";
  }

  var food = JSON.parse(localStorage.getItem("food"));
  document.getElementById("dem_food").innerHTML = food.length;

  var account = JSON.parse(localStorage.getItem("account"));
  document.getElementById("dem_cus").innerHTML = account.length;
  var paymentFood = JSON.parse(localStorage.getItem("paymentFood"));
  document.getElementById("dem_payment").innerHTML = paymentFood.length - 1;

  var commentCustomer = JSON.parse(localStorage.getItem("commentCustomer"));
  document.getElementById("dem_comment").innerHTML = commentCustomer.length - 1;

  // var paymentFood=[];

  var paymentFood = JSON.parse(localStorage.getItem("paymentFood"));
  if (paymentFood === null) {
    paymentFood = [];
    var paymentFood = [{}];
    localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
  }
  var idupFood = JSON.parse(localStorage.getItem("idupFood"));
  if (idupFood === null) {
    idupFood = [];
    var idupFood = 8;
    localStorage.setItem("idupFood", JSON.stringify(idupFood));
  }
  function AddFood() {
    var id = idupFood;
    var name = document.getElementById("foodAddNameInput").value;
    var note = document.getElementById("foodAddNoteInput").value;
    var price = document.getElementById("foodAddPriceInput").value;
    var image2 = document.getElementById("foodAddImageInput").value;
    var image = "image/" + image2.split("\\")[2];
    if (name != "" && price != "" && note != "" && image2 != "") {
      var pushFood = { id, name, price, note, image };
      food.push(pushFood);
      localStorage.setItem("food", JSON.stringify(food));
      idupFood++;
      localStorage.setItem("idupFood", JSON.stringify(idupFood));
      ManagementFood();
      console.log(food);

      var name = (document.getElementById("foodAddNameInput").value = "");
      var note = (document.getElementById("foodAddNoteInput").value = "");
      var price = (document.getElementById("foodAddPriceInput").value = "");
      var image = (document.getElementById("foodAddImageInput").value = "");
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  }

  function DeleteFood(id) {
    for (var i = 0; i < food.length; i++) {
      if (id == food[i].id) {
        food.splice(i, 1);

        localStorage.setItem("food", JSON.stringify(food));
        ManagementFood();
      }
    }
  }

  function UpdateFood(id) {
    for (var i = 0; i < food.length; i++) {
      if (id == food[i].id) {
        document.getElementById("input_food2").style.display = "block";
        document.getElementById("addfood2").style.display = "none";
        document.getElementById("updatefood2").style.display = "block";
        document.getElementById("txtId").value = food[i].id;
        document.getElementById("foodAddNameInput").value = food[i].name;
        document.getElementById("foodAddNoteInput").value = food[i].note;
        document.getElementById("foodAddPriceInput").value = food[i].price;
        document.getElementById("foodAddImageInput").value = food[i].image;
        break;
      }
    }
  }
  function SaveUpdateFood() {
    var idchange = document.getElementById("txtId").value;

    for (var i = 0; i < food.length; i++) {
      if (idchange == food[i].id) {
        food[i].name = document.getElementById("foodAddNameInput").value;
        food[i].price = document.getElementById("foodAddPriceInput").value;
        food[i].note = document.getElementById("foodAddNoteInput").value;
        var imageChange = document.getElementById("foodAddImageInput").value;
        localStorage.setItem("food", JSON.stringify(food));
        if (imageChange == "") {
        } else {
          var image1 = imageChange.split("\\")[2];
          food[i].image = image1;
        }

        if (food[i].type == 0 && imageChange != "") {
          food.splice(i, 1);
          localStorage.setItem("food", JSON.stringify(food));
          AddFood();
          ManagementFood();
        }
        ManagementFood();
        break;
      }
    }

    document.getElementById("foodAddNameInput").value = "";
    document.getElementById("foodAddNoteInput").value = "";
    document.getElementById("foodAddPriceInput").value = "";
    document.getElementById("foodAddImageInput").value = "";
    document.getElementById("addfood").style.display = "block";
    document.getElementById("updatefood").style.display = "none";
  }

  function ManagementFood() {
    document.getElementById("prinfManagementFood").innerHTML = "";
    var food = JSON.parse(localStorage.getItem("food"));
    for (let i = 0; i < food.length; i++) {
      var prinfManage =
        `<tr>
      <td><div>
        <div class="cart_img_box float-left bg-warning" style="width: 30%;height: 80px;">
          <img src="` +
        food[i].image +
        `" width="100%" height="100%">
        </div>
        <div class="cart_info_box float-left pl-3" style="width: 70%;height: 80px;">
          <p class="mb-1 font-weight-bold" style="font-size: 115%;">` +
        food[i].name +
        `</p>
          <p style="font-size: 85%">` +
        food[i].note +
        `</p>
        </div>
      </div> </td>
      
      <td class="text-center"><p class="mt-2" style="padding:5px;">` +
        food[i].price +
        `</p> </td>
      <td class="text-center">'<div class="btn btn-danger text-white ml-2" onclick="DeleteFood(` +
        food[i].id +
        `)" style="width: 16%;border-radius: 10px;"><i class="fa fa-trash" aria-hidden="true"></i></div>
  <div class="btn btn-warning  text-white mr-2" onclick="UpdateFood(` +
        food[i].id +
        `)" style="width: 16%;border-radius: 10px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div> </td>
</tr>`;
      document.getElementById("prinfManagementFood").innerHTML += prinfManage;
    }
  }

  function ManagementFood2() {
    document.getElementById("prinfManagementFood2").innerHTML = "";
    var food = JSON.parse(localStorage.getItem("food"));
    for (let i = 0; i < food.length; i++) {
      var prinfManage =
        `<tr>
      <td><div>
        <div class="cart_img_box float-left bg-warning" style="width: 30%;height: 80px;">
          <img src="` +
        food[i].image +
        `" width="100%" height="100%">
        </div>
        <div class="cart_info_box float-left pl-3" style="width: 70%;height: 80px;">
          <p class="mb-1 font-weight-bold" style="font-size: 115%;">` +
        food[i].name +
        `</p>
          <p style="font-size: 85%">` +
        food[i].note +
        `</p>
        </div>
      </div> </td>
      
      <td class="text-center"><p class="mt-2" style="padding:5px;">` +
        food[i].price +
        `</p> </td>
    
</tr>`;
      document.getElementById("prinfManagementFood2").innerHTML += prinfManage;
    }
  }

  function paymentPrinf() {
    document.getElementById("prinfPayment").innerHTML = "";

    var paymentFood = JSON.parse(localStorage.getItem("paymentFood"));
    for (let i = 1; i < paymentFood.length; i++) {
      var prinf_payment_cart =
        `<tr style="border-bottom:1px solid #ccc;">
      <td>
        <p>Recipient's Name: ` +
        paymentFood[i].name_customer +
        `</p>
        <p>Address: ` +
        paymentFood[i].address_customer +
        `</p>
        <p>Phone Number: ` +
        paymentFood[i].phone_customer +
        `</p>
        <p>Bank: ` +
        paymentFood[i].bank +
        `</p>
      </td>

      
      <td>` +
        paymentFood[i].showDetailOrder +
        `<p id="commentPrinfPayment` +
        paymentFood[i].id_payment +
        `"></p></td>
      <td class="text-center">` +
        paymentFood[i].priceTotal +
        `</td>
      <td class="text-center"><button id="status_prinf` +
        paymentFood[i].id_payment +
        `" onclick="verify_payment(` +
        paymentFood[i].id_payment +
        `)" class="btn btn-warning text-white">` +
        paymentFood[i].status +
        `</button></td>
    </tr>
    `;
      document.getElementById("prinfPayment").innerHTML += prinf_payment_cart;
    }
  }

  function paymentPrinfDash() {
    document.getElementById("prinfPaymentDash").innerHTML = "";

    var paymentFood = JSON.parse(localStorage.getItem("paymentFood"));
    for (let i = 1; i < paymentFood.length; i++) {
      var prinf_payment_cart =
        `<tr style="border-bottom:1px solid #ccc;">
      
      <td>` +
        paymentFood[i].showDetailOrder +
        `</td>
 
     
    </tr>
    `;
      document.getElementById("prinfPaymentDash").innerHTML +=
        prinf_payment_cart;
    }
  }

  function verify_payment(id) {
    for (let i = 0; i < paymentFood.length; i++) {
      if (id == paymentFood[i].id_payment) {
        paymentFood[i].status = "Đang giao hàng";
        localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
        document.getElementById("status_prinf" + id).innerHTML =
          paymentFood[i].status;
      }
    }
  }

  function commentPrinf() {
    document.getElementById("commentPrinf").innerHTML = "";

    var commentCustomer = JSON.parse(localStorage.getItem("commentCustomer"));
    var account = JSON.parse(localStorage.getItem("account"));
    for (let i = 1; i < commentCustomer.length; i++) {
      var prinf_comment =
        `<td>` +
        commentCustomer[i].idPayment +
        `</td>
    <td>` +
        account[commentCustomer[i].idUser].username +
        `</td>
    <td>` +
        commentCustomer[i].content_comment +
        `</td>
    `;
      document.getElementById(
        "commentPrinfPayment" + commentCustomer[i].idPayment
      ).innerHTML = "Customer Feedback: " + commentCustomer[i].content_comment;
      document.getElementById("commentPrinf").innerHTML += prinf_comment;
    }
  }

  function CloseUser() {
    document.getElementById("input_user").style.display = "none";
    document.getElementById("scroll_height").style.height = "450px";
  }

  function showAddUser() {
    document.getElementById("scroll_height").style.height = "280px";
    document.getElementById("addUser").style.display = "block";
    document.getElementById("updateUser").style.display = "none";
    document.getElementById("input_user").style.display = "block";
    document.getElementById("input_change_user").style.display = "none";
    document.getElementById("foodAddNameInput").value = "";
    document.getElementById("foodAddNoteInput").value = "";
    document.getElementById("foodAddPriceInput").value = "";
    document.getElementById("foodAddImageInput").value = "";
  }
  var account_info = [];
  // var account_info =JSON.parse(localStorage.getItem('account_info'));
  if (account_info === null) {
    account_info = [];
  }
  var account = [];
  var account = JSON.parse(localStorage.getItem("account"));
  if (account === null) {
    account = [];
  }
  var idChangeUser = 0;
  function editUserAdmin(id) {
    var account_info = JSON.parse(localStorage.getItem("account_info"));
    document.getElementById("input_user").style.display = "none";
    document.getElementById("input_change_user").style.display = "block";

    for (var i = 1; i < account_info.length; i++) {
      if (id == account_info[i].accountPayment) {
        idChangeUser = account_info[i].accountPayment;
        document.getElementById("txtId").value = i;
        document.getElementById("userNameChangeInput").value =
          account_info[i].name_customer;
        document.getElementById("addressChangeInput").value =
          account_info[i].address_customer;
        document.getElementById("phoneChangeInput").value =
          account_info[i].phone_customer;
        document.getElementById("bankChangeInput").value = account_info[i].bank;

        break;
      }
    }
  }

  function SaveUserAdmin() {
    var account_info = JSON.parse(localStorage.getItem("account_info"));
    for (var i = 0; i < account_info.length; i++) {
      if (idChangeUser == account_info[i].accountPayment) {
        account_info[i].name_customer = document.getElementById(
          "userNameChangeInput"
        ).value;
        account_info[i].address_customer =
          document.getElementById("addressChangeInput").value;
        account_info[i].phone_customer =
          document.getElementById("phoneChangeInput").value;
        account_info[i].bank = document.getElementById("bankChangeInput").value;
        localStorage.setItem("account_info", JSON.stringify(account_info));

        ManagementUser();

        break;
      }
    }

    document.getElementById("userNameChangeInput").value = "";
    document.getElementById("addressChangeInput").value = "";
    document.getElementById("phoneChangeInput").value = "";
    document.getElementById("bankChangeInput").value = "";
  }

  var idup = JSON.parse(localStorage.getItem("idup"));
  function AddUser() {
    var checkUsername = 0;
    var id = idup;
    var username = document.getElementById("userNameAddInput").value;
    var password = document.getElementById("passwordAddInput").value;
    var repassword = document.getElementById("rePasswordAddInput").value;
    var level = 0;
    if (
      username != "" &&
      password != "" &&
      repassword != "" &&
      password == repassword
    ) {
      for (let i = 0; i < account.length; i++) {
        if (account[i].username == username) {
          alert("ten tai khoan đã tồn tại");

          checkUsername = 1;
          break;
        }
      }
      if (checkUsername == 0) {
        accountSignupAdmin = { id, username, password, level };
        account.push(accountSignupAdmin);
        localStorage.setItem("account", JSON.stringify(account));
        idup++;
        localStorage.setItem("idup", JSON.stringify(idup));
        console.log(account);
        alert("dang ky thanh cong");
        ManagementUser();
      }
    } else {
      alert("chua thanh cong");
    }
  }

  function deleteUserAdmin(id) {
    var account = JSON.parse(localStorage.getItem("account"));
    for (var i = 0; i < account.length; i++) {
      if (id == account[i].id) {
        account.splice(i, 1);
        localStorage.setItem("account", JSON.stringify(account));
        ManagementUser();
        break;
      }
    }
  }

  function ManagementUser() {
    document.getElementById("prinfManagementUser").innerHTML = "";
    var account = JSON.parse(localStorage.getItem("account"));
    for (let i = 0; i < account.length; i++) {
      var prinfManage =
        `<div class="col-4" style="height: 100px;padding:10px; padding-right:50px;">
      <div class="user_info_admin float-left" style="width: 60%">
        <p class="font-weight-bold" style="font-size: 120%">` +
        account[i].username +
        `</p>
        <p>Order - 3</p>
      </div>
      <div class="user_function_admin float-right" style="width: 40%;display: flex;">
      <div class="btn btn-warning mr-1 text-white" onclick="editUserAdmin(` +
        account[i].id +
        `)" style="width: 40%;border-radius: 10px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
        <div class="btn btn-danger text-white" onclick="deleteUserAdmin(` +
        account[i].id +
        `)" style="width: 40%;border-radius: 10px;"><i class="fa fa-trash" aria-hidden="true"></i></div>

  
    </div></div>`;
      document.getElementById("prinfManagementUser").innerHTML += prinfManage;
    }
  }
  function onloadAll1() {
    paymentPrinf();
    ManagementFood();
    paymentPrinfDash();
    ManagementFood2();
    commentPrinf();
    ManagementUser();
  }

  $(document).ready(function () {
    $("#add_food3").click(function () {
      $("#management_food").css("font-weight", "bold");
      $("#dashboard_text").css("font-weight", "400");
      $("#management_order").css("font-weight", "400");
      $("#management_user").css("font-weight", "400");

      $("#management_food_box").css("display", "block");
      $("#dashboard_box").css("display", "none");
      $("#management_food_order").css("display", "none");
      $("#management_user_box").css("display", "none");
    });
  });

  $(document).ready(function () {
    $("#management_food").click(function () {
      $("#management_food").css("font-weight", "bold");
      $("#dashboard_text").css("font-weight", "400");
      $("#management_order").css("font-weight", "400");
      $("#management_user").css("font-weight", "400");

      $("#management_food_box").css("display", "block");
      $("#dashboard_box").css("display", "none");
      $("#management_food_order").css("display", "none");
      $("#management_user_box").css("display", "none");
    });
  });
  $(document).ready(function () {
    $("#dashboard_text").click(function () {
      $("#dashboard_text").css("font-weight", "bold");
      $("#management_order").css("font-weight", "400");
      $("#management_user").css("font-weight", "400");
      $("#management_food").css("font-weight", "400");

      $("#management_food_box").css("display", "none");
      $("#dashboard_box").css("display", "block");
      $("#management_food_order").css("display", "none");
      $("#management_user_box").css("display", "none");
    });
  });
  $(document).ready(function () {
    $("#management_order").click(function () {
      $("#management_order").css("font-weight", "bold");
      $("#management_user").css("font-weight", "400");
      $("#management_food").css("font-weight", "400");
      $("#dashboard_text").css("font-weight", "400");

      $("#management_food_box").css("display", "none");
      $("#dashboard_box").css("display", "none");
      $("#management_food_order").css("display", "block");
      $("#management_user_box").css("display", "none");
    });
  });
  $(document).ready(function () {
    $("#management_user").click(function () {
      $("#management_user").css("font-weight", "bold");
      $("#management_food").css("font-weight", "400");
      $("#dashboard_text").css("font-weight", "400");
      $("#management_order").css("font-weight", "400");

      $("#management_food_box").css("display", "none");
      $("#dashboard_box").css("display", "none");
      $("#management_food_order").css("display", "none");
      $("#management_user_box").css("display", "block");
    });
  });