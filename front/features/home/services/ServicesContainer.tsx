import {Container} from "components/common/container";
import Styles from "./Services.module.scss"
import {ServiceBlock} from "features/home/services/ServiceBlock";
import {FC} from "react";

const ServicesContainer:FC = () => {
    return <Container className={`wrapper ${Styles.services_container}`}>
        <h2>Our Services</h2>
        <ServiceBlock/>
    </Container>
}

export {ServicesContainer}