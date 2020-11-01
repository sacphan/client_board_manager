$().ready(function () {
    TableSearchStoreCustomers(1);
})
$("#clicksearch").click(function () {
    TableSearchStoreCustomers(1);
});
$("#Status").change(function () {
    TableSearchStoreCustomers(1);
})
$("#StoreId").change(function () {
    TableSearchStoreCustomers(1);
})
$('#Keyword').keypress(function (event) {

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        TableSearchStoreCustomers(1);
    }
});
$("#clickSearch1").click(function () {

    TableSearchStoreCustomers(1);
});
function TableSearchStoreCustomers(page) {
    var Keyword = $("#Keyword").val();
    var StartDate;
    if ($("#StartDate").val() == "") {
        StartDate = "";
    } else {
        StartDate = $("#StartDate").val() + " 00:00 AM";
    }
   
    var EndDate;
    if ($("#EndDate").val() == "") {
        EndDate = "";
    } else {
        var EndDate = $("#EndDate").val() + " 11:59 PM";
    }

   
    var Status = $("#Status").val();
    var StoreId = $("#StoreId").val();
    $.ajax({
        url: "/ManageCustomer/SearchStoreCustomer",
        type: "POST",
        data: { keyword: Keyword, status: Status, store: StoreId, page: page, StartDate: StartDate, EndDate: EndDate },
        dataType: "html",
        success: (function (result) {
            $("#content").html(result);
        })
    })
}
