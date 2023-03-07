/**
 * Install dependencies: 
 * npm install @huaweicloud/huaweicloud-sdk-frs dotenv
 * 
 * The sample uses dotenv to manage credential information. 
 * Before use, please rename .env.sample to .env and input your credential information.
 * 
 */

import { FrsClient, CompareFaceByFileRequest, CompareFaceByFileRequestBody, FrsRegion } from "@huaweicloud/huaweicloud-sdk-frs";
import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const ak = process.env.AK;
const sk = process.env.SK;

const credentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk);

(async () => {
    await fetchDataWithRetry();
})();

async function fetchDataWithRetry() {
    try {
        const client = FrsClient.newBuilder()
            .withCredential(credentials)
            .withRegion(FrsRegion.CN_EAST_3)
            .build();
        const request = new CompareFaceByFileRequest();

        const body: CompareFaceByFileRequestBody = new CompareFaceByFileRequestBody();

        const filePath = path.join(__dirname, 'samples/images/1.jpeg');
        body.withImage1File(fs.createReadStream(filePath))
        body.withImage2File(fs.createReadStream(filePath))
        request.withBody(body)
        const result = await client.compareFaceByFile(request);
        console.log("Result:", JSON.stringify(result, null, 2));
    } catch (error: any) {
        console.error("Exception:", JSON.stringify(error, null, 2));
    }
}