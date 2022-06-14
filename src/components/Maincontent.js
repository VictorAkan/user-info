import data from "./data"
import React from "react"
import Sidebar from "./Sidebar"

function MainContent(props) {
    return(
        <div className="mt-5 d-md-flex justify-content-between grow">
            <div className="card me-5 shadow p-4">
                <div className="card-body">
                    <div className="card-details text-center">
                        <img className="rounded-circle" src={props.image}/>
                        <div className="user_name mt-2">
                            <h4>{props.firstName}  {props.lastName}</h4>
                        </div>
                        <div className="user-office">
                            <h6>{props.office}</h6>
                        </div>
                        <div className="user-school">
                            <p>{props.school}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <i class="fa-brands fa-instagram me-2"></i>
                            <i class="fa-brands fa-twitter me-2"></i>
                            <i class="fa-brands fa-linkedin me-2"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className="user-pace">
                            <button className="btn btn-dark text-white mt-4 px-4">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: data,
            cardData: []
        }
    }
    componentDidMount(){ 
        this.setState({ 
            cardData : data
        })
    }
    handleEvent = (event) => {
        console.log(event.target.value);
        let cardDatas;
        if(event.target.value === 'all'){ 
            cardDatas = this.state.users
        }else{
            cardDatas = this.state.users.filter(user => user.sex === event.target.value)
        }
        this.setState({ 
            cardData : cardDatas
        },() => console.log(this.state.cardData))
    }
    render() {
        const cardElem = this.state.cardData.map((user) => {
            return(
                <MainContent
                key = {user.id}
                image = {user.image}
                firstName = {user.firstName}
                lastName = {user.lastName}
                office = {user.post}
                school = {user.school}
                />
            )
        })
        return(
            <div className="d-flex">
            <Sidebar 
                handleEvent = {this.handleEvent}
            />
                <div className=" main-info">
                <div className="container d-md-flex justify-content-center">
                    {cardElem}
                </div>
                </div>
            </div>
        )
    }
}
