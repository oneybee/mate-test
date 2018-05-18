import React, {Component} from 'react';
import './Data01.scss';
import { PieChart, Pie, Sector } from 'Recharts';
// import Heading1 from '../../../stories/Building blocks 🏠/Elements/Heading1'

import InfoBanner from '../../components/InfoBanner'
import Span from '../../../Items/Building blocks 🏠/Elements/Span'

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
                   



                  
class Data01Component extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="data-01">
        <InfoBanner />
        <h1>Data 01</h1>
        {/* <Heading1 /> */}
          <PieChart width={400} height={400}>
            <Pie 
              data={data} 
              cx={200} 
              cy={200} 
              innerRadius={60}
              outerRadius={80} 
              fill="#8884d8"
              onMouseEnter={this.onPieEnter}
            />
          </PieChart>
      </div>
    )
  }
}

export default Data01Component;