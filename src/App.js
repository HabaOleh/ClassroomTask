import React, {Component} from 'react';
import PrintUser from "./Component/PrintUser";
import PrintCar from "./Component/PrintCar";
import PrintUwa from "./Component/PrintUWA";


class App extends Component {
  render() {
    return (
        <div>
              <PrintUser/>
              <PrintCar/>
              <PrintUwa/>
        </div>
    );
  }
}
export default App;
