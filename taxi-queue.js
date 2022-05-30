function TaxiQueue() {
     var passenger = 0;
	 var passengerLeaves = 0;
	 var taxi = 0;

	function joinQueue() {
		if(passenger){
			passenger ++;
		}
   
	}

	function leaveQueue() {
       if(passengerLeaves){
		   passenger.pop()
	   }
	}

	function joinTaxiQueue() {
      if(taxi){
      taxi ++;
	  }
	}

	function queueLength() {
     return joinQueue.length;
	}

	function taxiQueueLength() {
     return joinTaxiQueue.length;
	}

	function taxiDepart(){
    if(taxi){
     taxi --;
	} 
    else if (taxi){
		joinQueue.pop(12);
	}
}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}