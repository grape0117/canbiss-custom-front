import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ItemCard from '../../Card/ItemCard/ItemCard';
import ReactLoading from 'react-loading';
import './FeaturedItems.css'
import { isEmpty, generateRandomNumbers } from "../../../utils";
import { useState, useEffect } from "react";
import MultiCareousel from "../../../assets/multicarousel/MultiCareousel";
import { useSelector } from "react-redux";
import { FadeInSection } from "../../FadeInSection/FadeInSection";

const FeaturedItems = (props) => {
    
    const itemList = useSelector((state) => state.category.itemList);
    // if (!isEmpty(itemList)) {
    //     let temp = generateRandomNumbers(itemList.length, 10);
    //     temp.forEach((index) => {
    //         tempArray.push(itemList[index-1]);
    //     })
    // }
   
    return (
        <FadeInSection>
            <div className="featured__products__container container">
                <div className="featured__products">
                    <div className="featured__products__header">
                        <h3 className='featured__items__header__big'>LATEST COLLECTION AND BEST SELLING</h3>
                        <Link to="/shop" className='featured__header__small'><span className="mr-2">View all products</span><ArrowForwardIosIcon style={{width:'12px'}}/></Link>
                    </div>
                    <div className='d-flex w-100 justify-content-center align-items-center m-auto'>
                        <div className="featured__products__card__container">
                        {itemList && itemList.length > 0 && <MultiCareousel items={itemList}/>} 
                        </div>
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
}

export default FeaturedItems;