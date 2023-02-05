import Styles from "./Services.module.scss"
import {ServiceItem} from "features/home/services/ServiceItem";
import {useAppSelector} from "store/hooks";
import {IServiceItem} from "features/home/services/Service";
import {getService} from "features/home/services/ServiceSlice";

const ServiceBlock = () => {
    const serviceData = useAppSelector(getService)

    const filter_item = (data: IServiceItem[], position: number) => {
        return data?.filter(e => e.position === position)
    }

    return <div className={Styles.service_block}>
        <ul>

            <li className={`${Styles.top_left} ${Styles.col1}`}></li>
            <li className={`${Styles.border_all} ${Styles.col2}`}><ServiceItem
                data={filter_item(serviceData.response, 1)}/></li>
            <li className={`${Styles.border_all} ${Styles.col3}`}><ServiceItem
                data={filter_item(serviceData.response, 2)}/></li>
            <li className={`${Styles.top_right} ${Styles.col4}`}></li>
            <li className={`${Styles.border_all} ${Styles.col5}`}><ServiceItem
                data={filter_item(serviceData.response, 3)}/></li>
            <li className={`${Styles.border_top} ${Styles.col6}`}>Нужен какойто текст</li>
            <li className={`${Styles.border_all} ${Styles.col7}`}><ServiceItem
                data={filter_item(serviceData.response, 4)}/></li>
            <li className={`${Styles.bottom_left} ${Styles.col8}`}></li>
            <li className={Styles.col9}>designed by california</li>
            <li className={`${Styles.bottom_right} ${Styles.col10}`}></li>

        </ul>
    </div>
}
export {ServiceBlock}