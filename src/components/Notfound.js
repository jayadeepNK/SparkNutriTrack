import {Link} from 'react-router-dom';
function Notfound(){
    return(
        <section className='container not-found'>
        <div className="not-found">
             <h1>404 | Not Found</h1>
             <p><Link to='/register'>Register</Link> Now to Use</p>
        </div>
        </section>
    )
}
export default Notfound;