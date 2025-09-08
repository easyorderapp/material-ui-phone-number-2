import React from 'react';
import { render } from 'react-dom';
import MaterialUiPhoneNumber from './index';

class ChangeDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
    };
  }

  render() {
    const { number } = this.state;

    return (
      <div>
        Current number:
        {' '}
        {number}

        <br />

        <MaterialUiPhoneNumber
          defaultCountry="it"
          preferredCountries={['it', 'se']}
          onChange={(e) => {
            this.setState({ number: e });
          }}
        />
      </div>
    );
  }
}

export default render(
  <div style={{
    fontFamily: "'Roboto', sans-serif",
    fontSize: '15px',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
      <MaterialUiPhoneNumber
        defaultCountry="be"
        excludeCountries={['us', 'ca']}
      />
    </div>
  </div>,
  document.getElementById('root'),
);
