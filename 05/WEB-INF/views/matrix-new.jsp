
		   <div class="matrix-content">
              
                <div class="left" ng-repeat="item in Newmatrix | limitTo: -1">
                   <div class="filter-bg">
                    <div class="filter-label height45">Airlines </div>
                    <div class="filter-label" ng-if="item.legs != 0"> Non Stop</div>
                    <div class="filter-label" ng-if="item.slegs != 0"> 1 Stop </div>
                    <div class="filter-label twostop" ng-if="item.tlegs != 0" id="twoStopLabel"> 2+ Stops </div> 
                  </div>
              </div>
                <div class="right">
				
				<div class="matrix-slider row-flex">
				
                   <div class="matrix-list-data" ng-repeat="item in Newmatrix | startFrom:currentPage*pageSize | limitTo:pageSize">
                      <div class="filter-logo" ng-if="item.multi == '0'" ng-click="airlineShow(item.airlineName)" ng-switch on="item.airlineName">
                        <div class="text-center" ng-switch-when="DLL"><img src="/resources/images/airline/mal_s.png" alt="Major Airlines" title="Major Airlines"></div>
                         <div class="text-center" ng-switch-default><img src="/resources/images/airline/{{item.airlineName|lowercase}}.gif" alt="{{getAirlineName(item.airlineName)}}" title="{{getAirlineName(item.airlineName)}}"></div>
                         <span ng-switch on="item.airlineName">
                        
                         <a href="#" ng-switch-when="CCF" style="text-transform: capitalize;">Call Center Fares</a>
                          <a href="#" ng-switch-when="DLL" style="text-transform: capitalize;">Major Airlines</a>
                           <a href="#" ng-switch-default style="text-transform: capitalize;">{{getAirlineName(item.airlineName) | lowercase}}</a>
                         </span>
                        
                     </div>
                     <div class="filter-logo" ng-if="item.multi != '0'" ng-click="airlineShow(item.airlineName+'M')" ng-switch on="item.airlineName">
                       <div class="text-center" ng-switch-when="DLL"><img src="/resources/images/airline/mal_s.png" alt="Major Airlines" title="Major Airlines"><span><sup class="matrix-airline-icon"><img src="/resources/flight-result/images/matrix-airline.png" title="Multiple Airlines" /></sup></span></div>
                        <div class="text-center" ng-switch-default><img src="/resources/images/airline/{{item.airlineName|lowercase}}.gif" alt="{{getAirlineName(item.airlineName)}}" title="{{getAirlineName(item.airlineName)}}"><span><sup class="matrix-airline-icon"><img src="/resources/flight-result/images/matrix-airline.png" title="Multiple Airlines" /></sup></span></div>
                       <span ng-switch on="item.airlineName">
                        
                         <a href="#" ng-switch-when="CCF" style="text-transform: capitalize;">Call Center Fares</a>
                          <a href="#" ng-switch-when="DLL" style="text-transform: capitalize;">Major Airlines <sup>(+)</sup></a>
                           <a href="#" ng-switch-default style="text-transform: capitalize;">{{getAirlineName(item.airlineName) | lowercase}} <sup>(+)</sup></a>                       </span>                     </div>
                       <div class="non-stop one-stop" ng-switch on="item.nonStopPrice" ng-if="item.legs != 0">
                       <span ng-switch-when="0">
      					-
    					</span>
    					<span ng-switch-default>
                      
                        <div class="total-price" ng-if="item.multi != '0'" ng-click="priceShow(item.nonStopPrice,item.airlineName+'M','0')"><i class="fa fa-{{dollar}}"></i>{{item.nonStopPrice * conversionRatio | number:2}}</div> 
                        <div class="total-price" ng-if="item.multi == '0'" ng-click="priceShow(item.nonStopPrice,item.airlineName,'0')"><i class="fa fa-{{dollar}}"></i>{{(item.nonStopPrice)* conversionRatio | number:2}}</div> 
                        </span>
                      </div>
                       <div class="one-stop" ng-switch on="item.oneStopPrice" ng-if="item.slegs != 0">
                       <span ng-switch-when="0">
      					-
    					</span>
    					<span ng-switch-default>
                        
                          <div class="total-price" ng-click="priceShow(item.oneStopPrice,item.airlineName+'M','1')" ng-if="item.multi != '0'"><i class="fa fa-{{dollar}}"></i>{{item.oneStopPrice * conversionRatio | number:2}}</div> 
                          <div class="total-price" ng-click="priceShow(item.oneStopPrice,item.airlineName,'1')" ng-if="item.multi == '0'"><i class="fa fa-{{dollar}}"></i>{{(item.oneStopPrice) * conversionRatio | number:2}}</div>
                        </span>
                      </div>
                    <div class="non-stop one-stop" ng-switch on="item.twoStopPrice" ng-if="item.tlegs != 0" id="twoStopIdCol{{$index}}">
                       <span ng-switch-when="0" id="twoStopId{{$index}}"> -  </span>
    					<span ng-switch-default id="twoStopId{{$index}}">
                        
                        <div class="total-price" ng-click="priceShow(item.twoStopPrice,item.airlineName+'M','2')" ng-if="item.multi != '0'"><i class="fa fa-{{dollar}}"></i>{{item.twoStopPrice * conversionRatio | number:2}}</div>
                        <div class="total-price" ng-click="priceShow(item.twoStopPrice,item.airlineName,'2')" ng-if="item.multi == '0'"><i class="fa fa-{{dollar}}"></i>{{(item.twoStopPrice)* conversionRatio | number:2}}</div>
                       
                        </span>
                     </div> 
                     
                  </div>
				 
				  </div>
				  
              </div>
				
				
             </div>
		