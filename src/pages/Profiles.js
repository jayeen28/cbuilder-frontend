import React, { useEffect, useState } from 'react';
import req from '../lib/req';
import { useNavigate } from 'react-router-dom';

const Profiles = () => {
    const [loading, setLoading] = useState(false);
    const [profiles, setProfiles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        req({ uri: '/profile/me' })
            .then(({ data }) => setProfiles(data))
            .catch((e) => console.log(e.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading . . .</div>;

    return (
        <div>
            <div>
                <button onClick={() => navigate('/allaroundme')}>See all around you</button>
            </div>
            <div>
                <button onClick={() => navigate('/manageprofiles')}>Create new</button>
            </div>
            <div>
                {
                    profiles.map((p) => <div key={p.profile_id} style={{ border: '1px solid', display: 'inline-block', padding: '10px' }}>{p.title}</div>)
                }
            </div>
        </div>
    );
}

export default Profiles;
