import React from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

//import React from "react";
//import "./App.css";

// class PickDateRange extends React.Component {
//     state = {
//       startDate: null,
//       endDate: null,
//       endDateFormatted: null,
//       startDateFormatted: null,
//     };
//     hundleDateChange(startDate, endDate) {
//       this.setState(() => ({
//         endDate,
//         startDate,
//       }));
//       if (startDate != null) {
//         this.setState(() => ({
//           startDateFormatted: startDate.format("D-MM-Y"),
//         }));
//       }
//       if (endDate != null) {
//         this.setState(() => ({
//           endDateFormatted: endDate.format("D-MM-Y"),
//         }));
//       }
//     }
  
//     render() {
//       return (
//         <div className="App">
//           <h2>React DateRangePicker</h2>
//           <pre style={{ textAlign: "left" }}>
//             <p> start date : {JSON.stringify(this.state.startDate)} </p>
//             <p> start date Formatted: {this.state.startDateFormatted} </p>
//             <p> end date : {JSON.stringify(this.state.endDate)} </p>
//             <p> end date Formatted : {this.state.endDateFormatted} </p>
//           </pre>
//           <DateRangePicker
//             startDate={this.state.startDate}
//             startDateId="start_date_id"
//             endDate={this.state.endDate}
//             endDateId="end_date_id"
//             onDatesChange={({ startDate, endDate }) =>
//               this.hundleDateChange(startDate, endDate)
//             }
//             focusedInput={this.state.focusedInput}
//             onFocusChange={(focusedInput) => this.setState({ focusedInput })}
//           />
//         </div>
//       );
//     }
//   }
//   export default PickDateRange;

// export default class PickDateRange extends React.Component {
//     state = {
//         loading: true,
//         startDate: null,
//         endDate: null
//     };

//     render() {
//         return (
//             <div>
//                 <DateRangePicker
//                     onChange={item => setState([item.selection])}
//                     maxDate={addDays(new Date(), 0)}
//                     showSelectionPreview={true}
//                     moveRangeOnFirstSelection={false}
//                     months={2}
//                     ranges={state}
//                     direction="horizontal"
//                     preventSnapRefocus={true}
//                     calendarFocus="backwards"
//                 />
//                 {this.state.loading || !this.state.image ? (
//                     <div> loading ... </div> 
//                 ) : (
//                     <div>
//                         <div>{this.state.image.title}</div>
//                         <div>{this.state.image.url}</div>
//                         <ReactPlayer url={this.state.image.url}/>
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }

const PickDateRange = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 0),
          key: 'selection'
        }
      ]);

        return (
            <div>
                { state[0].startDate ? (
                    <p> start date : {JSON.stringify(state[0].startDate)} </p>
                ) : (
                    <p> please choose {JSON.stringify(new Date())} {JSON.stringify(state[0].startDate)}</p>
                )
                }
            <p> start date : {JSON.stringify(state.startDate)} </p>
            <DateRangePicker
                onChange={item => setState([item.selection])}
                maxDate={addDays(new Date(), 0)}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                preventSnapRefocus={true}
                calendarFocus="backwards"
            />
            </div>

        )
}

export default PickDateRange