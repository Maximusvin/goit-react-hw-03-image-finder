import { Component } from 'react';
import s from './Searchbar.module.css';

class SelectCountIMG extends Component {
  state = {
    perPage: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitPerPage(this.state.perPage);
    this.setState({ perPage: '' });
  };

  handleChange = ({ currentTarget }) => {
    this.setState({
      perPage: currentTarget.value,
    });
  };

  render() {
    const { perPage } = this.state;
    return (
      <form className={s.searchForm} onSubmit={this.handleSubmit}>
        <input
          className={s.searchFormInput}
          type="text"
          value={perPage}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SelectCountIMG;
