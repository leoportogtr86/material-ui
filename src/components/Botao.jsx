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
            <Button variant="contained" disableElevation color="secondary">Desabilitar elevação</Button>


            {/* tamanhos dos botões - propriedade size

            small - medium - large */}

            <hr />

            <h1>Tamanhos dos botões</h1>

            <h2>Small</h2>

            <Button variant="contained" size="small" color="disable">Small</Button>

            <hr />

            <h2>Medium</h2>

            <Button variant="contained" color="primary" size="medium">Medium</Button>

            <hr />

            <h2>Large</h2>

            <Button variant="contained" color="link" size="large">Large</Button>



        </div>
    )
}