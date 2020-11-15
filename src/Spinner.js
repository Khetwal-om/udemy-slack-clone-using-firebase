import React from 'react'
import {Loader,Dimmer} from 'semantic-ui-react'

const Spinner = () => {
    return (
        <Dimmer active>
          <Loader size="huge" content={"loading chat.....🔥🔥"} />
        </Dimmer>
    )
}

export default Spinner
