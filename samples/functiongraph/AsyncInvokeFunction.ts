import { FunctionGraphClient, FunctionGraphRegion, AsyncInvokeFunctionRequest } from "@huaweicloud/huaweicloud-sdk-functiongraph";
import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";
import * as dotenv from "dotenv";

dotenv.config();

const ak = process.env.AK;
const sk = process.env.SK;

const credentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk);


if (module === require.main) {
    (async () => {
        try {
            const result = await asyncInvokeFunction();
            console.log("Result:", JSON.stringify(result, null, 2));
        } catch (error) {
            console.error("Exception:", error);
        }
    })();
}

export async function asyncInvokeFunction() {
    const client = FunctionGraphClient.newBuilder()
        .withCredential(credentials)
        .withRegion(FunctionGraphRegion.CN_NORTH_4)
        .build();
    const request = new AsyncInvokeFunctionRequest();
    request.functionUrn = "urn:fss:cn-north-4:086cd4ee9e00268e2f76c00ea33b6cbe:function:default:testph123:!t123";
    let listbodyAsyncInvokeFunctionRequestBody = {
        "key": {}
    }
    request.withBody(listbodyAsyncInvokeFunctionRequestBody);
    return await client.asyncInvokeFunction(request);
}
