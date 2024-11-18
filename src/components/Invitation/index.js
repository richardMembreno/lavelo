import React, { useState, useEffect } from 'react';
import './style.css'

const Invitation = ({ param }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const apiUrl = `https://wedding-api-gnabf5bsbnd2dcd6.eastus-01.azurewebsites.net/Invitation/GetGuest?id=${param}`;

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
    }, [param]);

    if(loading){
        return <div>Cargando Invitación...</div>;
    }

    if(error){
        return <div></div>;
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
                                    <p>Hola {data.guestName}. Queremos compartir contigo este momento especial y te hemos reservado un lugar para {data.quantityCompanions} {data.quantityCompanions > 1 ? 'personas' : 'persona'}.</p>
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