# Huawei Cloud Face Recognition

This code uses the Huawei Cloud Face Recognition SDK to compare two face images and output the result.

## Prerequisites

- Node.js and npm must be installed on the system
- A Huawei Cloud account with access to the Face Recognition service

## Installation

1. Clone the repository
2. Rename the `.env.sample` file to `.env` and input your Huawei Cloud credentials
3. Run `npm install @huaweicloud/huaweicloud-sdk-frs dotenv` to install the necessary dependencies

## Usage

To run the code, execute the following command in the terminal:
```bash
ts-node samples/frs/CompareFaceByFile.ts
```

The output will be the result of comparing the two face images.

## Code Structure

The code is written in TypeScript and uses the following libraries:

- `@huaweicloud/huaweicloud-sdk-frs` for the Huawei Cloud Face Recognition SDK
- `dotenv` to manage the credentials information
- `fs` and `path` from Node.js for reading the image files

The code has the following structure:

1. Load the Huawei Cloud credentials from the `.env` file using the `dotenv` library
2. Define the `compareFaceByFile` function that uses the Huawei Cloud Face Recognition SDK to compare two face images
3. If the module is the main module (i.e., executed directly), call the `compareFaceByFile` function and output the result

## Further Reading

For more information on the Huawei Cloud Face Recognition API, please refer to the [official documentation](https://console.huaweicloud.com/apiexplorer/#/apidebug/FRS/doc?api=CompareFaceByFile).


For more information on the Huawei Cloud Face Recognition SDK, please refer to the [official documentation](https://console.huaweicloud.com/apiexplorer/#/sdkcenter/FRS?lang=NodeJs).
