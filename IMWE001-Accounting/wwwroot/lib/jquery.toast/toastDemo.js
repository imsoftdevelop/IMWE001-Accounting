(function ($) {
    showWariningToast = function () {
        resetToastPosition();
        $.toast({
            heading: '<i class=" icon-info jq-iconcol-warning px-2 py-1"></i> ไม่สามารถบันทึกได้ เนื่องจากข้อมูลไม่ถูกต้อง/ไม่ครบถ้วน',
            text: '<p class="jq-toast-text">1. กรุณาเลือกผู้ติดต่อ</p>',
            showHideTransition: 'slide',
            icon: 'warning',
            loaderBg: '#ffcf55',
            position: 'top-center'
        })
    };
    showSuccessToast = function () {
        resetToastPosition();
        $.toast({
            heading: '<i class= "fa fa-check-circle jq-iconcol-success px-2 py-1" ></i> บันทึกข้อมูลสำเร็จ',
            text: '',
            showHideTransition: 'slide',
            icon: 'success',
            loaderBg: '#46c35f',
            position: 'top-center'
        })
    };
    resetToastPosition = function () {
        $('.jq-toast-wrap').removeClass('bottom-left bottom-right top-left top-right top-center'); // to remove previous position class
        $(".jq-toast-wrap").css({
            "top": "",
            "left": "",
            "bottom": "",
            "right": ""
        }); //to remove previous position style
    }
})(jQuery);