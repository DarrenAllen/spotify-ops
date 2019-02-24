import React, { Component } from 'react';
import { Query } from "react-apollo";
import searchArtistsQuery from "../queries/search";
import {UserConsumer} from '../context'

class SearchQuery extends Component {
  constructor(){
    super();
    this.state = {
      q: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const value = event.target.value;

    this.setState({q: value});
    event.preventDefault();
  }
  render() {
    return (
      <UserConsumer>
        {
        (context) => {
          return (
            <div>
              <h3>{this.props.type}</h3>
              <input
                type="text"
                value={this.state.q}
                onChange={this.handleChange}
              />

              <Query query={searchArtistsQuery} variables={{q:this.state.q, user:context.user, type:this.props.type}} skip={!this.state.q}>
                {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error :(</p>;
                  if(!data) return <p>No results</p>
                  return data.items.map(ult => {
                    return(
                      <div>{ult.name}</div>
                    )
                  });
                }}
              </Query>
            </div>
          )
        }
        }
      </UserConsumer>
    )
  }
}

export default SearchQuery;
