import React from 'react';
import { View, Text, FlatList, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreactors from '../actions/index';


class MyContainer extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }
    render() {
        console.log(this.props.datas.data);
        return (
            <View>
                <Text>LIST</Text>
                <FlatList
                    data={this.props.datas.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        // <Text>
                        //     {item.name.title}
                        //     {item.picture.large}
                        // </Text>
                        <View style={{ backgroundColor: 'white', flex: 1, height: 150, width: null }}>
                            <Text>
                                {item.name.title}
                                {item.picture.thumbnail}
                            </Text>
                            <TouchableHighlight onPress={() => alert(item.name.title)} >
                                <Image style={{ height: 50, width: 100 }} source={{ uri: item.picture.thumbnail }} />
                            </TouchableHighlight>
                        </View>

                    }
                />
            </View>
        );
    }
}
const mapStateToProps = state => ({
    datas: state
});

export default connect(mapStateToProps, actionCreactors)(MyContainer);
