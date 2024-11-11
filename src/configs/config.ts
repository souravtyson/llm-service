import dotenv from 'dotenv';

dotenv.config();

const config = {
    osNodes: process.env.OPENSEARCH_NODES || '',
    osProtocol: process.env.OPENSEARCH_PROTCOL || 'http',
    osUsername: process.env.OPENSEARCH_USERNAME || '',
    osPassword: process.env.OPENSEARCH_PASSWORD || ''
};

export default config;