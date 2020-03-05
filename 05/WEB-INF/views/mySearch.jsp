 <ul class="dropdown-menu hist">
              
                  <li class="histry"  ng-repeat="stops in newarr | limitTo: -3"><a href="#" style="cursor: pointer;" ng-click="submitSearch(stops)"> 
				<div class="history_icon"> 
				<i class="fa fa-plane" ng-if="stops.OriginAirport" aria-hidden="true" style="cursor: pointer;" ng-click="submitSearch(stops)"></i>
				<i class="fa fa-hotel" ng-if="stops.stayCity" aria-hidden="true" style="cursor: pointer;" ng-click="submitSearch(stops)"></i>
				</div>
				<div class="history_info" ng-if="stops.OriginAirport"> 
				<div class="item-title">{{stops.OriginAirport.CityCode}} to {{stops.DestinationAirport.CityCode}}</div>
                <p class="item-date">{{stops.TravelDate | date: 'EEE, MMM-dd'}} <span ng-if="stops.TripType == '2'" style="font-weight: 300 !important; font-size: 14px !important;">- {{stops.ReturnDate | date: 'EEE, MMM-dd'}}</span></p>
                <p class="item-date" ng-if="stops.TripType == '1'">One Way</p>
                 <p class="item-date" ng-if="stops.TripType == '2'">Round trip</p>
               	</div>
               	<div class="history_info" ng-if="stops.stayCity"> 
				<div class="item-title">{{stops.stayCity}}</div>
                <p class="item-date">{{stops.checkInDate | date: 'EEE, MMM-dd'}} <span style="font-weight: 300 !important; font-size: 14px !important;">- {{stops.checkOutDate | date: 'EEE, MMM-dd'}}</span></p>
               
               	</div>
				<div class="history_click"> <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div>
				</a></li>
			
              </ul>