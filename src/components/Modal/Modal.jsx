import { Component } from 'react';
import css from './Modal.module.css';


export class Modal extends Component {

  componentDidMount() {
    // const { closeModal } = this.props;
    window.addEventListener('keydown', this.handelKeyClose);
  }

  componentWillUnmount(){
    // const { closeModal } = this.props;
    window.removeEventListener('keydown',this.handelKeyClose);
  }

  handelKeyClose=(evt)=>{
    const { closeModal } = this.props;

    if(evt.code === 'Escape'){
      closeModal();
    }
    
  }

  handleClose = evt => {
    const { closeModal } = this.props;
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  render() {
    const { largeImage } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleClose}>
        <div className={css.modal}>
          <img src={largeImage} alt="" />
        </div>
      </div>
    );
  }

}