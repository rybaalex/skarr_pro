import {FC} from "react";
import {Button} from "components/button";
import {Link} from "components/link";
import {servicePath} from "utils/bootstrap";
import {IServiceItem} from "features/home/services/Service";

interface IServiceData {
    data: IServiceItem[]
}

const ServiceItem: FC<IServiceData> = ({data}) => {
    return (<>
        {data && (<>
                <div>
                    <h3>{data[0]?.title}</h3>
                    <p>{data[0]?.description}</p>
                </div>
                <Link url={servicePath}>
                    <Button>get acquainted with the case</Button>
                </Link>
            </>
        )}

    </>)

}

export {ServiceItem}