import React,{ Component } from 'react';
import './Content.css';

class Content extends Component {
    render(){
        var b = this.props.b;
        return <div>
            <div className="comment-object">
                <div className="comment-object-top">
                    <a><img src={b.avatar} /></a>
                    <span>{b.username}</span>
                </div>
                <div className="contents">
                    <p>{b.content}</p>
                </div>
            </div>

        </div>
    }
}

export default Content;