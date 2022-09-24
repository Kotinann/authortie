import helloWorld from "./scripts/helloWorld";
import Prism from "prismjs";
import helloWorld from "./scripts/helloWorld";
import Prism from "prismjs";

import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-scss";
/*= ============== PASSWORD =============== */
$('body').on('click', '.menu__password-control', function(){
    if ($('#password-input').attr('type') == 'password'){
        $(this).addClass('view');
        $('#password-input').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('#password-input').attr('type', 'password');
    }
    return false;
});