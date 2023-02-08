import Styles from "./BriefFrom.module.scss"
import {useAppSelector} from "store/hooks";
import {getService} from "features/home/services/ServiceSlice";
import {ValidationSchema} from "../ValidationSchema";
import {FormikValues, useFormik} from "formik";
import React, {useEffect, useState} from "react";
import {IChip} from "components/chips/Chips";
import {Chips, TextArea, UploadFile} from "components/index";

const BriefForm = () => {
    const services = useAppSelector(getService);
    const accept = ".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt, .ttf,.pdf"
    const [chipsData, setChipsData] = useState<IChip[]>([])
    const [fileName, setFileName] = useState<React.ChangeEvent<HTMLInputElement>>()
    const formik: FormikValues = useFormik({
        initialValues: {
            service: [],
            task: "",
            file: "",
        },
        validationSchema: ValidationSchema(),
        onSubmit: () => {
            console.log("");
        },
    });

    useEffect(() => {
        setChipsData(services.response.map(e => {
            return {id: e._id, chipName: e.title, isActive: false}
        }))
    }, [services])
    const handleOnChange = () => {
        console.log("Надо все в формик запилить")
    }
    const handleOnChangeUpload = (files: React.ChangeEvent<HTMLInputElement>) => {
        setFileName(files)
    }
    const handleOnDelete = () => {
        setFileName(undefined)
    }
    return <form
        className={Styles.support__form__items}
        onSubmit={formik.handleSubmit}
    >
        <div className={Styles.brief_container}>
            <p>Leave a request, or call, we will talk
                and fill out everything for you ourselves: _____________</p>

            <ul className={`${
                formik.errors?.service && formik.touched?.service
                    ? Styles.item__input_error
                    : Styles.item__input
            }`}>
                <div className={Styles.title_block}>Services</div>
                <Chips chipsData={chipsData}
                       changeFunc={() => handleOnChange()}
                       mode={"multi"}
                />
                <div className={`${
                    formik.errors?.task && formik.touched?.task
                        ? Styles.overflow__auto
                        : Styles.overflow
                }`}
                >
                    <li>{formik.errors.service}</li>
                </div>
            </ul>
            <ul className={`${
                formik.errors?.task && formik.touched?.task
                    ? Styles.item__input_error
                    : Styles.item__input
            }`}
            >
                <div className={Styles.title_block}>Task</div>
                <TextArea onChange={handleOnChange}
                          name={"brief"}
                          labelTitle={"Write your task in detail or select a file with a description of the task"}
                />
                <div
                    className={`${
                        formik.errors?.task && formik.touched?.task
                            ? Styles.overflow__auto
                            : Styles.overflow
                    }`}
                >
                    <li>{formik.errors.task}</li>
                </div>
            </ul>
            <ul>
                <UploadFile name={"input_file"}
                            onDelete={() => handleOnDelete()}
                            fileName={fileName && fileName.target.files[0]?.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChangeUpload(e)}
                            accept={accept}>
                    {<div>Choose file to upload</div>}
                </UploadFile>
            </ul>
            <div className={Styles.title_block}>Contact details</div>
            <ul className={`${
                formik.errors?.task && formik.touched?.task
                    ? Styles.item__input_error
                    : Styles.item__input
            }`}
            >
                <div>uuuu</div>
                <div
                    className={`${
                        formik.errors?.task && formik.touched?.task
                            ? Styles.overflow__auto
                            : Styles.overflow
                    }`}
                >
                    <li>{formik.errors.task}</li>
                </div>
            </ul>
        </div>
    </form>
}

export {BriefForm}