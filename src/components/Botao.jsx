import React from 'react'
import Button from '@material-ui/core/Button'


export default props => {

    return (

        <div>

            <Button color="primary">Botão de Texto</Button>

            <Button color="secondary" variant="outlined">Botão delineado</Button>

            <Button variant="contained" color="secondary">Botão contido</Button>

            {/* cores dos botões

            default -  primary - secondary - disable - link */}



        </div>
    )
}