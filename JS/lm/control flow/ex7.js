const seats = [[1,"booked"],[2,"booked"],[3,"booked"],[4,"booked"],[5,"available"],[6,"booked"],[7,"booked"],[8,"available"]]

for (let i = 0; i < seats.length; i++) {
        if(seats[i][1]==="available"){
             console.log(`Seat No: ${seats[i][0]} is available`);
            break  
        }
    }
    