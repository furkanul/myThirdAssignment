// 1st problem

function kilometerToMeter(kilometer){
    if(kilometer<0){
        return 'value cannot be negative';
    }
    return kilometer*1000;
}

// 2nd problem

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return " Please Input Positive Numbers";

    } else if (watch == (null || undefined) || phone == (null || undefined) || laptop == (null || undefined)) {
        return "Price Can't be a Null Value";
    }

    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var total = (watchPrice * watch) + (phonePrice * phone) + (laptopPrice * laptop)
    return total;
}

// 3rd problem

function hotelCost(totalStayingDays) {
    if (totalStayingDays < 1) {
        return "Please enter how many day you want to stay";
    }

    var firstTenDays = 100;
    var secondsTenDays = 80;
    var afterSecondDays = 50;

    if (totalStayingDays >= 1 && totalStayingDays <= 10) {
        var totalHotelCost = totalStayingDays * firstTenDays;
        return totalHotelCost;

    } else if (totalStayingDays >= 11 && totalStayingDays <= 20) {
        var costOfFirstTenDays = 10 * firstTenDays;
        var costOfReminingDays = (totalStayingDays - 10) * secondsTenDays;
        var totalHotelCost = costOfFirstTenDays + costOfReminingDays;
        return totalHotelCost;

    } else {
        var costOfFirstTenDays = 10 * firstTenDays;
        var costOfSecondTenDays = 10 * secondsTenDays;
        var costOfReminingDays = (totalStayingDays - 20) * afterSecondDays;
        var totalHotelCost = costOfFirstTenDays + costOfSecondTenDays + costOfReminingDays;
        return totalHotelCost;
    }
}

// 4th problem

function megaFriend(friends) {
    var megaLength = 0;
    var resultName = '';
    for (var i = 0; i < friends.length; i++) {
        var name = friends[i];

        if (name != null && name != undefined) { // Handling Error Causes by null and undefined
            if (name.length > megaLength) {
                megaLength = name.length;
                resultName = name;
            }
        }
    }
    return resultName;
}