import './styles/MainPage.css';
import React from 'react';
import CryptoWidget from './CryptoWidget';
// import {Helmet} from "react-helmet";
// import { jsx as _jsx } from "react/jsx-runtime";
// import { jsxs as _jsxs } from "react/jsx-runtime";

const MainPageChild_1 = () => {
    return (
        <div className='MPC2'>
            <h2 className='MPCh2_1'>Markets</h2>
            <div className='MPCTable'>
                {/* <Helmet>
                    <script type="text/javascript">baseUrl = "https://widgets.cryptocompare.com/"; var scripts = document.getElementsByTagName("script"); var embedder = scripts[scripts.length - 1 ]; var cccTheme = {"{"}"General":{"{"}"borderColor":"#4A2685"{"}"},"Row":{"{"}"borderColor":"#4A2685"{"}"}{"}"}; (function (){"{"}var appName = encodeURIComponent(window.location.hostname); if(appName==""){"{"}appName="local";{"}"}var s = document.createElement("script"); s.type = "text/javascript"; s.async= true; var theUrl =baseUrl+'serve/v1/coin/multi?fsyms=BTC,ETH,XMR,LTC,DASH&amp;tsyms=USD'; s.src= theUrl + ( theUrl.indexOf("?") &gt;= 0 ? "&amp;" : "?") + "app=" + appName;embedder.parentNode.appendChild(s);{"}"})();</script>
                </Helmet> */}
                <CryptoWidget/>

            </div> 
        </div>
        
)
    
}
export default MainPageChild_1;
