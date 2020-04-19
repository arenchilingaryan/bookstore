import React, { Component } from 'react'
import './catalog.scss'
import { connect } from 'react-redux'
import axios from 'axios'
import { setCatalog } from '../../redux/reducers/catalog-reducer'
import { setProducts, setLoading } from '../../redux/reducers/products-reducer'

class Catalog extends Component {

    componentDidMount() {
        axios.get('https://store-16405.firebaseio.com/catalog/-M5C2IRjZU8AAtR-GGiY.json')
            .then(res => this.props.setCatalog(res.data))
    }

    directChange = (e) => {
        switch (e.target.id) {
            case 'js':
                this.props.setLoading(true)
                return axios.get(`https://store-16405.firebaseio.com/js/-M57zgVEMyvOop9Bq0JT.json`)
                    .then(res => {
                        this.props.setProducts(res.data)
                    })
                    .then(this.props.setLoading(false))
                    .then(console.log(this.props.loading))
            case 'vue':
                this.props.setLoading(true)
                return axios.get(`https://store-16405.firebaseio.com/vue/-M580Z8KZtdhkIjNrvnU.json`)
                    .then(res => {
                        this.props.setProducts(res.data)
                    })
                    .then(this.props.setLoading(false))
            case 'react':
                this.props.setLoading(true)
                return axios.get(`https://store-16405.firebaseio.com/react/-M57sq-jr2tCXdiYLaia.json`)
                    .then(res => {
                        this.props.setProducts(res.data)
                    })
                    .then(this.props.setLoading(false))
            case 'angular':
                return axios.get(`https://store-16405.firebaseio.com/angular/-M580Ba0SMniDTOQCRU5.json`)
                    .then(res => {
                        this.props.setProducts(res.data)
                    })
                    .then(this.props.setLoading(false))
            case 'css':
                this.props.setLoading(true)
                return axios.get(`https://store-16405.firebaseio.com/css/-M58EvUHfyKiDJLXIXr6.json`)
                    .then(res => {
                        this.props.setProducts(res.data)
                    })
                    .then(this.props.setLoading(false))
            case 'html':
                return axios.get(`https://store-16405.firebaseio.com/html/-M58GpCitB5fC1UncHrp.json`)
                    .then(res => {
                        this.props.setProducts(res.data)
                    })
                    .then(this.props.setLoading(false))
            case 'SQL':
                return axios.get(`https://store-16405.firebaseio.com/SQL/-M58JTcZCBvfHIyqOKQ7.json`)
                    .then(res => {
                        this.props.setProducts(res.data)
                    })
                    .then(this.props.setLoading(false))
            case 'mongoDB':
                return axios.get(`https://store-16405.firebaseio.com/mongoDB/-M58Ia-tvF1v1ulmMJ3Z.json`)
                    .then(res => {
                        this.props.setProducts(res.data)
                    })
                    .then(this.props.setLoading(false))
            default:
                break;
        }
    }

    render() {
        return (
            <ul className="catalog">
                {
                    this.props.catalog.map(el => {
                        return (
                            <li id={el.id} onClick={this.directChange} key={el.id} className="catalogItemList">
                                <div id={el.id} className="catalogItem">
                                    <img
                                        id={el.id}
                                        src={el.imgURL} alt="sorry :'(" />
                                    <h3 id={el.id} className="itemName">{el.title}</h3>
                                </div>
                                {el.subCatalog
                                    ? el.subCatalog.map(i => {
                                        return (
                                            <ul key={i.id} id={i.id} className="subCatalog" >
                                                <li id={i.id} className="subCatalogItem">
                                                    <img id={i.id} src={i.imgURL} alt={i.imgURL} className="subIcon" />
                                                    <div><strong id={i.id}> {i.title} </strong></div>
                                                </li>
                                            </ul>
                                        )
                                    })
                                    : null}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        catalog: state.catalog,
        loading: state.products.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setCatalog: (catalogData) => dispatch(setCatalog(catalogData)),
        setProducts: (productsData) => dispatch(setProducts(productsData)),
        setLoading: (setLoad) => dispatch(setLoading(setLoad))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
