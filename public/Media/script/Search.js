$().ready(function () {
    
    TableSearchPackageResult(1);
})
$("#clicksearch").click(function () {
    TableSearchPackageResult(1);
});
$("#Status").change(function () {
    TableSearchPackageResult(1);
})
$("#StoreId").change(function () {
    TableSearchPackageResult(1);
})
$("#IsCod").change(function () {
    TableSearchPackageResult(1);
})
$("#IsConfirm").change(function () {
    TableSearchPackageResult(1);
})
$('#Keyword').keypress(function (event) {

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        TableSearchPackageResult(1);
    }
});
$("#clickSearch1").click(function () {
    TableSearchPackageResult(1);
});
function TableSearchPackageResult(page) {
    // ai có sửa hàm này thì qua chỗ _TableSearchPackageResult.cshtml kéo xuống dưới cùng sửa bên đó nữa nha bên đó có cái hàm như này nữa. 
    // If you fix this function, you will go to _TableSearchPackageResult.cshtml and fix same function at the bottom. 
    var Keyword = $("#Keyword").val();
    var StartDate;
    if ($("#StartDate").val() == "") {
        StartDate = "";
    } else {
        StartDate = $("#StartDate").val() + " 12:00 AM";
    }
    if ($("#EndDate").val() == "") {
        EndDate = "";
    } else {
        var EndDate = $("#EndDate").val() + " 11:59 PM";
    }

    var EndDate = $("#EndDate").val() + " 11:59 PM";
    var Status = $("#Status").val();
    var StoreId = $("#StoreId").val();
    var TypeDateSearch = $("#TypeDateSearch").val();
    var IsCod = $("#IsCod").val();
    var IsConfirm = $("#IsConfirm").val();
    $.ajax({
        url: "/Admin/SearchPackage",
        type: "POST",
        data: { Keyword: Keyword, Status: Status, StoreId: StoreId, Page: page, StartDate: StartDate, EndDate: EndDate, TypeDateSearch: TypeDateSearch, IsCod: IsCod, IsConfirm: IsConfirm },
        dataType: "html",
        success: (function (result) {
            $("#content").html(result);
        })
    })
}
function export_to_excel() {
    var StartDate;
    if ($("#StartDate").val() == "") {
        StartDate = "";
    } else {
        StartDate = $("#StartDate").val() + " 12:00 AM";
    }

    var EndDate;
    if ($("#EndDate").val() == "") {
        EndDate = "";
    } else {
        EndDate = $("#EndDate").val() + " 11:59 PM";
    }
    var TotalPackage = $("#totalPackage").val();
   
    var Keyword = $("#Keyword").val();
    var Status = $("#Status").val();
    var StoreId = $("#StoreId").val();
    var TypeDateSearch = $("#TypeDateSearch").val();
    var IsCod = $("#IsCod").val();
    var IsConfirm = $("#IsConfirm").val();
    location.href = "/Admin/ExportToExcel?Keyword=" + Keyword + "&Status=" + Status + "&StoreId=" + StoreId + "&TotalPackage=" + TotalPackage + "&StartDate=" + StartDate + "&EndDate=" + EndDate + "&TypeDateSearch=" + TypeDateSearch + "&IsCod=" + IsCod + "&IsConfirm=" + IsConfirm;

}
