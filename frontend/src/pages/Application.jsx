import Form from '../components/Form';
import '../styles/Application.css';

function Application() {
    return (
        <div className="box2">
            <div className="box1">
                <div className="container">
                    <Form route='api/receive/'/>
                </div>
            </div>
        </div>
    )
}

export default Application;