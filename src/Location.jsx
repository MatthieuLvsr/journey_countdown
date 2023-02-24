import { MdLocationOn } from 'react-icons/md';

const Location = ({x,y, fontSize, color}) => {
    return(
        <span style={{left: x, top:y, position:"absolute", fontSize:fontSize, color:color}}>
            <MdLocationOn/>
        </span>
    )
}

export default Location