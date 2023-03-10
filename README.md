# Huawei Cloud Node.js SDK Samples

This repository contains sample code for the Huawei Cloud Node.js SDK. The samples cover different Huawei Cloud services and demonstrate how to use the Huawei Cloud Node.js SDK in different scenarios.

## Prerequisites

- Node.js and npm must be installed on the system
- A Huawei Cloud account with access to the services used by the samples

## Installation

1. Clone the repository
2. Rename the `.env.sample` file in each sample directory to `.env` and input your Huawei Cloud credentials
3. Run `npm install` in each sample directory to install the necessary dependencies

## Usage

To run a sample, execute the following command in the terminal:

```bash
ts-node [filename].ts
```

The output will vary depending on the sample, but in general, it will be the result of calling Huawei Cloud services using the Huawei Cloud Node.js SDK.

## Samples

The repository contains the following samples:

- `CompareFaceByFile.ts`: demonstrates how to use the Huawei Cloud Face Recognition Service (FRS) to compare two face images
- `ListVpcs.ts`: demonstrates how to use the Huawei Cloud Virtual Private Cloud (VPC) service to list all the VPCs in a specific region


## Further Reading

For more information on the Huawei Cloud API, please refer to the [official documentation](https://console.huaweicloud.com/apiexplorer/#).


For more information on the Huawei Cloud Node.js SDK, please refer to the [official documentation](https://console.huaweicloud.com/apiexplorer/#/sdkcenter?lang=NodeJs).
