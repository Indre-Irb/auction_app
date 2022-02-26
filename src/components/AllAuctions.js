import React, {useContext, useEffect, useState} from 'react';
import http from "../plugins/http"
import MyContext from "../context/MyContext";
import ProductCard from "./ProductCard";

const AllAuctions = () => {

    const [getItemList, setItemList] = useState([])
    const {setUser} = useContext(MyContext)

    useEffect(() => {
        http.get(`allauctions`).then(res => {
            console.log(res)
            if (res.success) {
                setUser(res.user)
                setItemList(res.list)
            }
        })
    }, [])

    console.log(getItemList)

    return (
        <div className="d-flex f-wrap">
            {getItemList &&
                getItemList.map((item, index) =>
                    <ProductCard item={item} key={index}/>
                )}
        </div>
    );
};

export default AllAuctions;