import { configureScope, init } from '@sentry/browser'

(() => {

    //Desativa o plugin Localhost...
    if(window.location.hostname === 'location' || window.location.hostname === '127.0.0.1') {
        return;
    }

    const { REACT_APP_SENTRY_DSN } = process.env;


    init({dsn: REACT_APP_SENTRY_DSN});

    configureScope(scope => {
        
    })
})();





