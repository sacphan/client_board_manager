
var listRecipientInfo = [];

$("#updateRecipient").click(function () {
    if ($("#RecipientForm").valid()) {
       
        var FullName = $("#fullname").val();
        var Phone = $("#phone").val();
        var Add1 = $("#address").val();
        var CityId = $("#province").val();
        var DistrictId = $("#district").val();
        var WardId = $("#ward").val();
        var id = $("#idRecipientInfo").val();     
        var checkAllowUpdateShippingInfo = $("#checkAllowUpdateShippingInfo").is(":checked");     
        var recipientsInfo =
        {
            FullName: FullName,
            Phone: Phone,
            Add1: Add1,
            CityId: CityId,
            DistrictId: DistrictId,
            WardId: WardId,
            id: id
        }

        $.ajax({
            url: "/ManageCustomer/UpdateRecipientAndShippingInfo",
            type: "POST",
            dataType: "json",
            data:
            {
                recipientsInfo: recipientsInfo,
                checkAllowUpdateShippingInfo: checkAllowUpdateShippingInfo
            },
            success: function (result) {
                console.log(result)
                if (result.Code == 0) {
                    if (checkAllowUpdateShippingInfo) {
                        toastr.success('Recipient Info and Shipping Info', 'Update Success')
                    }
                    else {
                        toastr.success('Recipient Info', 'Update Success')
                    }
                    
                }
                else {
                    toastr.error('Recipient Info', 'Update Failed!')
                }

            },
            error: function (err) {
                toastr.error('Recipient Info', 'Update Failed!')
            }
        });
        $("#closeRecipientForm").click();
    }

})

function resetPass(id, page, email) {
    $("#errorPassword").hide();
    $("#savechange1").removeAttr("onclick");
    $("#savechange1").attr("onclick", `resetPass1(${id},${page},"${email}")`);

}
function resetPass1(id, page, email) {


    var newPass = $("#NewPassword").val();
    var confirmPass = $("#ConfirmPassword").val()

    if (newPass != confirmPass) {
        $("#errorPassword").text(" Mật khẩu xác nhận không khớp");
        $("#errorPassword").removeAttr("class", "alert-success");
        $("#errorPassword").addClass("alert-danger");
        $("#errorPassword").show();
        return;
    }
    $.ajax({
        url: "/ManageCustomer/ResetPassword",
        type: "POST",
        data: { id: id, email: email, newPassword: newPass },
        dataType: "json",
        success: (function (result) {
            $("#errorPassword").text("Đổi mật khẩu thành công!");
            $("#errorPassword").removeAttr("class", "alert-danger");
            $("#errorPassword").addClass("alert-success");
            $("#errorPassword").show();
        })
    })
}
function uploadStatus(idStoreCustomer, page) {
    $("#savechange").removeAttr("onclick");
    $("#savechange").attr("onclick", `saveChanges(${idStoreCustomer},${page})`);
}
function saveChanges(idStoreCustomer, page) {
    var idStatus = $("input[name='status']:checked").val();

    $.ajax({
        url: "/ManageCustomer/UpdateStatus",
        type: "POST",
        data: { idStatus: idStatus, idStoreCustomer: idStoreCustomer },
        dataType: "json",
        success: (function (result) {
            TableSearchStoreCustomers(page);
            $("#close").click();
        })
    })
}

function TableSearchStoreCustomers(page) {
    var Keyword = $("#Keyword").val();
    var StartDate;
    if ($("#StartDate").val() == "") {
        StartDate = "";
    } else {
        StartDate = $("#StartDate").val() + " 11:59 AM";
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
function editStoreCustomer(id) {
    $("#btnSave-" + id).show();
    $("#btnCancel-" + id).show();
    $("#btnEdit-" + id).hide();
    $("#btnUpload-" + id).hide();
    $("#fullname-p-" + id).hide();
    $("#fullname-" + id).show();
    $("#Phone-p-" + id).hide();
    $("#Phone-" + id).show();
}
function CancelUpdate(id) {
    $("#btnEdit-" + id).show();
    $("#btnUpload-" + id).show();
    $("#btnSave-" + id).hide();
    $("#btnCancel-" + id).hide();
    $("#fullname-p-" + id).show();
    $("#fullname-" + id).hide();
    $("#Phone-p-" + id).show();
    $("#Phone-" + id).hide();
}

function export_to_excel(totalPage) {
    var StartDate;
    if ($("#StartDate").val() == "") {
        StartDate = "";
    } else {
        StartDate = $("#StartDate").val() + " 11:59 AM";
    }

    var EndDate;
    if ($("#EndDate").val() == "") {
        EndDate = "";
    } else {
        EndDate = $("#EndDate").val() + " 11:59 PM";
    }
    var Keyword = $("#Keyword").val();
    var Status = $("#Status").val();
    var StoreId = $("#StoreId").val();
    location.href = "/ManageCustomer/ExportToExcel?Keyword=" + Keyword + "&Status=" + Status + "&StoreId=" + StoreId + "&TotalPage=" + totalPage + "&StartDate=" + StartDate + "&EndDate=" + EndDate;
}
