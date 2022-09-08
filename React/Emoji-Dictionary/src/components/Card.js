import React from 'react';
import Emoji from "./Emoji.js";
import Name from "./Name.js";
import Meaning from "./Meaning.js";

const Card = (props) => {
    return (
        <div>
            <dl className="dictionary">
                <div className="term">
                    <dt>
                        <Emoji emoji={props.emoji} />
                        <Name name={props.name} />
                    </dt>
                    <dd>
                        <Meaning meaning={props.meaning} />
                    </dd>
                </div>
            </dl>
        </div>
    );
}

export default Card;

