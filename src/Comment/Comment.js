import React, { Component } from 'react';
import './Comment.css';
import Content from '../Content/Content';


class Comment extends Component {
    state = {
        comment: [{
            "id": 1,
            "okr_id": 1,
            "user_id": 1,
            "content": "写的真好，棒棒的",
            "created_at": "0000-00-00 00:00:00",
            "username": "157775",
            "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
        }, {
            "id": 6, "okr_id": 1, "user_id": 1, "content": "666666666666666", "created_at": "0000-00-00 00:00:00", "username": "157775", "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
        }]
    }
    render() {

        var comment = this.state.comment;

        return <div>
            <div className="comment-box">
                <div className="comment-box-title">
                    评论(100)
                </div>
                <div class="comment-frame">
                    <input className="aaa" type="text" name="content" placeholder="请输入您的内容" />
                    <input className="pinlun" type="submit" value="评论" />
                </div>

                {
                    comment.map(item => {
                        return <Content b={item}></Content>
                    })
                }
                
            </div>
        </div>
    }
}

export default Comment;