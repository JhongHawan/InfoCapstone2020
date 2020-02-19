import React, { Component } from 'react'; 
import { 
  VictoryContainer,
  VictoryBar, 
  VictoryChart, 
  Bar, 
  VictoryTheme, 
  VictoryAxis,
  VictoryLabel
} from 'victory'; 

/*
  Pull data from the database. 
  Implement Redux for state management
*/

class BarGraph extends Component {
  constructor(props) {
    super();
    this.state = {
      clicked: false,
      color: props.color,
      style: {
        data: { fill: props.color }
      },
      title: props.title
    };
  }

  invertHex = (hex) => {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase(); 
  }

  render() {
    const handleMouseOver = () => {
      const fillColor = this.state.clicked ? "green" : this.state.color;
      const clicked = !this.state.clicked;
      this.setState({
        clicked,
        style: {
          data: { fill: fillColor }
        }
      });
    };

    return (
      <div>
        <VictoryChart height={400} width={400}
          animate={{
            duration: 1000,
            onLoad: { duration: 2000 }
          }}
          domainPadding={{ x: 50, y: [0, 20] }}
          scale={{ x: "time", y: "linear" }}
          theme={VictoryTheme.material}
          title={this.state.title}
        >
          <VictoryLabel text={this.state.title} x={225} y={30} textAnchor="middle"/>
          <VictoryBar
            dataComponent={
              <Bar events={{ onMouseOver: handleMouseOver }}/>
            }
            style={this.state.style}
            data={[
              // Add the datat from mongodb here 
              { x: new Date(1986, 1, 1), y: 2 },
              { x: new Date(1996, 1, 1), y: 3 },
              { x: new Date(2006, 1, 1), y: 5 },
              { x: new Date(2016, 1, 1), y: 4 }
            ]}
          />
          <VictoryAxis dependentAxis
            label="Population"
            axisLabelComponent={<VictoryLabel dy={-30}/>}
          />
          <VictoryAxis
            label="Time (Years)"
            axisLabelComponent={<VictoryLabel dy={30}/>}
          />
        </VictoryChart>
      </div>
    );
  }
 }

export default BarGraph;