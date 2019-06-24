function sortSelectPickerOptions(selector){
    var select_options = $(selector + ' option');

    select_options.sort(function (a, b) {
        if (b.text.indexOf("Select City") === 0 || a.text.indexOf("Select City") === 0) {
//                        alert(b.text.toLowerCase());
            return 1;
        }
        if (a.text.toLowerCase() > b.text.toLowerCase())
            return 1;
        else if (a.text.toLowerCase() < b.text.toLowerCase())
            return -1;
        else
            return 0;
    });
    
    $(selector).empty().append(select_options).selectpicker("refresh").selectpicker('deselectAll');
}

sortSelectPickerOptions( 'select[name="select_name'"]' );
