import React from "react";

import "./PickAlgorithm.css";

const PickAlgorithm = () => {

  return (
<div class="section over-hide">
				<div class="row justify-content-center ">
					<div class="col-xl-10 pb-5">
						<input class="checkbox-budget" type="radio" name="budget" id="budget-1" checked/>
						<label class="for-checkbox-budget" for="budget-1">
							<span data-hover="Dijkstra">Dijkstra</span>
						</label><input class="checkbox-budget" type="radio" name="budget" id="budget-2"/>
						<label class="for-checkbox-budget" for="budget-2">							
							<span data-hover="A* (A-Star) ">A*  (A-Star)</span>
						</label><input class="checkbox-budget" type="radio" name="budget" id="budget-3"/>
						<label class="for-checkbox-budget" for="budget-3">							
							<span data-hover="Breadth First Search">Breadth First</span>
						</label><input class="checkbox-budget" type="radio" name="budget" id="budget-4"/>
						<label class="for-checkbox-budget" for="budget-4">							
							<span data-hover="Depth First">Depth First</span>
						</label>
					</div>
				</div>
	</div>
  );
};

export default PickAlgorithm;