import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './errorboundary.styles';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error);
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png">
            <ErrorImageText>Sorry this page is broken</ErrorImageText>
          </ErrorImageContainer>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default ErrorBoundary;
