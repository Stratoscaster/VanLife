import './NotFoundSplat.css';
import {useNavigate} from "react-router-dom";

export default function NotFoundSplat() {
    const navigate = useNavigate();
    const pageContainerStyle = {
        textAlign: 'center',
        paddingInline: '5vw',
        paddingBlock: '3vh'
    }

    return (<div style={pageContainerStyle}>
        <h1>Page Not Found 🙁</h1>
        <button className={'NotFoundSplat__button'} onClick={() => {
            navigate('/vans')
        }}>Return to the Vans!
        </button>
    </div>);
}