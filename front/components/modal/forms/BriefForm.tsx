import Styles from "./BriefFrom.module.scss"
import {useAppSelector} from "store/hooks";
import {getService} from "features/home/services/ServiceSlice";
import {ValidationSchema} from "../ValidationSchema";
import {FormikValues, useFormik} from "formik";
import React, {useEffect, useState} from "react";
import {IChip} from "components/chips/Chips";
import {Chips, Input, TextArea, UploadFile} from "components/index";
import {IRecommendationsItem, IRecommendationsResponse} from "components/modal/forms/Brief";
import {useGetRecommendations} from "service/list";
import {convertChipsData} from "utils/helpers";

const BriefForm = () => {
    const services = useAppSelector(getService);
    const accept = ".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt, .ttf,.pdf";
    const [chipsData, setChipsData] = useState<IChip[]>([]);
    const [fileName, setFileName] = useState<React.ChangeEvent<HTMLInputElement>>(undefined);
    const [recommendationsData, setRecommendationsData] = useState<IRecommendationsItem[]>(undefined);
    const {getRecommendations} = useGetRecommendations();
    const formik: FormikValues = useFormik({
        initialValues: {
            service: [],
            task: "",
            file: "",
            name: "",
            company: "",
            recommendations: ''
        },
        validationSchema: ValidationSchema(),
        onSubmit: () => {
            console.log("");
        },
    });

    useEffect(() => {
        !services.hasError && setChipsData(convertChipsData(services.response))
    }, [services])

    useEffect(() => {
        getRecommendations().then((data: IRecommendationsResponse) => {
            !data.hasError && setRecommendationsData(convertChipsData(data.response) as IRecommendationsItem[])
        })
    }, []);
    const handleOnChange = () => {
        console.log("Надо все в формик запилить")
    }
    const handleOnChangeUpload = (files: React.ChangeEvent<HTMLInputElement>) => {
        setFileName(files)
    }
    const handleOnDeleteFile = () => {
        setFileName(undefined)
    }


    return <form
        className={Styles.support__form__items}
        onSubmit={formik.handleSubmit}
    >
        <div className={Styles.brief_container}>
            <p>Leave a request, or call, we will talk
                and fill out everything for you ourselves: _____________</p>

            <div className={Styles.block_item}>
                <div className={Styles.title}>Services</div>
                <Chips chipsData={chipsData}
                       changeFunc={() => handleOnChange()}
                       mode={"multi"}
                />
            </div>
            <div className={Styles.block_item}>
                <div className={Styles.title}>Task</div>
                <TextArea onChange={handleOnChange}
                          name={"brief"}
                          labelTitle={"Write your task in detail or select a file with a description of the task"}
                />
                <div className={Styles.upload_block}>
                    <UploadFile name={"input_file"}
                                onDelete={() => handleOnDeleteFile()}
                                fileName={fileName && fileName.target.files[0]?.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChangeUpload(e)}
                                accept={accept}>
                        {<div>Choose file to upload</div>}
                    </UploadFile>
                </div>
            </div>
            <div className={Styles.block_item}>
                <div className={Styles.title}>Contact details</div>
                <div className={Styles.contacts_container}>
                    <Input type={"text"} name={"name"} titleLabel={"Name"} placeholder={" "}/>
                    <Input type={"text"} name={"company"} titleLabel={"Company"} placeholder={" "}/>
                    <Input type={"text"} name={"email"} titleLabel={"Email"} placeholder={" "}/>
                    <Input type={"text"} name={"phone"} titleLabel={"Phone"} placeholder={" "}/>
                </div>
            </div>
            <div className={Styles.block_item}>
                <div className={Styles.title}>How did you know about us?</div>
                <Chips chipsData={recommendationsData as IChip[]}
                       changeFunc={() => handleOnChange()}
                       mode={"multi"}
                />
            </div>

        </div>
    </form>
}

export {BriefForm}