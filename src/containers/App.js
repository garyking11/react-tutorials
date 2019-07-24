import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions';

/**
 *
 * @param state
 * @returns {{searchField: (*|string), robots: (*|Array|Function), isPending: *, error: *}}
 */
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

/**
 *
 * @param dispatch
 * @returns {{onSearchChange: (function(*): *), onRequestRobots: (function(): *)}}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    /**
     *
     * @returns {XML}
     */
    render() {

        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return isPending ?

            <h1>Loading ...</h1> :
            (
                <div className="tc">
                    <h1>Dpro Friends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);