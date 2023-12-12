import './SearchYoutube.scss';
import { BsSearch } from "react-icons/bs";
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';



const SearchYoutube = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');
    const handleSearchYotube = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyCrPCjk_WAZpIjC8nwDdhtCKOzAuEVm4cM',
                'type': 'video',
                'q': query
            }
        })
        if (res && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object)
                })
            }
            setVideos(result);
        }
    }

    return (
        <div className="youtube-search-container">
            <div className="yt-search">
                <input type="text" placeholder='Search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearchYotube} className="btn-search-yt" type='button'><BsSearch /></button>
            </div>
            {videos && videos.length > 0 &&
                videos.map(item => {
                    return (
                        <div className='yt-result' key={item.id}>
                            <div className='left'>
                                <iframe className='yt-iframe' width="875" height="492"
                                    src={`https://www.youtube.com/embed/${item.id}` }
                                    title="Giới Thiệu Khóa Học React Pro Max - Những Kiến Thức Fresher React Sẽ Phải Biết"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                    </iframe>
                            </div>
                            <div className='right'>
                                <div className='title'>
                                    {item.title}
                                </div>

                                <div className='created-at'>
                                     {moment(item.createdAt).format('DD-MM-YYYY hh:mm:ss A')}
                                </div>

                                <div className='author'>
                                     {item.author}
                                </div>

                                <div className='description'>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })

            }

        </div>

    )
}

export default SearchYoutube;