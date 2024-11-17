import React, { useState, useEffect } from 'react';
import './style.css'

const Invitation = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const apiUrl = 'https://wedding-api-gnabf5bsbnd2dcd6.eastus-01.azurewebsites.net/Invitation/GetGuest?id=eb8b0695-a10a-4abf-9f55-37aa8938e170';

        const fetchData = async () => {
            try{
                const response = await fetch(apiUrl);
                if(!response.ok){
                    throw new Error('Error en la respuesta');
                }
                const data = await response.json();
                setData(data);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if(loading){
        return <div>Loading...</div>;
    }

    if(error){
        return <div>Error {error.message}</div>;
    }

    return(
        <div className='invitation-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 col-md-10 offset-md-1'>
                        <div className='invitation-wrap'>
                            <div className='col-12'>
                                <div className='section-invitation-title text-center'>
                                    <h2>Invitación</h2>
                                </div>
                                <div >
                                    <p>Hemos reservado un lugar especial para ti y otros acompañantes.</p>
                                    <p>{data.guestName}</p>
                                    {data.quantityCompanions > 0 && 
                                        data.details.map(detail => (
                                            <p>{detail.name}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
            
        </div>
    );


};

export default Invitation;