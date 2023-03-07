import { ListVpcsRequest, VpcClient, VpcRegion } from "@huaweicloud/huaweicloud-sdk-vpc";
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
            const result = await listVpcs();
            console.log("Result:", JSON.stringify(result, null, 2));
        } catch (error) {
            console.error("Exception:", error);
        } 
    })();
}

export async function listVpcs() {
    const client = VpcClient.newBuilder()
        .withCredential(credentials)
        .withRegion(VpcRegion.CN_EAST_3)
        .build();
    const request = new ListVpcsRequest();
    return await client.listVpcs(request);
}
