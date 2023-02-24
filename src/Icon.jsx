import { GiCommercialAirplane } from 'react-icons/gi';
import { AiFillCloud } from 'react-icons/ai';

const Icon = () => {
    return (
        <span className="fa-stack fa-2x">
            <div className='circle'>
                <div className='icon'>
                    <GiCommercialAirplane className='plane' />
                    <div className='clouds'>
                        <AiFillCloud className='cloud'/>
                        <AiFillCloud className='cloud'/>
                        <AiFillCloud className='cloud'/>
                        <AiFillCloud className='cloud'/>
                    </div>
                </div>
            </div>
        </span>
    )
}

export default Icon