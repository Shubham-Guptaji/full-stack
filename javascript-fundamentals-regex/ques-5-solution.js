const deliverytime = (package) => {
    let timedata;
    switch(package){
        case 'standard' :
            timedata = 'Delivery might take 3-5 days';
        break;
        case 'express' :
            timedata = 'Delivery might take 1-2 days';
        break;
        case 'overnight' :
            timedata = 'Delivery would be done next day';
        break;
        default :
            timedata = 'Wrong package selected';
    }
    return timedata;
}

console.log(deliverytime('standard'));
console.log(deliverytime('express'));
console.log(deliverytime('overnight'));
console.log(deliverytime('shigraatishigra'))