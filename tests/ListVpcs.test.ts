import { listVpcs } from '../samples/vpc/ListVpcs'

describe('listVpcs', () => {
    it('should return a list of VPCs', async () => {
        const vpcs = await listVpcs();

        expect(vpcs.httpStatusCode).toBe(200);
        expect(Array.isArray(vpcs.vpcs)).toBe(true);
        expect(vpcs.vpcs?.length).toBeGreaterThan(0);
    });
});