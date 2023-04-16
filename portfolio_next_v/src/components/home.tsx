import React from 'react';
import { Link } from 'react-router-dom';


export const home = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/posts">記事一覧</Link></li>
            </ul>
        </div>
    )
}
