import { compareFaceByFile } from "../samples/frs/CompareFaceByFile";

test('should return 200 status code when comparing faces by file', async () => { 
    const result = await compareFaceByFile();
    expect((result).httpStatusCode).toBe(200);
});