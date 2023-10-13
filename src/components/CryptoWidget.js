import React from 'react';

const baseUrl = "https://widgets.cryptocompare.com/";
const cccTheme = {"General":{"borderColor":"#4A2685"},"Row":{"borderColor":"#4A2685"}};

class CryptoWidget extends React.Component {
  componentDidMount() {
    const appName = encodeURIComponent(window.location.hostname);
    if(appName === "") {appName = "local";}
    const theUrl = baseUrl + 'serve/v1/coin/multi?fsym=BTC&tsyms=USD';
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
    this.refs.widget.appendChild(script);
  }

  render() {
    return (
      <div ref="widget"></div>
    );
  }
}

export default CryptoWidget;