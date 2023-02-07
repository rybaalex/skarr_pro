import Styles from "./BriefFrom.module.scss"
import {useAppSelector} from "store/hooks";
import {getService} from "features/home/services/ServiceSlice";
import {ValidationSchema} from "../ValidationSchema";
import {FormikValues, useFormik} from "formik";
import {useEffect, useState} from "react";
import {IChip} from "components/chips/Chips";
import {Chips} from "components/chips";

const BriefForm = () => {
    const services = useAppSelector(getService);
    const [chipsData, setChipsData] = useState<IChip[]>([])
    const formik: FormikValues = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company_inn: "",
            service: "",
            order: "",
            post: "",
            forgot: false,
            private_police: false,
        },
        validationSchema: ValidationSchema(),
        onSubmit: () => {
            console.log("");
        },
    });

    useEffect(() => {
        setChipsData(services.response.map(e => {
            return {id: e._id, chipName: e.title, isActive:false}
        }))
    }, [services])
    const handleOnChange = () => {
        console.log("sdfd")
    }
    return <form
        className={Styles.support__form__items}
        onSubmit={formik.handleSubmit}
    >
        <div className={Styles.brief_container}>
            <p>Leave a request, or call, we will talk
                and fill out everything for you ourselves: _____________</p>

            <div className={Styles.support__form__items__select}>
                <ul
                    className={`${
                        formik.errors?.service && formik.touched?.service
                            ? Styles.support__form__item__input_error
                            : Styles.support__form__item__input
                    }`}
                >
                    <div className={Styles.services}>Services</div>

                    <Chips chipsData={chipsData}
                           changeFunc={() => handleOnChange()}
                           mode={"multi"}
                    />

                    <div
                        className={`${
                            formik.errors?.service && formik.touched?.service
                                ? Styles.overflow__auto
                                : Styles.overflow
                        }`}
                    >
                        <li>{formik.errors.service}</li>
                    </div>
                </ul>
            </div>
        </div>
    </form>
}

export {BriefForm}