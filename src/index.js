import {PATH} from './shared/locations' 
import {links} from './shared/links'
import {gitLinks} from './components/git/git'
import './style.scss';


window.onload = () => {
    const pathURL = window.location.pathname
    switch (pathURL) {
        case '/':
            links()
            break;
        case '/git.html':
            links()
            break;
        case '/projects.html':
            links()
            break;

        case '/skills.html':
            links()
            break;

        case '/experience.html':
            links()
            break;
        
    }
}