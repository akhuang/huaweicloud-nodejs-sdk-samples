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
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const ak = process.env.AK;
const sk = process.env.SK;

const credentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk);

if (module === require.main) {
    (async () => {
        try {
            const result = await compareFaceByFile();
            console.log("Result:", JSON.stringify(result, null, 2));
        } catch (error: any) {
            console.error("Exception:", error);
        }
    })();
}

export async function compareFaceByFile() {
    const client = FrsClient.newBuilder()
        .withCredential(credentials)
        .withRegion(FrsRegion.CN_EAST_3)
        .build();
    const request = new CompareFaceByFileRequest();

    const body: CompareFaceByFileRequestBody = new CompareFaceByFileRequestBody();

    const filePath = path.join(__dirname, '../images/1.jpeg');
    body.withImage1File(fs.createReadStream(filePath))
    body.withImage2File(fs.createReadStream(filePath))
    request.withBody(body)
    return await client.compareFaceByFile(request);
}