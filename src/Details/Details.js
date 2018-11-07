import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
    render() {

        var a = this.props.a;

        return <div>
            <div className="okr-object">
                <div className="okr-object-top">
                    <a><img src={a.avatar} /></a>
                    <span>{a.username}</span>
                </div>
                <div className="contents">
                    <p>{a.object}</p>
                </div>
            </div>
            <div className="okr-key">
                <div className="okr-key-contents">{a.key_results}</div>
            </div>
            <div className="okr-key">
                <div className="okr-action-contents">{a.action}</div>
            </div>
        </div>
    }
}

export default Details;