import React from 'react';

const Emoji = (props) => {
    return (
        <div>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
            </span>
        </div>
    );
}

export default Emoji;
