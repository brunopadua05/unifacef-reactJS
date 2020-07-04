import { configureScope, init } from '@sentry/browser'
import { configs }from '../configs'

(() => {

    //Desativa o plugin Localhost...
    if(window.location.hostname === 'location' || window.location.hostname === '127.0.0.1') {
        return;
    }

    const { sentry } = configs;


    init({dsn: sentry});

    configureScope(scope => {
        
    })
})();





