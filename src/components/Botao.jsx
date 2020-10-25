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

            <Button variant="contained" color="default">Default</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Primary</Button>
            <Button variant="contained" color="disable">Disable</Button>
            <Button variant="contained" color="link">Link</Button>



        </div>
    )
}