import React, { Component } from 'react'
import styled from 'styled-components'

class Loading extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {show} = this.props

        return show && (
            <BackDrop>
                <Spinner/>
            </BackDrop>
        )
    }
}

const BackDrop = styled.div`
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, .67);
`

const Spinner = styled.div`
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #56dbee; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 40vh auto;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
`

export default Loading