import React, { Component } from 'react';

import Modal from '../../components/General/Modal/Modal';
import Aux from '../Aux';

const axiosErrorHandler = (WrappedComponent, axiosInstance) => {
  return class extends Component {

    state = {
      error: null
    }

    componentWillMount() {  // set interceptors before child components are rendered, cos they use the axios & require the interceptors
      this.reqInteceptor = axiosInstance.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      })
      this.resInterceptor = axiosInstance.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axiosInstance.interceptors.request.eject(this.reqInteceptor);
      axiosInstance.interceptors.response.eject(this.resInteceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler} >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default axiosErrorHandler;
