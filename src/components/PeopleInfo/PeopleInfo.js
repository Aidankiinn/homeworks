import React from 'react';
import "./PeopleInfo.css";

const PeopleInfo = ({color, src}) => {
    return (
        <div className={"col-12 col-sm-6 col-md-4 box-" + color}>
            <img src={src} alt="People Avatar"/>
            <p>Cing ornare risus. Morbi est est, binto sin landit sit amet, sagittis vel, euismod vel,
                velit.Pellentesque egestas sem. Suspendisse commodo ullamcorper</p>
            <a href="#" className={"link-" + color}>read more</a>
        </div>
    );
};

export default PeopleInfo;
