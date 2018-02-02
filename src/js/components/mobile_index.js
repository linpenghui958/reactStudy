import React from 'react';
import MobileHeader from './mobile_header.js';
import MobileFooter from './mobile_footer.js';
import MoibleList from './mobile_list.js';
import {
    Tabs,
    Carousel
} from 'antd'
const TabPane = Tabs.TabPane

export default class MobileIndex extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return (
            <div>
        <MobileHeader></MobileHeader>
        <Tabs>
        	<TabPane tab="头条" key="1">
            <div class="carousel">
                <Carousel {...settings}>
                    <div><img src="./src/images/carousel_1.jpg"/></div>
                    <div><img src="./src/images/carousel_2.jpg"/></div>
                    <div><img src="./src/images/carousel_3.jpg"/></div>
                    <div><img src="./src/images/carousel_4.jpg"/></div>
                </Carousel>
            </div>
            <MoibleList count={20} type="top" />
        	</TabPane>
        	<TabPane tab="社会" key="2">
            <MoibleList count={20} type="shehui" />
        	</TabPane>
        	<TabPane tab="国内" key="3">
            <MoibleList count={20} type="guonei" />
        	</TabPane>
        	<TabPane tab="国际" key="4">
            <MoibleList count={20} type="guoji" />
        	</TabPane>
        	<TabPane tab="娱乐" key="5">
            <MoibleList count={20} type="yule" />
        	</TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
        )
    }
}