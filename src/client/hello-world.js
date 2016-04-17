import React from 'react';
import { connect } from 'react-redux';

const HelloWorld = React.createClass({
  render() {
    return <span>{this.props.state} Hello world!</span>;
  }
});

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
