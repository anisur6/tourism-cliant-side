import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

import './Services'

const Services = () => {
    const [course, setcourse] = useState([]);

    useEffect(() => {
        fetch('https://travel-agency221.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setcourse(data));
    }, [])

    return (
        <div className="courseclass">
            <Row xs={1} md={3} className="g-4">
                {
                    course.map(single => <Service service={single}></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;