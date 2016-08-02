import React, { Component, PropTypes } from 'react'
import Cn from 'classnames'
import css from './Modal.css'

const propTypes = {
  children: PropTypes.any,
  handleClose: PropTypes.func.isRequired,
}


class Modal extends Component {

  constructor () {

    super()
    this.state = {
      loaded: false,
    }

  }

  componentDidMount () {

    // Hack to avoid messing with react-transition-group or react-motion
    this.timeout = setTimeout(() => {

      this.setState({
        loaded: true,
      })

    }, 50)

  }

  componentWillUnmount () {

    clearTimeout(this.timeout)

  }

  render () {

    const modalClasses = [
      css.modal,
    ]
    const contentClasses = [
      css.content,
    ]
    if (this.state.loaded) {

      contentClasses.push(css.animate)
      modalClasses.push(css.animate)

    }

    return (
      <div
        className={Cn(modalClasses)}
      >
        <div
          className={Cn(contentClasses)}
        >
          <div
            className={css.close}
            onClick={this.props.handleClose}
          >
          </div>
          {this.props.children}
        </div>
      </div>
    )

  }

}

Modal.propTypes = propTypes


export default Modal
