import React, { Component } from "react";
import { buildMatchMemberExpression } from "@babel/types";

export default class Form extends Component {
  state={
    farenheit: 0,
    celsius: 0,
    kelvin: 0
  }



  render() {
    return (
      <div>
        <select class="value-dropdown" name="units">
          <option value="temperature">Temperature</option>
          <option value="weight">Weight</option>
          <option value="distance">Distance</option>
        </select>
        <form>
          <span>Fahrenheit</span>
          <input class="input-box" type="text" />
          <button type="button" onClick={() => this.convertTemp()}>
            Convert <i class="fas fa-arrow-down"></i>
          </button>
          <span>Celcius</span>
          <input class="input-box" type="text" />
        </form>
      </div>
    );
  }
}
