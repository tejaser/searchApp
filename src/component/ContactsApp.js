import React, { Component } from "react";
import "./ContactsApp.css";
import SearchBar from "./SearchBar";
import ContactList from "./ContactList";
import LoadingHOC from "./HOC/LoadingHOC";

class ContactsApp extends Component {
  state = {
    filterText: ""
  };
  handleUserInput = searchTerm => {
    this.setState({ filterText: searchTerm });
  };
  render() {
    const { loadingTime } = this.props;
    return (
      <div className="contactApp">
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ContactList
          contacts={this.props.contacts}
          filterText={this.state.filterText}
        />
        <p> Loading Time {loadingTime} seconds </p>
      </div>
    );
  }
}

export default LoadingHOC("contacts")(ContactsApp);
