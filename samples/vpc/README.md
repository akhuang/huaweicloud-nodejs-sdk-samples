# Huawei Cloud Virtual Private Cloud

This code uses the Huawei Cloud Virtual Private Cloud (VPC) SDK to list all the VPCs in a specific region.

## Prerequisites

- Node.js and npm must be installed on the system
- A Huawei Cloud account with access to the VPC service

## Installation

1. Clone the repository
2. Rename the `.env.sample` file to `.env` and input your Huawei Cloud credentials
3. Run `npm install @huaweicloud/huaweicloud-sdk-vpc dotenv` to install the necessary dependencies

## Usage

To run the code, execute the following command in the terminal:
 
```bash
ts-node samples/vpc/ListVpcs.ts
```

The output will be a list of all the VPCs in the specified region, displayed as a JSON string.

## Code Structure

The code is written in TypeScript and uses the following libraries:

- `@huaweicloud/huaweicloud-sdk-vpc` for the Huawei Cloud VPC SDK
- `dotenv` to manage the credentials information

The code has the following structure:

1. Load the Huawei Cloud credentials from the `.env` file using the `dotenv` library
2. Define the `listVpcs` function that uses the Huawei Cloud VPC SDK to list all the VPCs in a specific region
3. If the module is the main module (i.e., executed directly), call the `listVpcs` function and output the result

## Further Reading

For more information on the Huawei Cloud Face Recognition API, please refer to the [official documentation](https://console.huaweicloud.com/apiexplorer/#/apidebug/VPC/doc?api=ListVpcs).


For more information on the Huawei Cloud Face Recognition SDK, please refer to the [official documentation](https://console.huaweicloud.com/apiexplorer/#/sdkcenter/VPC?lang=NodeJs).
