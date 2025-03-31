import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import LoadingIndicator from './LoadingIndicator';
import api from '../api';

function Form({route}) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('')
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/submitted');
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { name, age, url });
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return <form onSubmit={handleSubmit} className='form-container'>
        <input
            type="text"
            className='form-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required
            />
        <input 
            type="number"
            className='form-input number-input'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            required
        />
        <input 
            type="url"
            className='form-input url-input'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Instagram"
            required
        />
        {loading && <LoadingIndicator />}
        <div className="brlr">
        <button 
            className='custom-button secondary'
            type="submit"
            onClick='handleRedirect'>
            Submit
        </button>
        </div>
    </form>
}

export default Form;