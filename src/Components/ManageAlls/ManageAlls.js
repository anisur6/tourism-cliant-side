import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageAll from '../ManageAll/ManageAll';

const ManageAlls = () => {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('https://travel-agency221.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [])
    return (
        <div>
            <Container>
                <h2>Manage all Order Page</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        // course.map(single => <Service service={single}></Service>)
                        booking.map(single => <ManageAll bookedService={single.bookedService}></ManageAll>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageAlls;