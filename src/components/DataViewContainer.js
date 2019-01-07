import React from 'react';
import {ShotChart} from "./ShortChart";
import {CountSlider} from "./CountSlider";
import {Row, Col} from 'antd';

export class DataViewContainer extends React.Component {

  state = {
    minCount: 2,
  }

  onMinCountChange = (minCount) => {
    this.setState({minCount});
  }

  render () {
    return (
      <div className="data-view">
        <ShotChart playerId={this.props.playerId} minCount={this.state.minCount}/>
        <div className="filters">
          <Row className="filter-row">
            <Col span={2} offset={3} className="filter-label">Shots: </Col>
            <Col span={16}>
              <CountSlider className="filter-control" onMinCountChange={this.onMinCountChange}/></Col>
          </Row>
        </div>
      </div>
    );
  }
}