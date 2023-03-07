/**
 * Install dependencies: 
 * npm install @huaweicloud/huaweicloud-sdk-vpc dotenv
 * 
 * The sample uses dotenv to manage credential information. 
 * Before use, please rename .env.sample to .env and input your credential information.
 * 
 */ 

import { ListVpcsRequest, VpcClient, VpcRegion } from "@huaweicloud/huaweicloud-sdk-vpc";
import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";
import * as dotenv from "dotenv";

dotenv.config();

const ak = process.env.AK;
const sk = process.env.SK; 

const credentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk);

(async function fetchDataUsingRegion() {
    try {
        const client = VpcClient.newBuilder()
            .withCredential(credentials)
            .withRegion(VpcRegion.CN_EAST_3)
            .build();
        const request = new ListVpcsRequest();
        const result = await client.listVpcs(request);
        console.log("Result:", JSON.stringify(result, null, 2));
    } catch (error: any) {
        console.error("Exception:", JSON.stringify(error, null, 2));
    }
})();
