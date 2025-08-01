import {useEffect, useState} from "react";
import {StoreProvider} from "./providers/storeProvider";
import {ThemeProvider} from "./providers/themeProvider";
import {SearchProvider} from "./providers/searchProvider";
import {AppRouter} from "./routers";
import '../i18n';

function App() {

    // const [ipAddress, setIPAddress] = useState('')
    // const blockedIPs = ['84.54.66.199']
    //
    // useEffect(() => {
    //     fetch('https://api.ipify.org?format=json')
    //         .then(response => response.json())
    //         .then(data => {
    //             setIPAddress(data.ip)

    //         })

    // }, [])
    //



    // if (blockedIPs.includes(ipAddress))
        return (
            // <StoreProvider>
            //     <ThemeProvider>
            //         <SearchProvider>
            <AppRouter/>
            // </SearchProvider>
            // </ThemeProvider>
            // </StoreProvider>
        );
}

export default App;
