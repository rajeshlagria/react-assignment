import { useDispatch } from 'react-redux';
import { postSearch } from '../redux/action';
import './posts.css';

const Header =()=>{

    const dispatch = useDispatch();

    return(
        <div className="header">
            <input type="text" placeholder="Post title" onChange={(e) => dispatch(postSearch(e.target.value))} />
        </div>
    )
}

export default Header;