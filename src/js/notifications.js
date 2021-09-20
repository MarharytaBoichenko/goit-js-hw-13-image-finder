 import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { notice, error } from '@pnotify/core';


// // Automatically set the type.
// const myNotice = (noticeText) => notice({
//     text: noticeText,
// });
function showNotice(noticeText) {
    notice({
        text: noticeText,
        delay: '2000'
    })
}



const showError = (ErrorText) => error({
    text: ErrorText,
    delay: '2000'
});
export {showNotice, showError}