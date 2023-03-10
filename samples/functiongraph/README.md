# Async Invoke Function Request

This is an example code for asynchronously invoking a function using the @huaweicloud/huaweicloud-sdk-functiongraph package.

## Prerequisites

- Node.js (v8.0.0 or later)
- @huaweicloud/huaweicloud-sdk-functiongraph package
- An Access Key and Secret Key for Huawei Cloud IAM

## Installation

1. Clone the repository
2. Rename the `.env.sample` file to `.env` and input your Huawei Cloud credentials
3. Run `npm install @huaweicloud/huaweicloud-sdk-functiongraph dotenv` to install the necessary dependencies

## Usage

To run the code, execute the following command in the terminal:
 
```bash
ts-node samples/functiongraph/AsyncInvokeFunction.ts
```

## Code Structure

The code is written in TypeScript and uses the following libraries:

- `@huaweicloud/huaweicloud-sdk-functiongraph` for the Huawei Cloud FunctionGraph SDK
- `dotenv` to manage the credentials information

The code has the following structure:

1. Load the Huawei Cloud credentials from the `.env` file using the `dotenv` library
2. Define the `asyncInvokeFunction` function that uses the Huawei Cloud FunctionGraph to asynchronously invoke a function
3. If the module is the main module (i.e., executed directly), call the `asyncInvokeFunction` function and output the result

## Further Reading

For more information on the Huawei Cloud Face Recognition API, please refer to the [official documentation](https://console.huaweicloud.com/apiexplorer/?region=cn-north-4#/apidebug/FunctionGraph/doc?api=AsyncInvokeFunction).


For more information on the Huawei Cloud Face Recognition SDK, please refer to the [official documentation](https://console.huaweicloud.com/apiexplorer/#/sdkcenter/FunctionGraph?lang=NodeJs).