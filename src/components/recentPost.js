import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';



class RecentPosts extends Component {
    componentDidMount() {
        this.props.fetchRecentPosts();
    }
    
    render() {
        return (
            <div classNamr="recent-posts">
                <div className="recent-post__wrapper">
                    <div className="recent-post__heading">
                        <ul className="recent-post__posts">
                            <li>recent post 0</li>
                            <li>recent post 1</li>
                            <li>recent post 2</li>
                        </ul>

                        </div>
                    </div>

                </div>
        );
    }
}

export default connect(null, actions)(RecentPosts);