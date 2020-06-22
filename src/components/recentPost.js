import React, { Component } from 'react';

class RecentPosts extends Component {
    render() {
        return (
            <div classNamr="recent-posts">
                <div className="recent-post__wrapper">
                    <div className="recent-post__heading">
                        <ul className="recent-post__posts">
                            <li>recent post 0</li>
                            <li>recent post 1</li>
                            <li>recent post 2</li>
                            <li>recent post 3</li>
                        </ul>

                        </div>
                    </div>

                </div>
        );
    }
}

export default RecentPosts;