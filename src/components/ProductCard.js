import React, {useState} from 'react';
import http from "../plugins/http";
import {useNavigate} from "react-router-dom";

const ProductCard = ({item}) => {

    const [getTime, setTime] = useState()
    const nav = useNavigate()

    const myInterval = setInterval(setCountDown, 1000)


    function setCountDown() {
        let time = item.time - Date.now()

        if (time < 0) {
            setTime("Auction is ended!")
            clearInterval(myInterval)
            return
        }
        const timeHours = Math.floor(time / 1000 / 60 / 60)
        time -= timeHours * 1000 * 60 * 60

        const timeMinute = Math.floor(time / 1000 / 60)
        time -= timeMinute * 1000 * 60

        const timeSecond = Math.floor(time / 1000)

        setTime(timeHours + ':' + timeMinute + ':' + timeSecond)
    }

    async function openItem(id){
        http.get(`openItem/${id}`).then(res => {
            console.log(res)
            if(res.success){
                nav(`/singleauction/${id}`)
            }
        })
    }


    return (
        <div className="auctionField d-flex">
            <div className="flex1">
                <img src={item.photo} alt=""/>
            </div>
            <div className="flex1 d-flex f-column j-ard">
                <h2>{item.title}</h2>
                <h6>{item.owner}</h6>
                <h5>Current price: {item.price} Eur</h5>
                <h5>Auction will end: {new Date(item.time).toLocaleTimeString('lt-LT')}</h5>
            </div>
            <div className="flex1 d-flex j-center al-center f-column">
                <div className="flex3 d-flex f-column j-center">
                    <h5>Time left to bid:</h5>
                    <div>{getTime}</div>
                </div>
                <div className="flex1">
                    <button className="bidButton" onClick={() => openItem(item._id)}>Make a bid</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;