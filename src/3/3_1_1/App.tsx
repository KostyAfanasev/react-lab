import { useState } from 'react';

export default function Picture() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`background ${isActive ? '' : 'background--active'}`}>
            <img
                className={`picture ${isActive ? 'picture--active' : ''}`}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsActive(!isActive);
                }}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}