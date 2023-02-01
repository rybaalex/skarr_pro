import {FC, useEffect, useState} from "react";
import {IBannerResponse} from "./Banners.d"
import {useGetBanner} from "service/list/getBanner";
import Styles from "./Banners.module.scss"
import {ButtonOfferItem} from "features/home/banners/ButtonOfferItem";
import {ButtonItem} from "features/home/banners/ButtonItem";

const Banners: FC = () => {
    const [bannerData, setBannerData] = useState<IBannerResponse>();
    const {getBanner} = useGetBanner();
    useEffect(() => {
        getBanner().then(data => {
            setBannerData(data);
        })
    }, [])
    return <div className={Styles.banner_container}>
        <div className={Styles.left_banner}>
            <div className={Styles.insidePadding}>
                <div className={Styles.title}>{bannerData && bannerData.response.description}</div>
                <div className={Styles.block_orders}>
                    {bannerData&&!bannerData?.hasError && bannerData.response.offers.map(e => {
                        return <ButtonOfferItem {...e}/>
                    })}
                </div>
                <div className={Styles.block_button}>
                    {bannerData&&!bannerData?.hasError && bannerData.response.button.map(e => {
                        return <ButtonItem {...e}/>
                    })}
                </div>
            </div>
        </div>
        <div className={Styles.right_banner}>222</div>
    </div>
}
export {Banners}