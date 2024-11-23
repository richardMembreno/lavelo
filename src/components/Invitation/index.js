import React, { useState, useEffect } from 'react';
import './style.css'

const Invitation = ({ param }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [dateConfirmation, setDateConfirmation] = useState('');

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
               // Verificamos si DateConfirmation es null o undefined 
                if (data.dateConfirmation) 
                { 
                    setDateConfirmation('Ya has enviado una respuesta!');
                } 

                if(data.statusConfirmation){
                    setIsConfirmed(data.statusConfirmation);
                }
                
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };

        fetchData();
    }, [param]);

    const handleOptionChange = (event) => {
        setIsConfirmed(event.target.value === 'si');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = { IdGuest: param, isConfirmed};

        try{
            const response = await fetch('https://wedding-api-gnabf5bsbnd2dcd6.eastus-01.azurewebsites.net/Invitation/UpdateGuest',{
               method: 'POST',
               headers: {
                'Content-Type': 'application/json'
               },
               body: JSON.stringify(payload)
            });

            if(!response.ok){
                console.log(payload);
                throw new Error('Error en la solicitud');
            }
            const resp = await response.json();
            if(resp.code === 1){
                setDateConfirmation('Respuesta enviada.');
            }
        }catch(error){
            console.log('Error al enviar la solicitud:', error);
        }

    };

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
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <p>Por favor, confirmar asistencia:</p>
                                    </div>
                                    <div className='radio-group'>
                                        <label className='radio-container'>
                                            Si
                                            <input type='radio' value="si" checked={isConfirmed === true} onChange={handleOptionChange} />
                                            <span className="checkmark"></span>
                                        </label>

                                        <label className='radio-container'>
                                            No
                                            <input type='radio' value="no" checked={isConfirmed === false} onChange={handleOptionChange} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="next-post">
                                        <button href="/#" type='submit'><span className="post-control-link">Enviar</span></button>
                                    </div>
                                </form>
                                <p>{dateConfirmation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
            
        </div>
    );


};

export default Invitation;