import {createElement,Component,Fragment} from'react';

export default class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state = {searchKey:props.searchKey};
    }

    keyUpHandler = (event)=>{
        if(event.key === 'Enter'){
            this.triggerSearch();
        }else{
            this.setState({searchKey:event.target.value});
        }
    }
    triggerSearch = ()=>{
        const {onSearch} = this.props;
        if(onSearch){
            onSearch(this.state.searchKey);
        }
    }

    render(){
        return createElement(
            Fragment,
            null,
            createElement(
                'input',
                {
                    onKeyUp: this.keyUpHandler,
                    defaultValue: this.state.searchKey
                }
            ),
            createElement(
                'button',
                {onClick: this.triggerSearch},
                'Search'
            )
        )
    }
}