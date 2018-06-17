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
                {
                    games.isPending &&
                        <div>Loading</div>
                }
                {console.log(games.list)}
                {
                    !games.isPending && 
                        games.list.map((item, key) => 
                            <Match key={key}>
                                <Title>{item.venue}</Title>
                                <span>Day: {dateFormat(item.datetime, 'dd/mm/yy')}</span>
                                <Team>{item.home_team.country}</Team>
                                <div>{item.home_team.goals}
                                    <span>X</span> 
                                    {item.away_team.goals}
                                </div>
                                <Team>{item.away_team.country}</Team>
                                <Events>
                                    {
                                        _isArray(item.away_team_events) ? 
                                            item.away_team_events.map((event, key) => 
                                            <div>
                                                <h2>{event.type_of_event}</h2>
                                                <div>{event.player}</div>
                                            </div>
                                        ) : <div>No Events</div>
                                    }
                                </Events>
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