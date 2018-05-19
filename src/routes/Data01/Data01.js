import React, {Component} from 'react';
import './Data01.scss';
import { PieChart, Pie, Sector, Cell } from 'Recharts';
// import Heading1 from '../../../stories/Building blocks 🏠/Elements/Heading1'

import InfoBanner from '../../components/InfoBanner'
import Span from '../../../Items/Building blocks 🏠/Elements/Span'

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}];

const data1 = [{name: 'Group A', value: 200}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}];
const data2 = [{name: 'Group A', value: 20}, {name: 'Group B', value: 30},
{name: 'Group C', value: 60}];
const data3 = [{name: 'Group A', value: 120}, {name: 'Group B', value: 230},
{name: 'Group C', value: 160}];
                   
const COLORS = ['rgb(125,145,251)', 'rgb(239,145,124)', 'rgb(241,241,241)'];

                  
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
        <h1>import data on pie chart</h1>
        {/* <Heading1 /> */}
          <div className="row grid-default-style">
            <div className="col-3">
            <PieChart width={70} height={90}>
              <Pie 
                data={data} 
                cx={35} 
                cy={50} 
                innerRadius={20}
                outerRadius={30} 
                fill="#8884d8"
                onMouseEnter={this.onPieEnter}
                paddingAngle={3}
                >
                {
                  data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
              </Pie>
            </PieChart>
            </div>
            <div className="col-3">
            <PieChart width={70} height={90}>
              <Pie 
                data={data1} 
                cx={30} 
                cy={50} 
                innerRadius={20}
                outerRadius={30} 
                fill="#8884d8"
                onMouseEnter={this.onPieEnter}
                paddingAngle={3}
              >
                {
                  data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
              </Pie>
            </PieChart>
            </div>
            <div className="col-3">
            <PieChart width={70} height={90}>
              <Pie 
                data={data2} 
                cx={30} 
                cy={50} 
                innerRadius={20}
                outerRadius={30} 
                fill="#8884d8"
                onMouseEnter={this.onPieEnter}
                paddingAngle={3}
               >
                {
                  data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
              </Pie>
            </PieChart>
            </div>
            <div className="col-3">
            <PieChart width={70} height={90}>
              <Pie 
                data={data3} 
                cx={30} 
                cy={50} 
                innerRadius={20}
                outerRadius={30} 
                fill="#8884d8"
                onMouseEnter={this.onPieEnter}
                paddingAngle={3}
                >
                {
                  data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
              </Pie>
            </PieChart>
            </div>
          </div>
      </div>
    )
  }
}

export default Data01Component;