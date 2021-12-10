var tripCost = uberCost(5, 2);

function uberCost(milesTraveled, pickupTime) {
    var baseFare = 2.50;
    var costPerMile = 2.00;
    var nightSurcharge = 0.50; 

    var cost = baseFare + (costPerMile * milesTraveled);


    if (pickupTime >= 20 || pickupTime < 6) {
        cost += nightSurcharge;
    }

    return cost;
}
