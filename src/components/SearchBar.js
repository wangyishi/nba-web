import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from "../constants"

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : nba.searchPlayers(value).map(
        ({playerId, fullName}) => (
          <Option key={playerId}>
            <img
              className="player-option-image"
              src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
              alt="Profile"
            />
            <span className={"player-option-label"}>{fullName}</span>
          </Option>
        )
      ),
    });
  }

  onSelect = (value) => {
    console.log('onSelect', value);
  }

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        className="search-bar"
        dataSource={dataSource}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="Search NBA Player"
        size="large"
      >
        <Input suffix={<Icon type="search"/>}/>
      </AutoComplete>
    );
  }
}