

import React, {Fragment} from 'react';


import { Dialog, Grid, } from '@mui/material'

const LocationMap = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    return (
        <Fragment>
            <button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}>
                {button}
                Ver Ubicación
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
              <button onClick={handleClose} className='event-close-btn'>
                <i  className='fa fa-close'></i>
              </button>
                <Grid className="modalBody modal-body">
                    <Grid className="modalBody modal-body">
                        <iframe title="map" src="https://maps.app.goo.gl/GDLpRdZYr4edFNCt7"></iframe>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default LocationMap


