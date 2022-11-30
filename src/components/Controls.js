import { CgArrowUpR, CgArrowDownR, CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';
const Controls= ({handleHasSignedIn}) => {
    return (
        <div className="sidebar-container basic-font text-center">
            <h4 className="basic-font text-center controls-panel__sub-heading">Controls</h4>

            <p>Use Arrow Keys:</p>
            
            <div className="controls-arrow">
                <CgArrowUpR/>
                <p className='controls-arrow__direction'>Up</p>
            </div>

            <div className="controls-arrow">
                <CgArrowDownR/>
                <p className='controls-arrow__direction'>Down</p>
            </div>

            <div className="controls-arrow">
                <CgArrowLeftR/>
                <p className='controls-arrow__direction'>Left</p>
            </div>

            <div className="controls-arrow">
                <CgArrowRightR/>
                <p className='controls-arrow__direction'>Right</p>
            </div>

            <h4 className="basic-font text-center controls-panel__sub-heading">How to play?</h4>

            <p className='how-to-play__text'>Make your Snake as long as possible!</p>
            <p className='how-to-play__text'>The longer the snake, the higher you score.</p>
            <p className='how-to-play__text'>Guide your snake into food to grow, but do not touch the borders - or eat yourself by accident!</p>

            {/* put icons and 'signed in as' */}
            {handleHasSignedIn ?<button className="basic-font text-center signed-in-as__btn">
                Signed in as <span className='green'>{localStorage.getItem("username")}</span></button> 
                : null}
            
        </div>
    )
}

export default Controls