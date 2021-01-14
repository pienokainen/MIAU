import React from 'react';
import Button from '../components/Button.js';


export default function LandingPage(props) {

    const handlePageChange = (event) => {
        let msg = {tab: event.target.tab}
        props.handlePageChange(msg);
    }

    return (<div>
                <Button buttonText={"A-LOI-TA"} classPosition={"start-button"} classStyle={"start-button-style"} OnClick={handlePageChange}/>
            </div>);
}