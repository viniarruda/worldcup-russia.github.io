import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    isArray as _isArray
} from 'lodash'
import dateFormat from 'dateformat'
import { loadWorldCup } from '../../../actions/cup'
import Match from '../../layout/styled-components/match'
import Container from '../../layout/styled-components/container'
import Title from '../../layout/styled-components/title'
import Team from '../../layout/styled-components/team'
import Events from '../../layout/styled-components/events'
import Time from '../../layout/styled-components/time'
import Loading from '../../layout/styled-components/loading'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.loadWorldCup()
    }
    
    render() {
        const { games } = this.props
        return (
            <Container>
                <Title>World Cup Russia 2018 - Matches</Title>
                <Loading show={games.isPending}/>
                {console.log(games.list)}
                {
                    !games.isPending && 
                        games.list.map((item, key) => 
                            <Match key={key}>
                                <Title>{item.venue}</Title>
                                {
                                    item.time &&
                                        <Time>{item.time}</Time>
                                }
                                <span>Day: {dateFormat(item.datetime, 'dd/mm/yyyy - h:MM:ss TT')}</span>
                                <div>
                                <Team>{item.home_team.country}</Team>
                                
                                <div>{item.home_team.goals}
                                    <small>X</small> 
                                    {item.away_team.goals}
                                </div>
                                <Team>{item.away_team.country}</Team>
                                </div>
                            </Match>
                    )
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.cup
    }
}

const mapDispatchToProps = (dispatch) => ({
    loadWorldCup: () => dispatch(loadWorldCup({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)