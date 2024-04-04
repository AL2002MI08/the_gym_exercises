function validatePhoneNumber(phoneNumber) {
    let cellNumber = '';
    for (let i = 0; i < phoneNumber.length; i++) {
        if (!isNaN(phoneNumber[i])) {
            cellNumber += phoneNumber[i];
        }
    }
    if (cellNumber.length !== 10) {
        return false;
    }
    if (
        cellNumber.slice(0, 3) !== '' && 
        cellNumber.slice(3, 6) !== '' && 
        cellNumber.slice(6, 10) !== ''
    ) {
        return true;
    }

    return false;
}
console.log(validatePhoneNumber([0, 7, 8, 9, 6, 7, 3, 9, 9]))

// function validatePhoneNumber(phoneNumber) {
//     let cleanPhoneNumber = '';
//     for (let i = 0; i < phoneNumber.length; i++) {
//         !isNaN(phoneNumber[i]) ? cleanPhoneNumber += phoneNumber[i] : '';
//     }

//     return cleanPhoneNumber.length === 10 && 
//            cleanPhoneNumber.slice(0, 3) !== '' && 
//            cleanPhoneNumber.slice(3, 6) !== '' && 
//            cleanPhoneNumber.slice(6, 10) !== '';
// }