import React from 'react';


export default function LandingPage(props) {

    const handlePageChange = (event) => {
        let msg = {tab: event.target.tab}
        props.handlePageChange(msg);
    }

    return (
            <div>
                <button tab="/story" onClick={handlePageChange}>
                    Paina nappulaa
                </button>
            </div>
            );
}