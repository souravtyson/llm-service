import { Client } from "@opensearch-project/opensearch/.";
import config from "./config";


var auth=config.osUsername+":"+atob(config.osPassword);

const client = new Client({
    node: config.osProtocol+"://"+auth+"@"+config.osNodes
})

export default client