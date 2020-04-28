// import {
//     wrap
// } from '../../Router.svelte'
import Home from './routes/Home.svelte'
import Projects from './routes/Projects.svelte'
import Users from './routes/Users.svelte'
import ProjectDetails from './routes/ProjectDetails.svelte'
import UserDetails from './routes/UserDetails.svelte'

let routes
const urlParams = new URLSearchParams(window.location.search)
if (!urlParams.has('routemap')) {

    routes = {
        // Exact path
        '/': Home,
        '/projects': Projects,
        '/users': Users,
        '/projects/:name': ProjectDetails, 
        '/users/:name': UserDetails, 

        // // Using named parameters, with last being optional
        // '/author/:first/:last?': Author,

        // // Wildcard parameter
        // '/book/*': Book,

        // // Catch-all
        // // This is optional, but if present it must be the last
        // '*': NotFound,
    }
} else {
    routes = new Map()

    // Exact path
    routes.set('/', Home)
    routes.set('/projects', Projects)
    routes.set('/projects/:name', ProjectDetails)
    routes.set('/users/:name', UserDetails)
}
export default routes