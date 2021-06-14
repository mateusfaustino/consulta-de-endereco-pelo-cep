import React from 'react'
import styled from 'styled-components'
import colors from './colors'
import border from './borders'
export default `
::-webkit-scrollbar {
    width: 8px;
    border-radius: ${border.border8};
    border: 2px solid ${colors['light-1']};
}

::-webkit-scrollbar-track {
    background-color: ${colors['light-1']};
    border-radius: ${border.border8};
}

::-webkit-scrollbar-thumb {
    background: ${colors.light0}; 
    border-radius: ${border.border8};
    border: 2px solid ${colors['light-1']};
}

::-webkit-scrollbar-thumb:hover {
    background: ${colors.primary0}; 
}

@media (min-width:$mobile-breakpoint) {
    ::-webkit-scrollbar {
        width: 10px;
    }
}
`

  