<div class="container-fluid car-detail-component" id="carDetailDiv" style="display:none">
    
    <i class="fa fa-close cr-closeBtn cursor btn" id="crDetailClose"></i><!-- Close Button -->
    <div class="row">
        <div class="col-sm-3">
            <ul class="cr-tab list-group">
                <a href="javascript:void(0)" class="carLink list-group-item active" onclick="openCar(event, 'carDetails')" id="defaultOpen">Car Details</a>
                <a href="javascript:void(0)" class="carLink list-group-item" onclick="openCar(event, 'addEquipment')">Add Equipment</a>
                <a href="javascript:void(0)" class="carLink list-group-item" onclick="openCar(event, 'rateDetail')">Rate Details</a>
            </ul>
        </div>
        <div class="col-sm-9">
            <div class="row">
                <div class="carDetails" id="carDetails">
                    <div class="col-sm-12">
                        <h2>Car Details</h2>
                    
                        <div>
                            <span class="head">Vehicle Provider:</span> Sixt
                        </div>
                        <div>
                            <span class="head">Pick-up:</span> Khimky Moscow Area, RU, Thursday, Jan 25, 2018 / 05:10 PM Hours
                        </div>
                        <div>
                            <span class="head">Drop-off:</span> Same as Pick-up location,  Wednesday, Feb 28, 2018 / 04:50 AM Hours
                        </div> 
                        
                        
                        <div class="row">
                            <div class="col-sm-7">
                                <br>
                                <br>
                                <div>
                                    <strong>Compact</strong><br>
                                    Ford Focus, VW Golf, Hyundai Elantra 4 doors 
                                </div>
                            </div>
                            <div class="col-sm-5 text-right">
                                <img class="img-responsive" src="/assets/crosssell-images/car-images/car-image-4.png" alt="Car Image">
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="addEquipment carDetails" id="addEquipment" style="display:none;">
                    <div class="col-sm-12">
                        <h2>Add Equipment</h2>
                        <div class="row">
                            <div class="col-sm-4"><label><input type="checkbox"> CHILD SEAT/UP TO AGE 3</label></div>
                            <div class="col-sm-4"><label><input type="checkbox"> CHILD SEAT/UP TO AGE 3</label></div>
                            <div class="col-sm-4"><label><input type="checkbox"> CHILD SEAT/UP TO AGE 3</label></div>
                        </div>
                    </div>
                </div>

                <div class="rateDetails carDetails" id="rateDetail" style="display:none;">
                    <div class="col-sm-12">
                        <h2>Rate Details</h2>
                        <div class="row">
                            <div class="col-sm-6">Base Rental Price: </div>
                            <div class="col-sm-6 text-right">$1,025.83</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6"> Taxes and Surcharges</div>
                            <div class="col-sm-6 text-right">$218.40</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6"><strong>Subtotal:</strong> (RUB73729.18 <a class="view-details" href="#">View Details</a>) </div>
                            <div class="col-sm-6 text-right">$1,244.23</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">Booking Fee: </div>
                            <div class="col-sm-6 text-right">$15.00</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">Booking Credit: </div>
                            <div class="col-sm-6 text-right">- $8.00</div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-6">Estimated Total: </div>
                            <div class="col-sm-6 text-right">$1,251.23</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <hr>
    <div class="row crPayble-continer">
        <div class="col-sm-8">
            <h1>Payable Now</h1>
            <div class="text1"><strong>Payable At Rental Desk</strong></div>
        </div>
        <div class="col-sm-4 text-right">
            <h1>$7.00</h1>
            <div class="text1"><strong>$1,246.66</strong></div>
        </div>
    </div>

    <hr>
    <div class="row crTotal-continer">
        <div class="col-sm-8">
            <h2>Total Car Rental</h2>
            <div>
                <strong>Cancel and Refund Policy</strong><br>
                In the event of cancellation any booking fee already paid is non-refundable.

            </div>
        </div>
        <div class="col-sm-4 text-right">
            <div class="cr-total-price">
                <strong>$1,251.23</strong>
            </div>
        </div>
    </div>

</div>


<script>

function openCar(carEvent, carName) {
    console.log(carEvent);
    var car, carContent, carLink;
    carContent = document.getElementsByClassName("carDetails");
    carLink = document.getElementsByClassName("carLink");

    for (i = 0; i < carContent.length; i++) {
        carContent[i].style.display = "none";
    }

    for (i = 0; i < carLink.length; i++) {
        carLink[i].className = carLink[i].className.replace("active", " ");
    }
    document.getElementById(carName).style.display = "block";
    carEvent.currentTarget.className += " active";
}


$(document).ready(function(){
    $("#showDetails").click(function(){
        $("#carDetailDiv").fadeIn();
        //$('body').css('overflow','hidden');
        
        $('#crDetailClose').click(function(){
            $(this).parent().fadeOut();
            //$('body').css('overflow','visible');
        })
    })
})






</script>