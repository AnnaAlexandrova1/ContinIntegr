function calculateTotal(purchases, applydiscount){
    let result = 0
    for (let i = 0; i < purchases.length; i++) {
        result +=purchases[i].count * purchases[i].price;
    }
    if(applydiscount){
        return result;  
    }
    else {
   return result;
    }
}

module.exports = {
    calculateTotal
}