import React from "react";
import Avatar from "./Avatar.js";
import Detail from "./Detail.js";
import Name from "./Name.js";
import ID from "./ID.js"

function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    {/* props.(anything) comes from app.js not contact .js, only app.js takes from contacts.js */}
                    <ID id={props.id} />
                    <Name name={props.name} />
                    <Avatar img={props.img} />
                </div>
                <div className="bottom">
                    <Detail detailInfo={props.tel} />
                    <Detail detailInfo={props.email} />
                </div>
            </div>
        </div>
    );
}

export default Card;