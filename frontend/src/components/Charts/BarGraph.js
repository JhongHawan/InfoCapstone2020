import React, { Component } from 'react'; 
import { 
  VictoryContainer,
  VictoryBar, 
  VictoryLine, 
  VictoryChart, 
  Bar, 
  VictoryTheme, 
  VictoryAxis,
  VictoryLabel
} from 'victory'; 
import { useSelector, shallowEqual } from 'react-redux'; 

/*
  Pull data from the database. 
  Implement Redux for state management
*/

class BarGraph extends Component {
  constructor(props) {
    // Add the data as a prop from mongodb.
    super(props);
    this.state = {
      clicked: false,
      color: "#FF30F7",
      smallLabelSize: 15,
      largeLabelSize: 20,
      style: {
        data: { fill: "#FF30F7" },
        labels: { fill: "primary", fontSize: 15, fontWeight: "bold" },
      },
      title: "",
      data: []
    };
  }
  
  // Having a lot of trouble getting the data field to populate with the this.props.data 
  componentDidMount = () => {
    this.setState({
      clicked: false,
      color: this.props.color,
      style: {
        data: { fill: this.props.color },
        labels: { fill: "primary", fontSize: 15, fontWeight: "bold" },
        fontSize: 30
      },
      title: this.props.title,
      data: this.props.data
    });
  }


  render() {
    const handleMouseOver = () => {
      const fillColor = this.state.clicked ? "#C9D6DF" : this.state.color;
      const labelSize = this.state.clicked ? this.state.smallLabelSize : this.state.largeLabelSize
      const clicked = !this.state.clicked;
      this.setState({
        clicked,
        style: {
          data: { fill: fillColor },
          labels: { fill: "primary", fontSize: labelSize, fontWeight: "bold" }
        }
      });
    };

    const CHART_HEIGHT = 1000; 
    const CHART_WIDTH = 1200; 
    const FONT_SIZE = 20;
    console.log(`Props Data: ${this.props.data}`)

    return (
      <div>
        <VictoryChart 
          height={CHART_HEIGHT} 
          width={CHART_WIDTH}
          animate={{
            duration: 1000,
            onLoad: { duration: 2000 }
          }}
          domainPadding={{ x: 50, y: [0, 20] }}
          scale={{ x: "time", y: "linear" }}
          theme={VictoryTheme.material}
          title={this.state.title}
        >
          <VictoryLabel 
            x={CHART_WIDTH / 2} 
            y={30} 
            style={{fontSize: 40}} 
            textAnchor="middle"
          />
          <VictoryBar
            barRatio={0.8}
            dataComponent={
              <Bar events={{ onMouseOver: handleMouseOver }}/>
            }
            style={this.state.style}
            labels={
              this.props.data.map(population => `${population.origin_name}` )
            }
            data={
              this.props.data.map(population => (
                { x: new Date(population.year), y: (population.persons / 1000)}
              ))
            }
          />
          <VictoryAxis dependentAxis
            label="Population (1000s)"
            axisLabelComponent={<VictoryLabel style={{fontSize: FONT_SIZE}} dy={-25}/>}
          />
          <VictoryAxis
            label="Time (Years)"
            axisLabelComponent={<VictoryLabel style={{fontSize: FONT_SIZE}} dy={25}/>}
          />
        </VictoryChart>
      </div>
    );
  }
 }

export default BarGraph;