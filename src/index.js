import {PATH, location} from './shared/locations' 
import {links} from './shared/links'
import './style.scss';


window.onload = () => {
    const pathURL = window.location.pathname
    switch (pathURL) {
        case location.about:
            links()
            break;
        case location.experience:
            links()
            break;
        case location.git:
            links()
            break;

        case location.projects:
            links()
            break;

        case location.skills:
            links()
            break;
        
        default:
            window.location.href = PATH.about
            break;
        
    }
}